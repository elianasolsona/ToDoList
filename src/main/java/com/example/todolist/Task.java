package com.example.todolist;

public class Task {

    private final String description; //la variable es description
    private boolean taskDone;

    public Task(String description){
        this.description = description;
        this.taskDone = false;
    }

    public void setTaskDone(boolean value) {this.taskDone = value; }

    public String getDescription() { // se requiere para que funcione... es el metodo getter
        return description;
    }

    public boolean isTaskDone() { return taskDone; }

}
