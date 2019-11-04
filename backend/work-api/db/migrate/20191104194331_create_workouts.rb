class CreateWorkouts < ActiveRecord::Migration[6.0]
  def change
    create_table :workouts do |t|
      t.string :title
      t.string :focus
      t.string :date
      t.boolean :completed, :default => false

      t.timestamps
    end
  end
end
