package com.habit_tracker.habit_tracker.models;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(of = "id")
public class HabitOld {

    private int id;
    private String title;
    private String details;
    private int minutes;
    private String location;

    // day of the week?

    public HabitOld(String title, String details,  int minutes, String location) {
        this.title = title;
        this.details = details;
        this.minutes = minutes;
        this.location = location;
    }
}
