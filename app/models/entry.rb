class Entry < ApplicationRecord
  validates :body, presence: true
  include PgSearch::Model
  pg_search_scope :search_by_text,
    against: [ :body ],
    using: {
      tsearch: { prefix: true }
    }
end
