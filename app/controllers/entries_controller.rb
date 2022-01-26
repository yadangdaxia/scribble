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
  end

  def new
    # entry = params[:?]
  end

  def create
  end

  def edit
  end

  def update
  end

  def destroy
  end

  private

end
