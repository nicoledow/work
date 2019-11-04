Workout.create(title: "Compound lifts", focus: "Full Body", date: "11/04/19")
Workout.create(title: "Light Cardio", focus: "Cardio", date: "11/05/19")

Exercise.create(name: "Bench Press", muscle: "Chest")
Exercise.create(name: "Squat", muscle: "Quadriceps")
Exercise.create(name: "Lat Pulldown", muscle: "Back")
Exercise.create(name: "Spring", muscle: "All")

ExerciseSet.create(exercise_id: 1, workout_id: 1, reps: 5, weight: 75)
ExerciseSet.create(exercise_id: 2, workout_id: 1, reps: 8, weight: 125)
ExerciseSet.create(exercise_id: 3, workout_id: 1, reps: 12, weight: 70)
ExerciseSet.create(exercise_id: 1, workout_id: 1, reps: 5, weight: 75)
ExerciseSet.create(exercise_id: 4, workout_id: 2, reps: 5, weight: 0)