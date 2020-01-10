package com.example.project.patient;

import com.example.project.secretaire.Secretaire;
import org.springframework.data.repository.CrudRepository;

import java.util.Optional;

public interface PatientRepository extends CrudRepository<Patient, Integer> {
    @Override
    Optional<Patient> findById(Integer integer);
    Patient findByNom(String nom);
}
