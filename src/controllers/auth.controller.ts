import { Request, Response } from 'express';
import { registerUser, loginUser } from '../services/auth.service';

export async function registerHandler(req: Request, res: Response) {
    const { success, data, error } = await registerUser(req.body);
    if (!success) {
        return res.status(400).json(error);
    }
    return res.status(201).json(data);
}

export async function loginHandler(req: Request, res: Response) {
    const { success, data, error } = await loginUser(req.body);
    if (!success) {
        return res.status(401).json(error);
    }
    return res.json(data);
}