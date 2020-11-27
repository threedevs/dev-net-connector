const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  linkedinURL: { type: String },
  discordHandle: { type: String },
  twitterHandle: { type: String },
  githubHandle: { type: String },
});

module.exports = new mongoose.model('User', userSchema);
