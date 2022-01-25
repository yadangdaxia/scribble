class CreateEntries < ActiveRecord::Migration[6.1]
  def change
    create_table :entries do |t|
      t.text :body
      t.datetime :date
      t.float :datapoint

      t.timestamps
    end
  end
end
