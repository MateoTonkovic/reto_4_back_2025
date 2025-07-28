import { Sequelize } from 'sequelize';
import config from './sequelize.config';

const env = process.env.NODE_ENV || 'development';
const cfg = config[env];

export const sequelize = new Sequelize(cfg.database, cfg.username, cfg.password, {
    host: cfg.host,
    dialect: 'postgres'
});