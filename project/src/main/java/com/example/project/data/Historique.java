package com.example.project.data;

import com.example.project.patient.Patient;

import javax.persistence.*;
import java.util.Date;

@Entity
public class Historique {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
  private int id_soin;
  private Date jour;
  private String description;
  @ManyToOne (fetch = FetchType.EAGER, cascade = CascadeType.ALL)
  Patient patient;

    public Historique() {
    }

    public Historique(Date jour, String description) {
        this.jour = jour;
        this.description = description;
    }

    public int getId_soin() {
        return id_soin;
    }

    public void setId_soin(int id_soin) {
        this.id_soin = id_soin;
    }


    public Date getJour() {
        return jour;
    }

    public void setJour(Date jour) {
        this.jour = jour;
    }

    public Patient getPatient() {
        return patient;
    }

    public void setPatient(Patient patient) {
        this.patient = patient;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
