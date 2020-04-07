package com.habit_tracker.habit_tracker.controller;

import com.habit_tracker.habit_tracker.models.Habit;
import com.habit_tracker.habit_tracker.models.HabitData;
import com.habit_tracker.habit_tracker.service.HabitService;
import com.habit_tracker.habit_tracker.service.HabitServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;


@Slf4j
@RestController
@CrossOrigin(origins = "http://localhost:3000")
public class HabitController {

    // TODO change to Response Entities?


    @Autowired
    private static final HabitService service = new HabitServiceImpl();

    @GetMapping("/")
    public HabitData getAll() {
        log.info("calling get mapping");
        System.out.println(service.getData().toString());
        return service.getData();
    }

    @PostMapping("/add")
    public String addHabit(Habit habit) {
        log.info("Adding habit");
        service.addHabit(habit);
        return "Habit added";
    }

    @GetMapping("/remove")
    @ResponseBody
    public String removeHabit(@RequestParam int id) {
        log.info("Calling: removeHabit on id: {}", id);
        service.removeHabit(id);
        return "Removed habit with ID: " + id;
    }

    @GetMapping("/get")
    @ResponseBody
    public Habit getHabit(@RequestParam  int id) {
        log.info("Calling: getHabit on id: {}", id);
        Habit habit = service.getHabit(id);
        return habit;
    }

    public String editHabit(Habit habit) {
        log.info("Habit to edit => {}", habit.getId());
        service.updateHabit(habit);
        return "Updated habit with id: {}" + habit.getId();
    }


}
