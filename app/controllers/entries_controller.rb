class EntriesController < ApplicationController
  # This line calls the find_entry method and executes it at the beginning of these four methods:
  before_action :find_entry, only: [:show, :edit, :update, :destroy]
  def home

    @time = Date.today.strftime("%A, %B %e, %Y %l:%M %p")

    # :member comes from input type in form
    search = params[:member]
    # Define variables that are accessible in the view
    @members = ['yumeng', 'adam', 'dog', 'cat']
    if search.present?
      @members = @members.select { |name| name == search }
    end
  end

  def index
    # @entries = Entry.all
    if params[:query].present?
      @entries = Entry.search_by_text(params[:query])
    else
      @entries = Entry.all
    end
  end

  def data
    # Hardcoded format:
    # @data_keys = ["A", "B", "C" ]
    # @data_values = [8, 2.3, 7]

    @data_keys = []
    @plucked_data_keys = Entry.pluck(:date)
    # need to convert items in this array to string/integer?

    # @plucked_data_keys.map { |item| item.to_s}
    @plucked_data_keys.each do |date|
      date.to_s
      print "---DATE---"
      print date
      @data_keys.push(date.to_s)
    end


    @data_values = Entry.pluck(:datapoint)

    # @mood = Entry.group_by_day(:created_at).count
    # @data_keys = @mood.keys

    # for i in @data_keys
    #   i.to_s
    #   # puts i
    # end

    print "---DATA KEYS---"
    print @data_keys
    print "---DATA VALUES---"
    print @data_values

    # Tweak this to change which datapoints are shown
    # @entries = Entry.where("datapoint > ?", 2)
    # @entries = Entry.all
    # How to avoid hardcoding this?


    # @data = Entry.where("datapoint")
    # @date = Entry.where("date")
    # print "----- DATA -----"
    # puts @data.first
    # print "----- DATE -----"
    # puts @date.first


    # @data_keys = Entry.all.select('date')


    # print "------ DATA VALUES HERE ------"
    # print @data_values


    # @data_values = Entry.all.select('datapoint')
    # puts "------HARD DATA VALUES------"
    # puts @data_values



        # @moods = Entry.all

    # print "-----MOOD-----"
    # print @moods


    # print "------DATA KEYS:------"
    # print @data_keys

    # @data_values = @mood.values
    # print "-----DATA VALUES:-----"
    # print @data_values


    # iterate over this to put into array?


    # @data = Entry.all
    # @datapoints = []
    # @datapoints.each do |datapoint|
    # puts 'Here are the datapoints'
    # puts @datapoints
    # end

  end




  def search
    @entries = Entry.search_by_text(params[:query])
  end

  def show
  end

  def new
    # Only create empty instance (Everything will be nil)
    @entry = Entry.new
  end

  def create
    @entry = Entry.new(entry_params)
    @entry.save
    # Redirect to specific page
    redirect_to entry_path(@entry)
  end

  def edit
  end

  def update
    @entry.update(entry_params)
    # Redirects to entry that was updated
    redirect_to entry_path(@entry)
  end

  def destroy
    @entry = Entry.find(params[:id])
    @entry.destroy
    # Redirects to entries page
    redirect_to entries_path
  end


  private

  # This method called above in create method
  def entry_params
    # Takes only the :entry key in params, disregards others
    params.require(:entry).permit(:date, :body, :datapoint)
  end

  # Made this method to avoid repeating code (see before_action)
  def find_entry
    # Use @entry so that we can display it in our view
    @entry = Entry.find(params[:id])
  end

end
