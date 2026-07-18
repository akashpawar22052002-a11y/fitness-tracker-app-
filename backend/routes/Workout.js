const express = require('express')
const {
  getWorkouts,
  getWorkout,
  createWorkout,
  deleteWorkout,
  updateWorkout
} = require('../controllers/workoutController') // स्पेलिंग आणि कॅपिटल अक्षरे तपासा

const router = express.Router()

router.get('/', getWorkouts)
router.post('/', createWorkout)
router.delete('/:id', deleteWorkout) // ही ओळ महत्त्वाची आहे

module.exports = router