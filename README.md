To configure dB create one .env file in the following format

```
DB_HOST =
DB_USER_NAME =
DB_PASSWORD =
DB_NAME =
```

Synchronize Database with schema in ormconfig.ts make 
```synchronize: true```

Commands :

```To install dependencies : npm install
To run the project : npm start
To prettify your code : npm run prettify
To run the testing script : npm test
To do the migration in dB: npm typeorm migration:run -- -d .src/config/dB.ts```
