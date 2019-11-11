Workout.create(title: "Compound lifts", focus: "Full Body", date: "11/04/19")
Workout.create(title: "Upper Body", focus: "Strength", date: "11/05/19")

Exercise.create(name: "Bench Press", muscle: "Chest")
Exercise.create(name: "Squat", muscle: "Quadriceps")
Exercise.create(name: "Lat Pulldown", muscle: "Back")
Exercise.create(name: "Chin-ups", muscle: "Biceps")

LiftSet.create(exercise_id: 1, workout_id: 1, goal: "5 reps at 70 lbs")
LiftSet.create(exercise_id: 2, workout_id: 1, goal: "8 reps at 125 lbs")
LiftSet.create(exercise_id: 3, workout_id: 1, goal: "12 reps at 60 lbs")
LiftSet.create(exercise_id: 1, workout_id: 1, goal: "5 reps at 70 lbs")
LiftSet.create(exercise_id: 4, workout_id: 2, goal: "5 reps at bodyweight")