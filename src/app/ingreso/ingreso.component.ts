import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { Error } from '../error';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { TipoVehiculo } from '../tipo-vehiculo';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css']
})

export class IngresoComponent implements OnInit {

  showFormIngreso = false;
  tipoVehicle = false;

  vehiculoIngreso: Vehiculo = {
    id: null,
    placa: null,
    cilindraje: null,
    fechaIngreso: null,
    fechaSalida: null,
    tipoVehiculo: {
      id: 1,
      descripcion: ' '
    }
  };

  vehiculos: Vehiculo[] = [
    {
      id: null,
      placa: ' ',
      cilindraje: null,
      fechaIngreso: "2018-08-08T12:00:00.511+0000",
      fechaSalida: null,
      tipoVehiculo: {
        id: 1,
        descripcion: "No hay vehiculos en el parqueadero"
      }
    }
  ];

  tipoVehiculo: TipoVehiculo = {
    id: null,
    descripcion: null
  }

  error: Error = {
    descripcion: null
  }

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  parquearVehiculo() {
    this.showFormIngreso = true;
    this.vehiculoIngreso.fechaIngreso = null;
    this.error.descripcion = null;
  }

  cancelarParqueo() {
    this.showFormIngreso = false;
    this.vehiculoIngreso.fechaIngreso = null;
  }
  
  ingresarParquear() {
    this.error.descripcion = null;
    this.vehiculoIngreso.tipoVehiculo = this.tipoVehiculo;
    this.vehiculoIngreso.cilindraje = this.tipoVehicle ? this.vehiculoIngreso.cilindraje : null;
    this.http.post('http://localhost:443/vehiculo/registrarParqueo', this.vehiculoIngreso)
      .subscribe(vehiculoIngreso => this.vehiculoIngreso = vehiculoIngreso, error => this.error.descripcion = error.error.message);
    if (this.error.descripcion == null) {
      this.error.descripcion = "El registro fue exitoso por favor refresque la pantalla";
    }
  }
}
