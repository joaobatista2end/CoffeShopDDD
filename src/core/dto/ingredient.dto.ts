import { z } from 'zod';

export const IngredientValidationSchema = z.object({
  image: z.string().optional(),
  name: z.string().max(255),
  description: z.string().max(1000).optional(),
  price: z.number().positive(),
  unit: z.string(),
});

export type IngredientDto = z.infer<typeof IngredientValidationSchema>;
