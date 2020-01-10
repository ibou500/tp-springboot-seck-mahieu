package com.example.project;

import com.example.project.data.HistoriqueResource;
import com.example.project.medecin.MedecinResource;
import com.example.project.patient.PatientResource;
import com.example.project.secretaire.SecretaireResource;
import org.glassfish.jersey.server.ResourceConfig;
import org.springframework.context.annotation.Configuration;
import org.springframework.stereotype.Component;

import javax.ws.rs.ApplicationPath;

@Component
@ApplicationPath("api")
@Configuration
public class JerseyConfiguration extends ResourceConfig {
    public JerseyConfiguration(){
        register(PatientResource.class);
        register(MedecinResource.class);
        register(SecretaireResource.class);
        register(HistoriqueResource.class);
        register(CORSReponseFilter.class);
    }

}