'use server';

import { z } from 'zod';
import axios from 'axios';

const partialConsultationSchema = z.object({
  fullName: z.string(),
  email: z.string().email(),
  phone: z.string(),
});

const fullConsultationSchema = partialConsultationSchema.extend({
  city: z.string(),
  requirement: z.enum([
    'Kitchens',
    'Living Rooms',
    'Bedrooms',
    'Wardrobes',
    'Bathrooms',
    'Study Areas',
  ]),
});

async function createOrUpdateHubspotContact(
  email: string,
  properties: Record<string, any>
) {
  const hubspotAccessToken = process.env.HUBSPOT_ACCESS_TOKEN;
  if (!hubspotAccessToken) {
    console.error('HubSpot access token not configured.');
    return {
      success: false,
      message: 'Integration error: HubSpot is not configured.',
    };
  }

  const endpoint = `https://api.hubapi.com/crm/v3/objects/contacts/${email}?idProperty=email`;

  const [firstName, ...lastNameParts] =
    properties.fullName?.split(' ') || [];
  const lastName = lastNameParts.join(' ');

  const hubspotProperties = {
    firstname: firstName,
    lastname: lastName,
    phone: properties.phone,
    city: properties.city,
    lifecyclestage: 'lead',
    what_are_you_looking_for_: properties.requirement
      ? properties.requirement.toLowerCase().replace(/ /g, '_')
      : undefined,
  };

  try {
    const response = await axios.patch(endpoint, { properties: hubspotProperties }, {
      headers: {
        Authorization: `Bearer ${hubspotAccessToken}`,
        'Content-Type': 'application/json',
      },
    });
    console.log('HubSpot contact updated:', response.data);
    return { success: true, hubspotVid: response.data.vid };
  } catch (error: any) {
    if (error.response && error.response.status === 404) {
      try {
        const createEndpoint = `https://api.hubapi.com/crm/v3/objects/contacts`;
        const createResponse = await axios.post(
          createEndpoint,
          { properties: { ...hubspotProperties, email } },
          {
            headers: {
              Authorization: `Bearer ${hubspotAccessToken}`,
              'Content-Type': 'application/json',
            },
          }
        );
        console.log('HubSpot contact created:', createResponse.data);
        return { success: true, hubspotVid: createResponse.data.vid };
      } catch (createError: any) {
        console.error(
          'HubSpot create error:',
          createError.response?.data || createError.message
        );
        return {
          success: false,
          message: 'Could not save contact to HubSpot.',
        };
      }
    } else {
      console.error(
        'HubSpot update error:',
        error.response?.data || error.message
      );
      return { success: false, message: 'Could not update contact in HubSpot.' };
    }
  }
}

export async function handlePartialConsultation(values: {
  fullName: string;
  email: string;
  phone: string;
}) {
  const parsed = partialConsultationSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid data provided.' };
  }
  
  // In a real application, you would save this to a database,
  // send an email, or integrate with a CRM.
  console.log('Partial consultation request:', parsed.data);
  
  return createOrUpdateHubspotContact(parsed.data.email, parsed.data);
}

export async function handleFullConsultation(values: {
  fullName: string;
  email: string;
  phone: string;
  city: string;
  requirement:
    | 'Kitchens'
    | 'Living Rooms'
    | 'Bedrooms'
    | 'Wardrobes'
    | 'Bathrooms'
    | 'Study Areas';
}) {
  const parsed = fullConsultationSchema.safeParse(values);

  if (!parsed.success) {
    return { success: false, message: 'Invalid data provided.' };
  }

  // In a real application, you would save this to a database,
  // send an email, or integrate with a CRM.
  console.log('Full consultation request:', parsed.data);

  return createOrUpdateHubspotContact(parsed.data.email, parsed.data);
}
