import { DataTypes } from 'sequelize';
import { sequelize } from '../config/database';

/**
 * @swagger
 * components:
 *   schemas:
 *     Blog:
 *       type: object
 *       required:
 *         - titulo
 *         - descripcion
 *         - userId
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the blog
 *         titulo:
 *           type: string
 *           description: Title of the blog
 *         descripcion:
 *           type: string
 *           description: Description/content of the blog
 *         userId:
 *           type: integer
 *           description: ID of the user who created the blog
 *       example:
 *         id: 1
 *         titulo: "Mi primer blog"
 *         descripcion: "Contenido del blog"
 *         userId: 2
 */

export const Blog = sequelize.define('Blog', {
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        autoIncrement: true,
        primaryKey: true
    },
    titulo: {
        type: DataTypes.STRING,
        allowNull: false
    },
    descripcion: {
        type: DataTypes.TEXT,
        allowNull: false
    },
    userId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false
    }
}, {
    tableName: 'registros'
});