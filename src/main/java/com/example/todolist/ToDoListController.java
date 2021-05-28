package com.example.todolist;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.view.RedirectView;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
public class ToDoListController {

    private Map<Integer,Task> tasks;

    private Integer counter = 0;

    public ToDoListController(){
        tasks= new HashMap<>();
    }

    @GetMapping("/tasks")
    public Map<Integer,Task> allTasks(){ return tasks;}

    @PostMapping("/tasks")
    public RedirectView addNewTask(Task task) {
        tasks.put(counter++,task);
        return new RedirectView("/");
      }
  @DeleteMapping("/tasks/{index}")
  void deleteTask(@PathVariable int index) {tasks.remove(index);}

  @PutMapping("/tasks/{id}/taskDone/{markAsTaskDone}")
  @ResponseStatus(HttpStatus.NO_CONTENT)
}
