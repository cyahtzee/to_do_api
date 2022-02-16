class Api::V1::TasksController < ApplicationController
  def index
    @tasks = "Hi, I'm a task"
    render json: @tasks
  end

  def new
    @task = Task.new
  end
end
