package com.example.todolist;

public class Task {

    private final String description; //la variable es description

    public Task(String description){

        this.description = description;
    }

    public String getDescription() { // se requiere para que funcione... es el metodo getter
        return description;
    }
}
