class CreateExerciseSets < ActiveRecord::Migration[6.0]
  def change
    create_table :exercise_sets do |t|
      t.integer :exercise_id
      t.integer :workout_id
      t.integer :weight
      t.integer :reps

      t.timestamps
    end
  end
end
