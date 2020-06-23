package com.habit_tracker.habit_tracker.models;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;

import java.time.Instant;

@Data
@EqualsAndHashCode(of = "id")
@AllArgsConstructor
public class Habit {

    private int id;
    private String title;
    private String details;
    private Instant creationDate;
    private int habitListId;
    private int frequencyId;
    private int dayId;
    private String cue;

}
