const express = require("express");
const Workout = require("../models/WorkoutModel");

const router = express.Router();

// GET all workouts
router.get("/", (req, res) => {
  res.json({ mssg: "GET all workouts" });
});

// GET single workout
router.get("/:id", (req, res) => {
  res.json({ mssg: "GET single workout" });
});

// POST a new workout
router.post("/", async (req, res) => {
  const { title, load, reps } = req.body;

  try {
    const workout = await Workout.create({ title, load, reps });
    res.status(200).json(workout);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// DELETE workout
router.delete("/:id", (req, res) => {
  res.json({ mssg: "DELETE a new workout" });
});

// UPDATE workout (pacth)
router.patch("/:id", (req, res) => {
  res.json({ mssg: "UPDATE a new workout" });
});

module.exports = router;