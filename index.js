const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const companysRouter = require("./src/api/routes/company.routes");
const camerasRouter = require("./src/api/routes/cameras.routes");

const {connect}= require("./src/utils/database")

dotenv.config()

const server = express();

server.use(express.json());
server.use(express.urlencoded({ extended: true }));

connect();

server.use((req, res, next) => {
    res.header('Access-Control-Allow-Methods', 'GET,PUT,PATCH,POST,DELETE');
    res.header('Access-Control-Allow-Credentials', true);
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    next();
  });

  server.use(cors({
    origin: "*",
    credentials: true
}))

server.use("/companys", companysRouter);
server.use("/cameras", camerasRouter)


const PORT = process.env.PORT || 5000;

server.listen(PORT, () => {
    console.log(`Server listening on http://localhost:${PORT}`)
})