import { Component, OnInit } from '@angular/core';
import { Vehiculo} from '../vehiculo';

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
      fechaIngreso: "2018-08-08T12:00:00.511+0000",
      fechaSalida: null,
      tipoVehiculo: {
        id: 1,
        descripcion: "No hay vehiculos en el parqueadero"
      }
    }
  ];

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.http.get<Vehiculo[]>('http://localhost:443/vehiculo/buscarVehiculos').subscribe(vehiculos => this.vehiculos = vehiculos);
    if (this.vehiculos != null) {
      this.mostrarCompEmpty = true;
    }
  }

  refres() {
    this.http.get<Vehiculo[]>('http://localhost:443/vehiculo/buscarVehiculos').subscribe(vehiculos => this.vehiculos = vehiculos);
  }
}
