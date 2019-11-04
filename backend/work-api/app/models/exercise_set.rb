class ExerciseSet < ApplicationRecord
    belongs_to :workout
    belongs_to :exercise

    def self.find_by_workout_id(id)
      ExerciseSet.all.select {|e| e.workout_id == id}
    end
end
