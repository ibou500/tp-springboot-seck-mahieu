package com.example.project.medecin;

import com.example.project.medecin.medecinInput.PatientInput;
import com.example.project.patient.Patient;
import com.example.project.patient.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Path("medecins")
public class MedecinResource {
    @Autowired
    private MedecinRepository mr;

    @Autowired
    private PatientRepository pr;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Medecin> hello(){
        return (List<Medecin>) mr.findAll();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Medecin save(Medecin m){
        ArrayList<Patient> tmp = new ArrayList<>();
        m.setListePatient(tmp);
        return mr.save(m);
    }

    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    @Consumes(MediaType.APPLICATION_JSON)
    public Medecin up(Medecin p,@PathParam("id") int id){
        Medecin pm=new Medecin();
        if(mr.findById(id)!=null) {
            pm= p;
        }
        return  mr.save(pm);
    }

    @POST
    @Path("/add")
    @Produces(MediaType.APPLICATION_JSON)
    public Response save(PatientInput p){
        Optional<Medecin> optional=mr.findById(p.getId());
        if(optional.isPresent()){
            Patient h=new Patient(p.getNom(),p.getPrenom(),p.getJour()
            ,p.getMois(),p.getAnnee());
            optional.get().getListePatient().add(h);
            mr.save(optional.get());
            return Response.ok().build();
        }
        else
            return (Response.status(Response.Status.NOT_FOUND).build());
    }

    @GET
    @Path("h/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response helloo(@PathParam("id") int id){
        Optional<Medecin> optional=mr.findById(id);
        if(optional.isPresent()){
            return Response.ok(optional.get().getListePatient()).build();
        }
        else
            return (Response.status(Response.Status.NOT_FOUND).build());
    }



    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") int id) {
        return Response.ok().entity(mr.findById(id)).build();
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void de(@PathParam("id") int id) {
        mr.deleteById(id);
    }

}
