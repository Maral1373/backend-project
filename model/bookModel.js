import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  users: [
    {
      user: {
        type: mongoose.Types.ObjectId,
        ref: "user",
      },
    },
  ],
});

const BookModel = mongoose.model("Book", BookSchema);
export default BookModel;
