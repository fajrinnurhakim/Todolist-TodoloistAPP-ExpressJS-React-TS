require("dotenv").config();

const config = {
    development: {
        username: process.env.DB_USERNAME,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_NAME,
        host: process.env.DB_HOST,
        dialect: "postgres",
        port: 5432,
    },
    // connectionString: process.env.POSTGRES_URL + "?sslmode=require",
};

module.exports = config;
