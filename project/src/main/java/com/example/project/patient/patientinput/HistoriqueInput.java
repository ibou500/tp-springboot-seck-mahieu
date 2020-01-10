package com.example.project.patient.patientinput;

import java.util.Date;

public class HistoriqueInput {
    int id;
    private Date jour;
    private String description;

    public HistoriqueInput() {
    }

    public int getId() {
        return id;
    }

    public void setId(int id) {
        this.id = id;
    }

    public Date getJour() {
        return jour;
    }

    public void setJour(Date jour) {
        this.jour = jour;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
