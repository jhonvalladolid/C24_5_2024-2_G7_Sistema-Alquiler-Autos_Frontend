import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-hero-banner',
  templateUrl: './hero-banner.component.html',
  styleUrls: ['./hero-banner.component.css']
})
export class HeroBannerComponent {
  @Input() title: string = 'Default Title'; // Título principal
  @Input() backgroundImage: string = 'assets/images/hero_1_a.jpg'; // Imagen de fondo por defecto
  @Input() breadcrumbLink: string = '/'; // Enlace para el breadcrumb
  @Input() breadcrumbLabel: string = 'Home'; // Etiqueta del breadcrumb
  @Input() currentPage: string = 'Current Page'; // Página actual
}
