import { z } from 'zod';

export const DrinkValidationSchema = z.object({
  image: z.string(),
  name: z.string().max(255),
  description: z.string().max(1000),
  price: z.number().positive(),
  ingrdients: z.number().array(),
});

export type DrinkDto = z.infer<typeof DrinkValidationSchema>;
