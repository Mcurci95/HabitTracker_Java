package com.habit_tracker.habit_tracker.models;

import lombok.AllArgsConstructor;
import lombok.Data;

import java.time.Instant;

@Data
@AllArgsConstructor
public class HabitCompleted {

    private Habit habit;
    private Instant completionTime;
}
