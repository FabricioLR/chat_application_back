import sequelize from "../database";
import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize"
import User from "./User";

interface ContactModel extends Model<InferAttributes<ContactModel>, InferCreationAttributes<ContactModel>>{
    id?: string
    userId: string
    contactId: string
}

const Contact = sequelize.define<ContactModel>("contacts", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    userId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id"
        }
    },
    contactId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id"
        }
    }},
    {
        freezeTableName: true
    }
)


export default Contact