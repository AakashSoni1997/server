const mongoose =require ("mongoose")

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

module.exports= mongoose.model("User", userSchema);
