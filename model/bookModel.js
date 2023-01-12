import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  Author: {
    type: String,
    required: true,
  },
  genre: {
    type: String,
  },
  img:
    {
        data: Buffer,
        contentType: String
    }
});

const BookModel = mongoose.model("Book", BookSchema);
export default BookModel;
