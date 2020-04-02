package com.habit_tracker.habit_tracker.models;

import lombok.NonNull;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

public class HabitData {

    // In memory data for testing

    public static int idValue;

    public final List<Habit> habits = new ArrayList<>();

    public HabitData() {
        habits.add(new Habit("Reading", "Reading a book", 20, "home"));
        habits.add(new Habit("Meditating", "Breathing exercises", 20, "home"));
    }

    public List<Habit> getHabits() {
        return Collections.unmodifiableList(habits);
    }

    public void addHabit(@NonNull Habit habit) {
        habit.setId(idValue);
        habits.add(habit);
        idValue++;
    }

    public Habit getHabit(int id) {
        for (Habit habit : habits) {
            if (habit.getId() == id) {
                return habit;
            }
        }
        return null;
    }
}
