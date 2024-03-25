export default {
    "type": "postgres",
    "host": "localhost",
    "port": 5432,
    "username": "sourceone",
    "password": "sourceone",
    "database": "postgres",
    "synchronize": false,
    "logging": true,
    "entities": ["src/entity/*.ts"],
    "migrations": ["src/migrations/*.ts"],
    "cli": {
        "entitiesDir": "src/entities",
        "migrationsDir": "src/migrations"
    }
}