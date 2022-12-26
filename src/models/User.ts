import sequelize from "../database";
import { DataTypes, Model, InferAttributes, InferCreationAttributes } from "sequelize"

interface UserModel extends Model<InferAttributes<UserModel>, InferCreationAttributes<UserModel>> {
    id?: string;
    name: string;
    email?: string;
    password?: string;
    profile_image: string;
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
    },
    profile_image: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

export default User