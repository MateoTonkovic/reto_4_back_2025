# Blog API

API REST para la gestión de blogs con autenticación y permisos, desarrollada con Node.js, Express y Sequelize.

## Tecnologías utilizadas
- Node.js
- Express
- Sequelize
- PostgreSQL o SQLite
- JWT y Firebase Admin SDK
- Swagger para documentación

## Características
- Autenticación de usuarios mediante login (JWT y Firebase)
- CRUD completo para la entidad `blog`
- Eliminación lógica de registros
- Validación de datos en los requests
- Permisos básicos (usuarios y administradores)
- Documentación interactiva con Swagger

## Instalación y ejecución

1. **Clona el repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>
   cd <NOMBRE_DEL_REPOSITORIO>
   ```

2. **Instala las dependencias:**
   ```bash
   npm install
   ```

3. **Configura las variables de entorno:**
   Crea un archivo `.env` en la raíz con el siguiente contenido:
   ```env
   PORT=3000
   JWT_SECRET=tu_jwt_secreto
   DATABASE_URL=postgres://usuario:contraseña@localhost:5432/nombre_db
   # O para SQLite
   # DATABASE_URL=sqlite:./database.sqlite
   ```
   Si usas Firebase, asegúrate de tener configuradas las credenciales en tu entorno.

4. **Ejecuta las migraciones y seeders si es necesario:**
   ```bash
   npx sequelize-cli db:migrate
   npx sequelize-cli db:seed:all
   ```

5. **Inicia el servidor:**
   ```bash
   npm run dev
   ```

6. **Accede a la documentación Swagger:**
   Visita [http://localhost:3000/api-docs](http://localhost:3000/api-docs) para ver y probar los endpoints.

## Endpoints principales

- `POST /api/blog` - Crear blog (admin)
- `GET /api/blog` - Listar blogs (usuario autenticado)
- `GET /api/blog/:id` - Obtener blog por ID (usuario autenticado)
- `PUT /api/blog/:id` - Editar blog (admin)
- `DELETE /api/blog/:id` - Eliminar blog (admin, eliminación lógica)
- `POST /api/auth/login` - Login de usuario (JWT)

## Permisos
- Los usuarios con rol `admin` pueden crear, editar y eliminar blogs.
- Los usuarios comunes pueden consultar blogs.

## Autenticación
- JWT para login local.
- Validación de tokens de Firebase con Firebase Admin SDK.

## Estructura del proyecto
```
projecto_inicial/
├── src/
│   ├── app.ts
│   ├── index.ts
│   ├── config/
│   ├── controllers/
│   ├── middleware/
│   ├── migrations/
│   ├── models/
│   ├── routes/
│   ├── schemas/
│   ├── seeders/
│   └── services/
├── package.json
├── tsconfig.json
└── README.md
```

# reto_4_back_2025
