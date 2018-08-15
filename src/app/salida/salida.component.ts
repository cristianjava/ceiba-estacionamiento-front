import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { Error } from '../error';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Tiquete } from '../tiquete';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  showFormSalida = false;
  controlSalida = false;

  vehiculoSalida: Vehiculo = {
    id: null,
    placa: null,
    cilindraje: null,
    fechaIngreso: null,
    fechaSalida: null,
    tipoVehiculo: {
      id: null,
      descripcion: null
    }
  };

  vehiculos: Vehiculo[] = [
    {
      id: 1,
      placa: '',
      cilindraje: null,
      fechaIngreso: "2018-08-08T12:00:00.511+0000",
      fechaSalida: null,
      tipoVehiculo: {
        id: 1,
        descripcion: "No hay vehiculos en el parqueadero"
      }
    }
  ];

  tiquete: Tiquete = {
    idTiquete: null,
    placa: '',
    fechaIngreso: null,
    fechaSalida: null,
    valorPago: null,
    diasParqueo: null,
    horasParqueo: null
  };

  error: Error = {
    descripcion: ''
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  desparquearVehiculo() {
    this.showFormSalida = true;
  }

  cancelarDesparqueo() {
    this.showFormSalida = false;
  }
  
  buscarVehiculoParqueadero() {
    this.error.descripcion = null;
    this.tiquete.fechaSalida = null;
    this.vehiculoSalida.fechaIngreso = null;
    this.tiquete.valorPago = null;
    this.vehiculoSalida.tipoVehiculo.descripcion = null;
    this.http.get<Vehiculo[]>('http://localhost:443/vehiculo/buscarVehiculos').subscribe(vehiculos => this.vehiculos = vehiculos);
    
    this.http.post('http://localhost:443/vehiculo/buscarVehiculoPlaca', this.vehiculoSalida)
      .subscribe(vehiculoSalida => this.vehiculoSalida = vehiculoSalida, error => this.error.descripcion = error.error.message);
    this.controlSalida = false;
  }
  
  salidaParqueadero() {
    this.error.descripcion = null;
    this.http.post('http://localhost:443/vehiculo/salidaParqueadero', this.vehiculoSalida)
      .subscribe(tiquete => this.tiquete = tiquete, error => this.error.descripcion = error.error.message);
  }
}
