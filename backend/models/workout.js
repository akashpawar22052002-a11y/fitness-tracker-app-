const mongoose = require('mongoose')

const Schema = mongoose.Schema

const workoutSchema = new Schema({
  title: { type: String, required: true },
  reps: { type: Number, required: true },
  load: { type: Number, required: true }
}, { timestamps: true })

// ही ओळ सर्वात महत्त्वाची आहे
module.exports = mongoose.model('Workout', workoutSchema)