import { Component, OnInit } from '@angular/core';
import { VehiculoService } from 'src/app/services/vehiculo/vehiculo.service';

@Component({
  selector: 'app-car-listings',
  templateUrl: './car-listings.component.html',
  styleUrls: ['./car-listings.component.css']
})
export class CarListingsComponent implements OnInit {
  vehiculos: any[] = [];
  vehiculosPaginados: any[] = [];
  errorMessage: string | null = null;

  // Variables para paginación
  paginaActual: number = 1;
  vehiculosPorPagina: number = 6; // Número de vehículos por página
  paginas: number[] = [];

  constructor(private vehiculoService: VehiculoService) {}

  ngOnInit(): void {
    this.cargarVehiculos();
  }

  cargarVehiculos(): void {
    this.vehiculoService.obtenerVehiculos().subscribe({
      next: (data) => {
        this.vehiculos = data; // Todos los vehículos
        this.errorMessage = null;

        // Inicializar la paginación
        this.inicializarPaginacion();
      },
      error: (error) => {
        console.error('Error al cargar los vehículos:', error);
        this.errorMessage =
          'Ocurrió un error al cargar los vehículos. Intenta nuevamente más tarde.';
      }
    });
  }

  inicializarPaginacion(): void {
    const totalPaginas = Math.ceil(this.vehiculos.length / this.vehiculosPorPagina);
    this.paginas = Array.from({ length: totalPaginas }, (_, i) => i + 1);
    this.cambiarPagina(1); // Comienza en la página 1
  }

  cambiarPagina(pagina: number): void {
    if (pagina < 1 || pagina > this.paginas.length) {
      return; // Evita páginas fuera de rango
    }

    this.paginaActual = pagina;
    const inicio = (pagina - 1) * this.vehiculosPorPagina;
    const fin = inicio + this.vehiculosPorPagina;

    this.vehiculosPaginados = this.vehiculos.slice(inicio, fin);
  }
}
