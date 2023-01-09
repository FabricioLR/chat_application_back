import sequelize from "../database";
import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize";

export interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id?: string;
    name: string;
    email: string;
    password: string;
    profile_image?: string;
    token?: string | null;
}

const User = sequelize.define<UserModel>("users", {
    id: {
        type: DataTypes.UUID,
        allowNull: false,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    profile_image: {
        type: DataTypes.STRING,
        allowNull: true,
    },
    token: {
        type: DataTypes.STRING,
        allowNull: true
    }},
    {
        freezeTableName: true
    }
)

export default User