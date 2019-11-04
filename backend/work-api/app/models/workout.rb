class Workout < ApplicationRecord
    has_many :lift_sets

    scope :completed, -> { where(completed: true) }
    scope :incomplete, -> { where(completed: false) }
end
