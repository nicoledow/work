class AddCompletedToWorkouts < ActiveRecord::Migration[6.0]
  def change
    add_column :workouts, :completed, :boolean, :default => false
  end
end
