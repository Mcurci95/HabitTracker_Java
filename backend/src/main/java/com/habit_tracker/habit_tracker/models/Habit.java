package com.habit_tracker.habit_tracker.models;

import lombok.Data;
import lombok.EqualsAndHashCode;

@Data
@EqualsAndHashCode(of = "id")
public class Habit {

    private int id;
    private String title;
    private String details;
    //    private DayOfWeek[] days; // What days do you want to do this habit?
    private int minutes;
    private String location;

    public Habit(String title, String details,  int minutes, String location) {
        this.title = title;
        this.details = details;
        this.minutes = minutes;
        this.location = location;
    }
}
