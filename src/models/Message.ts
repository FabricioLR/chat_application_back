import sequelize from "../database";
import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";
import User from "./User";

export interface MessageModel extends Model<InferAttributes<MessageModel>, InferCreationAttributes<MessageModel>> {
    id?: string;
    userId: string;
    publicId: string;
    message: string;
}

const Message = sequelize.define<MessageModel>("messages", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    userId: {
        type: DataTypes.UUID,
    },
    publicId: {
        type: DataTypes.UUID,
        references: {
            model: User,
            key: "publicId"
        }
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