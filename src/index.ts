import 'dotenv/config';
import app from './app';
import { sequelize } from './config/database';

const PORT = process.env.PORT || 3000;

sequelize.authenticate()
    .then(() => console.log('Database connected'))
    .catch(err => console.error('DB connection error:', err));

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:\${PORT}\n`);
});