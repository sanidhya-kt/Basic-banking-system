const mongoose = require("mongoose");

const userModel = mongoose.Schema(
  {
    Username: {
      type: String,
      required: true,
    },
    currentbalance: {
      type: Number,
      required: true,
    },
  },
  {
    timestamps: { createdAt: "created_at", updatedAt: "updated_at" },
  }
);

module.exports = mongoose.model(User, userModel);
