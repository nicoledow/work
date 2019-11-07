class LiftSet < ApplicationRecord
    belongs_to :workout
    belongs_to :exercise

    def get_exercise_name
      exercise = Exercise.find_by_id(self.exercise_id)
      exercise.name
    end

    def self.narrow_by_workout(workout_id)
      LiftSet.all.select {|set| set.workout_id == workout_id}
    end
end
