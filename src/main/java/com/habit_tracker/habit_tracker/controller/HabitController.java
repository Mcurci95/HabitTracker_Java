package com.habit_tracker.habit_tracker.controller;

import com.habit_tracker.habit_tracker.models.Habit;
import com.habit_tracker.habit_tracker.models.HabitData;
import com.habit_tracker.habit_tracker.service.HabitService;
import com.habit_tracker.habit_tracker.service.HabitServiceImpl;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@Slf4j
@RestController
public class HabitController {

    @Autowired
    private static final HabitService service = new HabitServiceImpl();

    @GetMapping("/")
    public HabitData getAll() {
        log.info("calling get mapping");
        System.out.println(service.getData().toString());
        return service.getData();
    }
}
