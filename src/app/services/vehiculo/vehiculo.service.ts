import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private baseUrl = 'http://localhost:3000/vehiculos'; // URL base del backend
  private imagePath = 'assets/images/'; // Ruta base para imágenes locales
  private availableImages = [
    'car_1.jpg',
    'car_2.jpg',
    'car_3.jpg',
    'car_4.jpg',
    'car_5.jpg',
    'car_6.jpg',
    'car_7.jpg'
  ];

  constructor(private httpClient: HttpClient) {}

  // Obtener todos los vehículos
  obtenerVehiculos(): Observable<any[]> {
    return this.httpClient.get<any[]>(`${this.baseUrl}`).pipe(
      map((vehiculos) =>
        vehiculos.map((vehiculo) => {
          // Generar una imagen aleatoria para cada vehículo
          const randomImage =
            this.imagePath +
            this.availableImages[
              Math.floor(Math.random() * this.availableImages.length)
            ];
          return {
            ...vehiculo,
            foto: randomImage, // Imagen aleatoria asignada a cada vehículo
            modelo: vehiculo.modelo || 'Modelo no especificado',
            precio: vehiculo.precio || '$0.00',
            maletas: vehiculo.maletas || 'No especificado',
            puertas: vehiculo.puertas || 'No especificado',
            asientos: vehiculo.asientos || 'No especificado',
            descripcion: vehiculo.descripcion || 'Descripción no disponible.'
          };
        })
      ),
      catchError((error) => {
        console.error('Error al obtener los vehículos:', error);
        return throwError(error);
      })
    );
  }

  // Obtener un vehículo por ID
  obtenerVehiculoPorId(id: number): Observable<any> {
    return this.httpClient.get<any>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error al obtener el vehículo por ID:', error);
        return throwError(error);
      })
    );
  }

  // Crear un nuevo vehículo
  crearVehiculo(vehiculo: any): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}`, vehiculo).pipe(
      catchError((error) => {
        console.error('Error al crear el vehículo:', error);
        return throwError(error);
      })
    );
  }

  // Actualizar un vehículo
  actualizarVehiculo(id: number, vehiculo: any): Observable<any> {
    return this.httpClient.put<any>(`${this.baseUrl}/${id}`, vehiculo).pipe(
      catchError((error) => {
        console.error('Error al actualizar el vehículo:', error);
        return throwError(error);
      })
    );
  }

  // Eliminar un vehículo
  eliminarVehiculo(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.baseUrl}/${id}`).pipe(
      catchError((error) => {
        console.error('Error al eliminar el vehículo:', error);
        return throwError(error);
      })
    );
  }
}
