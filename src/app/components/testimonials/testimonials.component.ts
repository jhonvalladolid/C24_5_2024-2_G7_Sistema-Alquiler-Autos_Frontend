import { Component } from '@angular/core';

@Component({
  selector: 'app-testimonial',
  templateUrl: './testimonials.component.html',
  styleUrls: ['./testimonials.component.css']
})
export class TestimonialsComponent {
  testimonios = [
    {
      mensaje: 'El servicio fue rápido, eficiente y confiable siempre.',
      imagen: 'assets/images/person_1.jpg',
      nombre: 'Carlos Gómez',
      descripcion: 'Cliente regular'
    },
    {
      mensaje: 'El auto estaba impecable y fue muy cómodo.',
      imagen: 'assets/images/person_2.jpg',
      nombre: 'Ana López',
      descripcion: 'Turista'
    },
    {
      mensaje: 'Excelente trato al cliente, todo fue muy claro.',
      imagen: 'assets/images/person_3.jpg',
      nombre: 'Juan Pérez',
      descripcion: 'Empresario'
    },
    {
      mensaje: 'Muy buena atención, el proceso fue rápido, excelente.',
      imagen: 'assets/images/person_4.jpg',
      nombre: 'María Fernández',
      descripcion: 'Cliente frecuente'
    },
    {
      mensaje: 'Los precios accesibles y autos en excelente condición.',
      imagen: 'assets/images/person_5.jpg',
      nombre: 'Luis Martínez',
      descripcion: 'Viajero frecuente'
    },
    {
      mensaje: 'Todo fue perfecto, repetiría la experiencia sin duda.',
      imagen: 'assets/images/person_1.jpg',
      nombre: 'Sofía Rodríguez',
      descripcion: 'Estudiante'
    }
  ];
}
