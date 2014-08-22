class AddDateColumn < ActiveRecord::Migration
  def change
    add_column :tasks, :date_created, :date
  end
end
