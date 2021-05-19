package com.example.todolist;

import org.springframework.scheduling.config.Task;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.ArrayList;
import java.util.List;

@RestController
public class toDoListController {

    private List<toDoList> tasks;

    public toDoListController(){
        tasks= new ArrayList<>();
    }

    @GetMapping("/tasks")
    public List<toDoList> allTasks(){
        return tasks;
    }

    @PostMapping("/tasks")
    public void addTasks(toDoList task){
        tasks.add(task);
      }

}
