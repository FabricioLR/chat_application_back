import Contact from "./Contact";
import Message from "./Message";
import User from "./User";

//User.hasMany(Contact, { sourceKey: "publicId" })

Contact.belongsTo(User, { as: "user", foreignKey: "userId" });
Contact.belongsTo(User, { as: "public", foreignKey: "publicId", targetKey: "publicId"});

Message.belongsTo(User, { as: "to", foreignKey: "publicId", targetKey: "publicId" });