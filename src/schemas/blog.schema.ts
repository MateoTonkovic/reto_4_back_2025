import { z } from 'zod';

export const registroSchema = z.object({
    titulo: z.string().min(1, 'El título es obligatorio'),
    descripcion: z.string().min(1, 'La descripción es obligatoria'),
    userId: z.number().int().positive('El ID de usuario debe ser un entero positivo')
});

export const registroUpdateSchema = registroSchema.partial();