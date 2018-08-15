import { TipoVehiculo } from "./tipo-vehiculo";

export class Vehiculo {
    id?: number;
    placa?: string;
    cilindraje?: number;
    fechaIngreso?: string;
    fechaSalida?: string;
    tipoVehiculo?: TipoVehiculo;
}
