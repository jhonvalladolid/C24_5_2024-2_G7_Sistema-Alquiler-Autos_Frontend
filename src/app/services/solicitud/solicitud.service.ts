import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class SolicitudService {
  private baseUrl = 'http://localhost:3000/solicitudes';

  constructor(private httpClient: HttpClient) {}

  crearSolicitud(solicitud: FormData): Observable<any> {
    return this.httpClient.post<any>(`${this.baseUrl}`, solicitud).pipe(
      catchError((error) => {
        console.error('Error al crear la solicitud:', error);
        return throwError(error);
      })
    );
  }
}
