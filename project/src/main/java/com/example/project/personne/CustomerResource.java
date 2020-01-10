package com.example.project.personne;

import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.List;
import java.util.Optional;

/*@Path("personnes")
public class CustomerResource {
    @Autowired
    private CustomerRepository cr;

    @GET
    @Produces(MediaType.APPLICATION_JSON)
    public List<Customer> hello(){
            return (List<Customer>) cr.findAll();
    }

    @POST
    @Produces(MediaType.APPLICATION_JSON)
    public Customer save(Customer p){
        return cr.save(p);
    }

    @PUT
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Customer up(Customer p){
        return cr.save(p);
    }

    @GET
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response get(@PathParam("id") int id) {
        return Response.ok().entity(cr.findById(id)).build();
    }

    @DELETE
    @Path("/{id}")
    @Produces(MediaType.APPLICATION_JSON)
    public void de(@PathParam("id") int id) {
         cr.deleteById(id);
    }


}*/
