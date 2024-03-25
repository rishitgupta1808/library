export default {
    "type": "postgres",
    "host": process.env.DB_HOST,
    "port": 5432,
    "username": process.env.DB_USER_NAME,
    "password": process.env.DB_PASSWORD,
    "database": process.env.DB_NAME,
    "synchronize": false,
    "logging": true,
    "entities": ["src/entity/*.ts"],
    "migrations": ["src/migrations/*.ts"],
    "cli": {
        "entitiesDir": "src/entities",
        "migrationsDir": "src/migrations"
    }
}