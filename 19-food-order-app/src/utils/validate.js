import {z} from 'zod/v4'

export const orderSchema = z.object({
  email: z.email(),
  name: z.string().trim().nonempty('name is required'),
  street: z.string().trim().nonempty('street is required'),
  'postal-code': z.string().trim().nonempty('postal code is required'),
  city: z.string().trim().nonempty('city is required'),
});