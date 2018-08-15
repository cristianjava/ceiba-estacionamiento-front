import { Component, OnInit } from '@angular/core';
import { Vehiculo} from '../vehiculo';
import { ConsultaVehiculoService } from '../consulta-vehiculo.service';

import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html',
  styleUrls: ['./consulta.component.css']
})
export class ConsultaComponent implements OnInit {

  mostrarCompEmpty = false;

  vehiculos: Vehiculo[] = [
    {
      id: 1,
      placa: ' ',
      cilindraje: null,
      fechaIngreso: null,
      fechaSalida: null,
      tipoVehiculo: {
        id: 1,
        descripcion: "No hay vehiculos en el parqueadero"
      }
    }
  ];

  constructor(private consultaVehiculoService: ConsultaVehiculoService) { }

  ngOnInit() {
    this.consultaVehiculoService.getAllVehiculos().subscribe(vehiculos => this.vehiculos = vehiculos);
    if (this.vehiculos != null) {
      this.mostrarCompEmpty = true;
    }
  }

  refres() {
    this.consultaVehiculoService.getAllVehiculos().subscribe(vehiculos => this.vehiculos = vehiculos);
  }
}
