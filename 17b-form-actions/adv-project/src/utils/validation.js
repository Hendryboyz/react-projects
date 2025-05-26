import { z } from 'zod/v4';

export const optionFormSchema = z.object({
  userName: z.string().trim().min(3, 'expected name to have >3 characters'),
  title: z.string().trim().min(6, 'expected title to have >6 characters'),
  body: z.string().trim().nonempty('body can not be empty'),
});