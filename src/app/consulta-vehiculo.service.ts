import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Vehiculo } from './vehiculo';

@Injectable({
  providedIn: 'root'
})
export class ConsultaVehiculoService {

  urlbuscarVehiculos = "http://localhost:443/vehiculo/buscarVehiculos";
  urlbuscarVehiculoPlaca = "http://localhost:443/vehiculo/buscarVehiculoPlaca";

  constructor(private http: HttpClient) { }

  getAllVehiculos() {
    return this.http.get<Vehiculo[]>(this.urlbuscarVehiculos);
  }

  getByPlaca(vehiculo: Vehiculo) {
    return this.http.post(this.urlbuscarVehiculoPlaca, vehiculo);
  }
}
