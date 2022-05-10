class CreateStretches < ActiveRecord::Migration[6.1]
  def change
    create_table :stretches do |t|
      t.text :instructions
      t.belongs_to :muscle, null: false, foreign_key: true
      t.timestamps
    end
  end
end
