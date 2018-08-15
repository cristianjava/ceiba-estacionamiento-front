import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class PostVehiculoService {
  
  urlregistrarParqueo = "http://localhost:443/vehiculo/registrarParqueo";
  urlsalidaParqueadero = "http://localhost:443/vehiculo/salidaParqueadero";

  constructor(private http: HttpClient) { }

  ingresarVehiculo(vehiculo: Vehiculo) {
    return this.http.post(this.urlregistrarParqueo, vehiculo);
  }

  salidaVehiculo(vehiculo: Vehiculo) {
    return this.http.post(this.urlsalidaParqueadero, vehiculo);
  }

}
