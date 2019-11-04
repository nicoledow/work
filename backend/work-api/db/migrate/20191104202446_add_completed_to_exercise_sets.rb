class AddCompletedToExerciseSets < ActiveRecord::Migration[6.0]
  def change
    add_column :exercise_sets, :completed, :boolean, :default => false
  end
end
