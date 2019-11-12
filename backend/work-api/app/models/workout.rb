class Workout < ApplicationRecord
    has_many :lift_sets
    has_many :exercises, through: :lift_sets

    scope :completed, -> { where(completed: true) }
    scope :incomplete, -> { where(completed: false) }

    scope :liked, -> { where(liked: true) }
end
