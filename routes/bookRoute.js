import express from "express";

import {
  getBooks,
  getBookById,
  postBook,
} from "../controller/bookController.js";

const router = express.Router();

router.route("/").get(getBooks).post(postBook);
router.route("/:id").get(getBookById);

export default router;
