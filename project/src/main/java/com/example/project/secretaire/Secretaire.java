package com.example.project.secretaire;

import com.example.project.personne.Customer;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity
public class Secretaire  {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id_secretaire;
    public String nom;
    public String prenom;
    private int  jour;
    private int  mois;
    private int  annee;

    public Secretaire() {
    }

    public Secretaire(String nom, String prenom, int jour, int mois, int annee) {
        this.nom = nom;
        this.prenom = prenom;
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
    }

    public int getId_secretaire() {
        return id_secretaire;
    }

    public void setId_secretaire(int id_secretaire) {
        this.id_secretaire = id_secretaire;
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

    public int getJour() {
        return jour;
    }

    public void setJour(int jour) {
        this.jour = jour;
    }

    public int getMois() {
        return mois;
    }

    public void setMois(int mois) {
        this.mois = mois;
    }

    public int getAnnee() {
        return annee;
    }

    public void setAnnee(int annee) {
        this.annee = annee;
    }
}
