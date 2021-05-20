package com.example.todolist;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.List;

@RestController
public class ToDoListController {

    private List<Task> tasks;

    public ToDoListController(){
        tasks= new ArrayList<>();
    }

    @GetMapping("/tasks")
    public List<Task> allTasks(){
        return tasks;
    }

    @PostMapping("/tasks")
    public RedirectView addNewTask(Task task) {
        tasks.add(task);
        return new RedirectView("/");
      }
  @DeleteMapping("/tasks/{index}")
  void deleteTask(@PathVariable int index) {
    tasks.remove(index);
  }

}
