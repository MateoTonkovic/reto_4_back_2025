import { Request, Response } from 'express';
import {
    createRegistro,
    getAllRegistros,
    getRegistroById,
    updateRegistro,
    deleteRegistro
} from '../services/blog.service';

export async function createRegistroHandler(req: Request, res: Response) {
    const { success, data, error } = await createRegistro(req.body);
    if (!success) return res.status(400).json(error);
    return res.status(201).json(data);
}

export async function getRegistrosHandler(req: Request, res: Response) {
    const { success, data } = await getAllRegistros();
    return res.json(data);
}

export async function getRegistroHandler(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const { success, data, error } = await getRegistroById(id);
    if (!success) return res.status(404).json(error);
    return res.json(data);
}

export async function updateRegistroHandler(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const { success, data, error } = await updateRegistro(id, req.body);
    if (!success) return res.status(400).json(error);
    return res.json(data);
}

export async function deleteRegistroHandler(req: Request, res: Response) {
    const id = parseInt(req.params.id, 10);
    const { success, error } = await deleteRegistro(id);
    if (!success) return res.status(404).json(error);
    return res.status(204).send();
}