package com.habit_tracker.habit_tracker.service;

import com.habit_tracker.habit_tracker.models.Habit;
import com.habit_tracker.habit_tracker.models.HabitData;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class HabitServiceImpl implements HabitService {

    
    public HabitData habitData = new HabitData();

    @Override
    public void addHabit(Habit habit) {
        habitData.addHabit(habit);
    }

    @Override
    public void removeHabit(int id) {

    }

    @Override
    public Habit getHabit(int id) {
        return habitData.getHabit(id);
    }

    @Override
    public void updateHabit(Habit habit) {

    }

    @Override
    public HabitData getData() {
        return this.habitData;
    }
}
