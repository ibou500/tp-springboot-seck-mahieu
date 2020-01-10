import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private baseUrl = 'http://localhost:8083/api/patients';
  private baseUrl1 = 'http://localhost:8083/api/historiques';
  private baseUrl2 = 'http://localhost:8083/api/medecins';

  constructor(private http: HttpClient) { }

  getCustomer(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl}/${id}`);
  }

  getMedecin(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/${id}`);
  }

  getConnexion(connexion: Object): Observable<any> {
    return this.http.get(`${this.baseUrl}/f`, connexion);
  }

  getHistorique(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl1}/${id}`);
  }

  getPatient(id: number): Observable<any> {
    return this.http.get(`${this.baseUrl2}/h/${id}`);
  }

  createCustomer(customer: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}`, customer);
  }

  createMedecin(medecin: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}`, medecin);
  }

  createHistoriqueInput(historiqueInput: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/add`, historiqueInput);
  }

  createPatientInput(patientInput: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl2}/add`, patientInput);
  }

  updateCustomer(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/${id}`, value);
  }

  updateMedecin(id: number, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl2}/${id}`, value);
  }

  deleteCustomer(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  }

  deleteMedecin(id: number): Observable<any> {
    return this.http.delete(`${this.baseUrl2}/${id}`, { responseType: 'text' });
  }

  getCustomersList(): Observable<any> {
    return this.http.get(`${this.baseUrl}`);
  }

  getMedecinsList(): Observable<any> {
    return this.http.get(`${this.baseUrl2}`);
  }

  getHistoriquesList(): Observable<any> {
    return this.http.get(`${this.baseUrl1}`);
  }

  getCustomerConnect(nom: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/h/${nom}`);
  }
}