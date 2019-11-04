class CreateLiftSets < ActiveRecord::Migration[6.0]
  def change
    create_table :lift_sets do |t|
      t.integer :exercise_id
      t.integer :workout_id
      t.integer :reps, :default => 0
      t.integer :weight, :default => 0
      t.string :goal

      t.timestamps
    end
  end
end
