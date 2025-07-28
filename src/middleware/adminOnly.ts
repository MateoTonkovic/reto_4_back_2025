import { Response, NextFunction } from 'express';
import { AuthenticatedRequest } from '../types/express/index';

export function adminOnlyMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction) {
    if (req.user?.role !== 'admin') {
        return res.status(403).json({ message: 'Access denied: Admins only' });
    }
    next();
}
