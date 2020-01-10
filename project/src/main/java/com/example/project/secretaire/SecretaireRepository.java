package com.example.project.secretaire;

import com.example.project.personne.Customer;
import org.springframework.data.repository.CrudRepository;

public interface SecretaireRepository  extends CrudRepository<Secretaire, Integer> {
}
