class WorkoutSession < ApplicationRecord
    has_many :exercise_sets

    scope :completed, -> { where(completed: true) }
    scope :incomplete, -> { where(completed: false) }
end
