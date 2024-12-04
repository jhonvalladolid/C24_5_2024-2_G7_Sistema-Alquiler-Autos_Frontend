import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VehiculoService } from 'src/app/services/vehiculo/vehiculo.service';
import { SolicitudService } from 'src/app/services/solicitud/solicitud.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-rent-vehicle',
  templateUrl: './rent-vehicle.component.html',
  styleUrls: ['./rent-vehicle.component.css'],
})
export class RentVehicleComponent implements OnInit {
  vehiculo: any;
  solicitud = {
    licencia_pdf: null,
    dias_alquiler: 1,
    pasajeros: 1,
    comentario: '',
    vehiculo_id: 1,
    estado_id: 1, // Estado inicial (pendiente, por ejemplo)
    usuario_id: 1, // ID del usuario autenticado
  };
  listaVehiculos = [
    { id: 1, modelo: 'Toyota Corolla' },
    { id: 2, modelo: 'Honda Civic' },
    { id: 3, modelo: 'Mazda 3' },
  ];
  listaEstados = [
    { id: 1, nombre: 'Pendiente' },
    { id: 2, nombre: 'Aprobado' },
    { id: 3, nombre: 'Rechazado' },
  ];
  listaUsuarios = [
    { id: 1, nombre: 'Juan Pérez' },
    { id: 2, nombre: 'María López' },
    { id: 3, nombre: 'Carlos García' },
  ];
  errorMessage: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private vehiculoService: VehiculoService,
    private solicitudService: SolicitudService,
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    const vehiculoId = this.route.snapshot.paramMap.get('id');
    if (vehiculoId) {
      this.cargarVehiculo(+vehiculoId);
    }
  }

  cargarVehiculo(id: number): void {
    this.vehiculoService.obtenerVehiculoPorId(id).subscribe({
      next: (data) => {
        this.vehiculo = data;
        this.solicitud.vehiculo_id = data.id;
      },
      error: (error) => {
        console.error('Error al cargar el vehículo:', error);
        this.errorMessage = 'Error al cargar los detalles del vehículo.';
      },
    });
  }

  registrarRenta(): void {
    const formData = new FormData();
    formData.append('licencia_pdf', this.solicitud.licencia_pdf as any);
    formData.append('dias_alquiler', this.solicitud.dias_alquiler.toString());
    formData.append('pasajeros', this.solicitud.pasajeros.toString());
    formData.append('comentario', this.solicitud.comentario);
    formData.append('vehiculo_id', this.solicitud.vehiculo_id.toString());
    formData.append('estado_id', this.solicitud.estado_id.toString());
    formData.append('usuario_id', this.solicitud.usuario_id.toString());

    this.solicitudService.crearSolicitud(formData).subscribe({
      next: (response) => {
        alert('Renta registrada exitosamente.');
        this.router.navigate(['/']);
      },
      error: (error) => {
        console.error('Error al registrar la renta:', error);
        this.errorMessage = 'Error al registrar la renta. Intenta nuevamente.';
      },
    });
  }

  manejarArchivo(event: any): void {
    const archivo = event.target.files[0];
    if (archivo) {
      this.solicitud.licencia_pdf = archivo;
    }
  }
}
