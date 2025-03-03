import { Sequelize } from "sequelize";


const sequilize = new Sequelize(
    "auth-db", "admin", "123456",
    {
        host: "localhost",
        dialect: "postgres",
        quoteIdentifiers: false,
        define: {
            syncOnAssocieation: true,
            timestamps: false,
            underscored: true,
            underscoredAll: true,
            freezeTableName: true

        }
});

sequilize.authenticate().then(() => {
    console.info("Connection has been established successfully.");
}).catch(err => {
    console.error("Unable to connect to the database:");
    console.error(err.message);

});

export default sequilize;