import "dotenv/config"
import { Options, Sequelize } from "sequelize"

const url = process.env.NODE_ENV == "development" ? process.env.DEVELOPMENT_URL as Options : process.env.URL as Options

const sequelize = new Sequelize(url)

export default sequelize
