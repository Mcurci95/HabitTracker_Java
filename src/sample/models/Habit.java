package sample.models;

import java.time.DayOfWeek;

public class Habit {

    private int id;
    private String title;
    private String details;
    private DayOfWeek[] days; // What days do you want to do this habbit?
    private int minutes;
    private String location;

    public Habit(String title, String details, DayOfWeek[] days, int minutes, String location) {
        this.title = title;
        this.details = details;
        this.days = days;
        this.minutes = minutes;
        this.location = location;
    }
}
