import express from "express";
import passport from "passport";
import jwt from "jsonwebtoken";

// import {
//   getUsers,
//   getUserById,
//   postUser,
// } from "../controller/userController.js";

const router = express.Router();

// router.route("/").get(getUsers).post(postUser);
// router.route("/:id").get(getUserById);

router
  .route("/signup")
  .post(
    passport.authenticate("signup", { session: false }),
    async (req, res, next) => {
      res.json({
        message: "Signup successful",
        user: req.user,
      });
    }
  );

router.route("/login").post(async (req, res, next) => {
  passport.authenticate("login", async (err, user, info) => {
    try {
      console.log(err, user, info);
      if (err || !user) {
        const error = new Error("An error occurred.");

        return next(error);
      }

      req.login(user, { session: false }, async (error) => {
        if (error) return next(error);

        const body = { _id: user._id, username: user.username };
        const token = jwt.sign({ user: body }, process.env.JWT_SECRET);

        return res.json({ token });
      });
    } catch (error) {
      return next(error);
    }
  })(req, res, next);
});

export default router;
