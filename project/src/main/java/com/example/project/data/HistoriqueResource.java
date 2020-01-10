package com.example.project.data;

import com.example.project.patient.Patient;
import com.example.project.patient.PatientRepository;
import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Optional;

@Path("historiques")
public class HistoriqueResource {
    @Autowired
    private HistoriqueRepository hr;

    @Autowired
    private PatientRepository pr;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Historique> hello(){
        return (List<Historique>) hr.findAll();
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response hello(@PathParam("id") int id){
        Optional<Patient> optional=pr.findById(id);
        if(optional.isPresent()){
            return Response.ok(optional.get().getHistoriques()).build();
        }
        else
            return (Response.status(Response.Status.NOT_FOUND).build());
    }

}
