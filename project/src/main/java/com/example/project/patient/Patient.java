package com.example.project.patient;

import com.example.project.data.Historique;
import com.example.project.medecin.Medecin;
import com.example.project.personne.Customer;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
public class Patient {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    public int id_patient;
    public String nom;
    public String prenom;
    private int  jour;
    private int  mois;
    private int  annee;
    private int nss;
    private int tel;
    private String mail;
    private String adresse;
    @OneToMany( fetch =FetchType.EAGER, cascade = CascadeType.ALL)
    private List<Historique> historiques=new ArrayList<Historique>();

    @ManyToOne (fetch = FetchType.EAGER, cascade = CascadeType.ALL)
    Medecin medecin;


    public Patient() {
    }

    public Patient(String nom, String prenom, int jour, int mois, int annee, int nss) {
        this.nom = nom;
        this.prenom = prenom;
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
        this.nss = nss;
    }

    public Patient(String nom, String prenom, int jour, int mois, int annee) {
        this.nom = nom;
        this.prenom = prenom;
        this.jour = jour;
        this.mois = mois;
        this.annee = annee;
    }

    public int getId() {
        return id_patient;
    }

    public void setId(int id) {
        this.id_patient = id;
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

    public int getNss() {
        return nss;
    }

    public void setNss(int nss) {
        this.nss = nss;
    }

    public int getId_patient() {
        return id_patient;
    }

    public void setId_patient(int id_patient) {
        this.id_patient = id_patient;
    }

    public int getTel() {
        return tel;
    }

    public void setTel(int tel) {
        this.tel = tel;
    }

    public String getMail() {
        return mail;
    }

    public void setMail(String mail) {
        this.mail = mail;
    }

    public String getAdresse() {
        return adresse;
    }

    public void setAdresse(String adresse) {
        this.adresse = adresse;
    }

    public List<Historique> getHistoriques() {
        return historiques;
    }

    public void setHistoriques(List<Historique> historiques) {
        this.historiques = historiques;
    }
}
