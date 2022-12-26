import "dotenv/config"
import { Options, Sequelize } from "sequelize"

const url = process.env.URL as Options

const sequelize = new Sequelize(url)

export default sequelize
