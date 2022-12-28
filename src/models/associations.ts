import Contact from "./Contact";
import Message from "./Message";
import User from "./User";

Contact.belongsTo(User, { as: "user" });
Contact.belongsTo(User, { as: "contact" });

Message.belongsTo(User, { as: "to" });
Message.belongsTo(User, { as: "from" });