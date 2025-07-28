/**
 * @swagger
 * /blog:
 *   post:
 *     summary: Create a new blog
 *     tags: [Blog]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blog'
 *     responses:
 *       201:
 *         description: Blog created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *   get:
 *     summary: Get all blogs
 *     tags: [Blog]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: List of blogs
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Blog'
 *       401:
 *         description: Unauthorized
 *
 * /blog/{id}:
 *   get:
 *     summary: Get a blog by ID
 *     tags: [Blog]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Blog ID
 *     responses:
 *       200:
 *         description: Blog found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       401:
 *         description: Unauthorized
 *       404:
 *         description: Blog not found
 *   put:
 *     summary: Update a blog by ID
 *     tags: [Blog]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Blog ID
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Blog'
 *     responses:
 *       200:
 *         description: Blog updated
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Blog'
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Blog not found
 *   delete:
 *     summary: Delete a blog by ID (logical delete)
 *     tags: [Blog]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: integer
 *         required: true
 *         description: Blog ID
 *     responses:
 *       200:
 *         description: Blog deleted
 *       401:
 *         description: Unauthorized
 *       403:
 *         description: Forbidden
 *       404:
 *         description: Blog not found
 */

import { Router } from 'express';
import {
    createRegistroHandler,
    getRegistrosHandler,
    getRegistroHandler,
    updateRegistroHandler,
    deleteRegistroHandler
} from '../controllers/blog.controller';
import { firebaseAuthMiddleware } from '../middleware/firebaseAuth';
import { adminOnlyMiddleware } from '../middleware/adminOnly';

const router = Router();

router.post('/', firebaseAuthMiddleware, adminOnlyMiddleware, createRegistroHandler);
router.get('/', firebaseAuthMiddleware, getRegistrosHandler);
router.get('/:id', firebaseAuthMiddleware, getRegistroHandler);
router.put('/:id', firebaseAuthMiddleware, adminOnlyMiddleware, updateRegistroHandler);
router.delete('/:id', firebaseAuthMiddleware, adminOnlyMiddleware, deleteRegistroHandler);

export default router;