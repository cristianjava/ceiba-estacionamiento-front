import { Component, OnInit } from '@angular/core';
import { Vehiculo } from '../vehiculo';
import { Error } from '../error';
import { Tiquete } from '../tiquete';
import { PostVehiculoService } from '../post-vehiculo.service';
import { ConsultaVehiculoService } from '../consulta-vehiculo.service';

@Component({
  selector: 'app-salida',
  templateUrl: './salida.component.html',
  styleUrls: ['./salida.component.css']
})
export class SalidaComponent implements OnInit {

  showFormSalida = false;

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
    descripcion: '',
    exito: null
  }

  constructor(private postVehiculoService: PostVehiculoService, private consultaVehiculoService: ConsultaVehiculoService) { }

  ngOnInit() { }

  buscarVehiculoParqueadero() {
    this.error.descripcion = null;
    this.tiquete.fechaSalida = null;
    this.vehiculoSalida.fechaIngreso = null;
    this.tiquete.valorPago = null;
    this.vehiculoSalida.tipoVehiculo.descripcion = null;
    this.consultaVehiculoService.getAllVehiculos().subscribe(vehiculos => this.vehiculos = vehiculos);
    this.consultaVehiculoService.getByPlaca(this.vehiculoSalida).subscribe(vehiculoSalida => this.vehiculoSalida = vehiculoSalida, error => this.error.descripcion = error.error.message);
  }
  
  salidaParqueadero() {
    this.error.descripcion = null;
    this.postVehiculoService.salidaVehiculo(this.vehiculoSalida).subscribe(tiquete => this.tiquete = tiquete, error => this.error.descripcion = error.error.message);
  }
  
  desparquearVehiculo() {
    this.showFormSalida = true;
  }

  cancelarDesparqueo() {
    this.error.descripcion = null;
    this.showFormSalida = false;
  }
  
}
