import { Schema, model } from "mongoose";
import { hash as _hash } from "bcrypt";

const UserSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true,
    trim: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
    trim: true,
  },
  role: {
    type: String,
    enum: ["user", "admin"],
    default: "user",
  },
  cards: [
    {
      type: Schema.Types.ObjectId,
      ref: "Card",
    },
  ],
});
UserSchema.pre("save", function (next) {
  if (!this.isModified("password")) return next();
  _hash(this.password, 10, (error, hash) => {
    this.password = hash;
    next();
  });
});
const User = model("User", UserSchema);

export default User;
