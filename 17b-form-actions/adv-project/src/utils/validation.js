import { z } from 'zod/v4';

export const optionFormSchema = z.object({
  userName: z.string().trim().nonempty('please provide your name'),
  title: z.string().trim().min(6, 'expected title to have >6 characters'),
  body: z.string().trim()
    .min(10, 'expected body to have <10 characters')
    .max(300, 'expected body to have <300 characters'),
});