package com.example.project.secretaire;

import org.springframework.beans.factory.annotation.Autowired;

import javax.ws.rs.Path;

@Path("secretaires")

public class SecretaireResource {
    @Autowired
    private SecretaireRepository cr;
}
