export default {
    "type": "postgres",
    "host": "localhosts",
    "port": 5432,
    "username": "sourceone",
    "password": "sourceone",
    "database": "postgres",
    "synchronize": false,
    "logging": true,
    "entities": ["src/entity/*.ts"]
}