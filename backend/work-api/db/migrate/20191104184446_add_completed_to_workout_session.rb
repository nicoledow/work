class AddCompletedToWorkoutSession < ActiveRecord::Migration[6.0]
  def change
    add_column :workout_sessions, :completed, :boolean, :default => false
  end
end
