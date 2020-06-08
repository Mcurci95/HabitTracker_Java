package com.habit_tracker.habit_tracker.models;

import lombok.NonNull;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.ListIterator;

public class HabitData {

    // In memory data for testing

    private static int idValue = 0;

    private final List<Habit> habits = new ArrayList<>();

    public HabitData() {
        addHabit(new Habit("Reading", "Reading a book", 20, "home"));
        addHabit(new Habit("Meditating", "Breathing exercises", 20, "home"));
        addHabit(new Habit("Jogging", "jogging 1 mile per day", 15, "park"));
        addHabit(new Habit("Coding", "Learning new languages", 60, "Laptop"));
        addHabit(new Habit("Training for Spring cert!", "Reading book on Spring Certification", 60, "home"));
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

    public void removeHabit(int id) {
        ListIterator<Habit> listIterator = habits.listIterator();
        while (listIterator.hasNext()) {
            Habit habit = listIterator.next();
            if (habit.getId() == id) {
                listIterator.remove();
                break;
            }
        }
    }

    public void updateHabit(Habit habitToUpdate) {
        ListIterator<Habit> habitListIterator = habits.listIterator();
        while (habitListIterator.hasNext()) {
            Habit habit = habitListIterator.next();
            if (habit.equals(habitToUpdate)) {
                habitListIterator.set(habitToUpdate);
                break;
            }
        }
    }
}
