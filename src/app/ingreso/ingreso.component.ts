import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { Error } from '../error';
import { PostVehiculoService } from '../post-vehiculo.service';

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

  tipoVehiculo: TipoVehiculo = {
    id: null,
    descripcion: null
  }

  error: Error = {
    descripcion: null
  }

  constructor(private postVehiculoService: PostVehiculoService) { }

  ngOnInit() {
  }

  ingresarParquear() {
    this.error.descripcion = null;
    this.vehiculoIngreso.tipoVehiculo = this.tipoVehiculo;
    this.vehiculoIngreso.cilindraje = this.tipoVehicle ? this.vehiculoIngreso.cilindraje : null;
    this.postVehiculoService.ingresarVehiculo(this.vehiculoIngreso).subscribe(vehiculoIngreso => this.vehiculoIngreso = vehiculoIngreso, error => this.error.descripcion = error.error.message);
    if (this.error.descripcion == null) {
      this.error.descripcion = "El registro fue exitoso por favor refresque la pantalla";
    }
  }
  
  parquearVehiculo() {
    this.showFormIngreso = true;
    this.vehiculoIngreso.fechaIngreso = null;
    this.error.descripcion = null;
  }

  cancelarParqueo() {
    this.error.descripcion = null;
    this.showFormIngreso = false;
    this.vehiculoIngreso.fechaIngreso = null;
  }
  
}
