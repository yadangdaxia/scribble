class EntriesController < ApplicationController
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
  # After creating the routes (check rails routes), let's code the controller.
  def index
    @entries = Entry.all
  end

  def show
    # Use @entry so that we can display it in our view
    @entry = Entry.find(params[:id])
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
    @entry = Entry.find(params[:id])
  end

  def update
  end

  def destroy
  end

  private

  # This method called above in create method
  def entry_params
    # takes only the :entry key in params, disregards others
    params.require(:entry).permit(:date, :body, :datapoint)
  end

end
