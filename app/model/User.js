import mongoose from "mongoose";

const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    requried: true,
    unique: true,
  },

  password: {
    type: String,
    required: true,
    minlength: 6,
  },

  movies: [
    {
      type: mongoose.Types.ObjectId,
      ref: "Movie",
      required: true,
    },
  ],
});

export default mongoose.model("User", userSchema);
