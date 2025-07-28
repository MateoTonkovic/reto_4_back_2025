import { registerSchema, loginSchema } from '../schemas/user.schema';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { User } from '../models/user.model';

interface ServiceResult {
    success: boolean;
    data?: any;
    error?: any;
}

export async function registerUser(payload: unknown): Promise<ServiceResult> {
    const parsed = registerSchema.safeParse(payload);
    
    if (!parsed.success) {
        return { success: false, error: parsed.error.format() };
    }
    
    const { email, password } = parsed.data;
    
    const hash = await bcrypt.hash(password, 10);
    const user = await User.create({ email, password: hash });
    
    return { success: true, data: user };
}

export async function loginUser(payload: unknown): Promise<ServiceResult> {
    const parsed = loginSchema.safeParse(payload);
    
    if (!parsed.success) {
        return { success: false, error: parsed.error.format() };
    }

    const { email, password } = parsed.data;
    const user = await User.findOne({ where: { email } });

    if (!user) {
        return { success: false, error: { message: 'Invalid credentials' } };
    }
    const valid = await bcrypt.compare(password, user.password);
    if (!valid) {
        return { success: false, error: { message: 'Invalid credentials' } };
    }

    const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET as string, { expiresIn: '1h' });
    
    return { success: true, data: { token } };
}