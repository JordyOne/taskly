class TasksController < ApplicationController
  def index
    @tasks = Task.all
  end


  def new
    @task = Task.new
    @task_list_id = params[:task_list_id]
    render "tasks/create"
  end

  def create
    @task = Task.create(name: params[:task][:name], task_list_id: params[:task_list_id], date_created: (params[:task][:date_created]))
    if @task.save
      redirect_to "/"
    else
      flash[:notice] = params
    end
  end

  def edit
    @task = Task.find(params[:id])
  end

  def update
    @task = Task.find(params[:id]).update(:name => params[:task][:name])
    flash[:notice] = "Task List was updated successfully!"
    redirect_to "/"
  end

  def show
    @tasks = Task.new
    render "tasks/create"
  end
end