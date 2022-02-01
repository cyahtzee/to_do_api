class CreateTasks < ActiveRecord::Migration[6.0]
  def change
    create_table :tasks do |t|
      t.string :title
      t.integer :priority
      t.text :description

      t.timestamps
    end
  end
end
