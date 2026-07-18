const Workout = require('../models/workout') // तुमच्या मॉडेल फाईलचे नाव तपासा
const mongoose = require('mongoose')

// सर्व वर्कआउट्स मिळवणे
const getWorkouts = async (req, res) => {
  const workouts = await Workout.find({}).sort({createdAt: -1})
  res.status(200).json(workouts)
}

// नवीन वर्कआउट तयार करणे
const createWorkout = async (req, res) => {
  const {title, load, reps} = req.body
  try {
    const workout = await Workout.create({title, load, reps})
    res.status(200).json(workout)
  } catch (error) {
    res.status(400).json({error: error.message})
  }
}

const deleteWorkout = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'No such workout'})
  }

  const workout = await Workout.findOneAndDelete({_id: id})

  if (!workout) {
    return res.status(400).json({error: 'No such workout'})
  }

  res.status(200).json(workout)
}
module.exports = { getWorkouts, createWorkout, deleteWorkout }