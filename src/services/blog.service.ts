import { registroSchema, registroUpdateSchema } from '../schemas/blog.schema';
import { Blog } from '../models/blog.model';

interface ServiceResult {
    success: boolean;
    data?: any;
    error?: any;
}

export async function createRegistro(payload: unknown): Promise<ServiceResult> {
    const parsed = registroSchema.safeParse(payload);
    if (!parsed.success) {
        return { success: false, error: parsed.error.format() };
    }
    const blog = await Blog.create(parsed.data);
    return { success: true, data: blog };
}

export async function getAllRegistros(): Promise<ServiceResult> {
    const registros = await Blog.findAll();
    return { success: true, data: registros };
}

export async function getRegistroById(id: number): Promise<ServiceResult> {
    const blog = await Blog.findByPk(id);
    if (!blog) {
        return { success: false, error: { message: 'Blog no encontrado' } };
    }
    return { success: true, data: blog };
}

export async function updateRegistro(id: number, payload: unknown): Promise<ServiceResult> {
    const parsed = registroUpdateSchema.safeParse(payload);
    if (!parsed.success) {
        return { success: false, error: parsed.error.format() };
    }
    const blog = await Blog.findByPk(id);
    if (!blog) {
        return { success: false, error: { message: 'Blog no encontrado' } };
    }
    await blog.update(parsed.data);
    return { success: true, data: blog };
}

export async function deleteRegistro(id: number): Promise<ServiceResult> {
    const blog = await Blog.findByPk(id);
    if (!blog) {
        return { success: false, error: { message: 'Blog no encontrado' } };
    }
    await blog.destroy();
    return { success: true, data: null };
}