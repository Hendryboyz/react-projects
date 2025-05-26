import { z } from 'zod/v4';

export const signupFormSchema = z.object({
  email: z.email({ error: 'Invalid email address' }),
  password: z.string().nonempty().min(6, {error: 'Password must be at least 6 characters'}),
  confirmPassword: z.string().nonempty(),
  firstName: z.string().nonempty({ error: 'Please provide your first name' }),
  lastName: z.string().nonempty({ error: 'Please provide your last name' }),
  role: z.string().nonempty({ error: 'Please provide your role' }),
  acquisitionChannel: z.array(z.string()).nonempty('Please select at least one acquisition channel'),
  terms: z.boolean('You must agree to the terms and conditions'),
}).refine((data) => (data.password === data.confirmPassword), {
  error: 'Passwords do not match',
  path: ['confirmPassword'],
});


export function isEmail(value) {
  return value.includes('@');
}

export function isNotEmpty(value) {
  return value.trim() !== '';
}

export function hasMinLength(value, minLength) {
  return value.length >= minLength;
}

export function isEqualToOtherValue(value, otherValue) {
  return value === otherValue;
}