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

  # After creating the routes (check rails routes), let's code the controller.
  def index
    # @entries = Entry.all
    if params[:query].present?
      @entries = Entry.search_by_text(params[:query])
    else
      @entries = Entry.all
    end
  end

  def data
    @entries = Entry.all
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
