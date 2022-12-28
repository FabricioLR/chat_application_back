import sequelize from "../database";
import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize"
import User from "./User";

interface MessageModel extends Model<InferAttributes<MessageModel>, InferCreationAttributes<MessageModel>>{
    id?: string
    fromId: string
    toId: string
    contactId: string
    message: string
}

const Message = sequelize.define<MessageModel>("messages", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    fromId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id"
        }
    },
    toId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "id"
        }
    },
    contactId: {
        type: DataTypes.UUID,
        allowNull: false,
    },
    message: {
        type: DataTypes.TEXT,
        allowNull: false,
    }},
    {
        freezeTableName: true
    }
)


export default Message