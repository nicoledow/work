class AddRatingToWorkout < ActiveRecord::Migration[6.0]
  def change
    add_column :workouts, :liked, :boolean
  end
end
