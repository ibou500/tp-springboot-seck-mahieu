package com.example.project.patient;

import com.example.project.data.Historique;
import com.example.project.patient.patientinput.Connexion;
import com.example.project.patient.patientinput.HistoriqueInput;
import com.example.project.patient.patientinput.PatientInputH;
import org.springframework.beans.factory.annotation.Autowired;


import javax.ws.rs.GET;
import javax.ws.rs.Path;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("patients")

public class PatientResource {
    @Autowired
    private PatientRepository pr;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Patient> hello(){
        return (List<Patient>) pr.findAll();
    }

    @GET
    @Path("h/{nom}")
    @Produces(MediaType.APPLICATION_JSON)
    public Patient helloo(@PathParam("nom") String nom){
        return (pr.findByNom(nom));
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Patient save(Patient p){
        ArrayList<Historique> tmp = new ArrayList<>();
        tmp.add(new Historique(new Date(),"création du compte"));
        p.setHistoriques(tmp);
        return pr.save(p);
    }

    @POST
    @Path("/historique")
    @Produces(MediaType.APPLICATION_JSON)
    public Response sahve(PatientInputH p){
        Optional<Patient> optional=pr.findById(p.getId());
        if(optional.isPresent()){
            optional.get().getHistoriques().add(new Historique());
            pr.save(optional.get());
            return Response.ok().build();
        }
        else
            return (Response.status(Response.Status.NOT_FOUND).build());
    }

    @POST
    @Path("/add")
    @Produces(MediaType.APPLICATION_JSON)
    public Response save(HistoriqueInput p){
        Optional<Patient> optional=pr.findById(p.getId());
        if(optional.isPresent()){
            Historique h=new Historique(new Date(),p.getDescription());
            optional.get().getHistoriques().add(h);
            pr.save(optional.get());
            return Response.ok().build();
        }
        else
            return (Response.status(Response.Status.NOT_FOUND).build());
    }

    @GET
    @Path("f")
    @Produces(MediaType.APPLICATION_JSON)
    public Response connexion(Connexion p){
        Optional<Patient> optional= Optional.ofNullable(pr.findByNom(p.getNom()));
        if(optional.isPresent()){
            return Response.ok(optional.get()).build();
        }
        else
            return (Response.status(Response.Status.NOT_FOUND).build());
    }


    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Patient up(Patient p,@PathParam("id") int id){
        Patient pm=new Patient();
       if(pr.findById(id)!=null) {
           pm= p;
       }
       return  pr.save(pm);
    }



    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") int id) {
        return Response.ok().entity(pr.findById(id)).build();
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void de(@PathParam("id") int id) {
        pr.deleteById(id);
    }

}

