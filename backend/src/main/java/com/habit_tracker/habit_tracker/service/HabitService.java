package com.habit_tracker.habit_tracker.service;


import com.habit_tracker.habit_tracker.models.Habit;
import com.habit_tracker.habit_tracker.models.HabitData;

public interface HabitService {

    void addHabit(Habit habit);
    void removeHabit(int id);
    Habit getHabit(int id);
    void updateHabit(Habit habit);
    HabitData getData();
}
