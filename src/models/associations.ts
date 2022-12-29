import Contact from "./Contact";
import Message from "./Message";
import User from "./User";

Contact.belongsTo(User, { as: "user1" });
Contact.belongsTo(User, { as: "user2" });

Message.belongsTo(User, { as: "to" });
Message.belongsTo(User, { as: "from" });