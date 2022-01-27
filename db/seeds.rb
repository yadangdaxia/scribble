# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

require 'faker'

puts "Destroying all entries"
Entry.destroy_all

puts "Creating new entries"

10.times do
  Entry.create(
    date: Faker::Date.between(from: 1.year.ago, to: Date.today),
    body: Faker::Movies::Hobbit.quote,
    datapoint: rand(0...10.0).round(1)
  )
end

puts "Created #{Entry.count} entries."
