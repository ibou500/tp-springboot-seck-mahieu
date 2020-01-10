package com.example.project.medecin;

import com.example.project.patient.Patient;
import com.fasterxml.jackson.annotation.JsonIgnore;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Entity
public class Medecin {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id_medecin;
    public String nom;
    public String prenom;
    public String specialite;
    private Date date;
    @OneToMany(cascade = CascadeType.ALL)
    @JsonIgnore
    private List<Patient> listePatient=new ArrayList<Patient>();

    public Medecin() {
    }

    public Medecin(String nom, String prenom, String specialite, Date date) {
        this.nom = nom;
        this.prenom = prenom;
        this.specialite = specialite;
        this.date = date;
    }

    public int getId_medecin() {
        return id_medecin;
    }

    public void setId_medecin(int id_medecin) {
        this.id_medecin = id_medecin;
    }

    public String getNom() {
        return nom;
    }

    public void setNom(String nom) {
        this.nom = nom;
    }

    public String getPrenom() {
        return prenom;
    }

    public void setPrenom(String prenom) {
        this.prenom = prenom;
    }

    public Date getDate() {
        return date;
    }

    public void setDate(Date date) {
        this.date = date;
    }

    public List<Patient> getListePatient() {
        return listePatient;
    }

    public void setListePatient(List<Patient> listePatient) {
        this.listePatient = listePatient;
    }
}
