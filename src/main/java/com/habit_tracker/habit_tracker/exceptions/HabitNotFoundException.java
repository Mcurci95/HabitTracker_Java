package com.habit_tracker.habit_tracker.exceptions;

public class HabitNotFoundException extends RuntimeException {

    HabitNotFoundException(int id) {
        super("Could not find Habit " + id);
    }
}
