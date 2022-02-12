class Entry < ApplicationRecord
  validates :body, presence: true
  include PgSearch::Model
  pg_search_scope :search_by_text,
    against: [ :body ],
    using: {
      tsearch: { prefix: true }
    }

  def get_values(key)
    self.map{|x| x[key]}
  end
end
