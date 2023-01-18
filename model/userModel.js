import mongoose from "mongoose";
import bcrypt from "bcrypt";

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  favoriteBooks: [
    {
      type: mongoose.Types.ObjectId,
      ref: "product",
    },
  ],
});

UserSchema.pre("save", async function (next) {
  const hash = await bcrypt.hash(this.password, 10);
  this.password = hash;
  next();
});

UserSchema.methods.isValidPassword = async function (password) {
  const compare = await bcrypt.compare(password, this.password);

  return compare;
};

const UserModel = mongoose.model("User", UserSchema);
export default UserModel;
