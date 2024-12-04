import { Component } from '@angular/core';

@Component({
  selector: 'app-team-members',
  templateUrl: './team-members.component.html',
  styleUrls: ['./team-members.component.css']
})
export class TeamMembersComponent {
  team = [
    { image: 'assets/images/person_1.jpg', role: 'Fundador', name: 'Carlos Pérez', description: 'Apasionado por la excelencia y el servicio al cliente.' },
    { image: 'assets/images/person_2.jpg', role: 'Co-Fundadora', name: 'Ana Gómez', description: 'Comprometida con brindar soluciones innovadoras en movilidad.' },
    { image: 'assets/images/person_3.jpg', role: 'CTO', name: 'Luis Ramírez', description: 'Especialista en tecnología para optimizar procesos.' },
    { image: 'assets/images/person_4.jpg', role: 'Gerente', name: 'María López', description: 'Con enfoque en garantizar la satisfacción del cliente.' },
    { image: 'assets/images/person_5.jpg', role: 'Diseñador', name: 'Jorge Fernández', description: 'Crea experiencias visuales atractivas para nuestros clientes.' },
    { image: 'assets/images/person_1.jpg', role: 'Atención al Cliente', name: 'Sofía Martínez', description: 'Siempre dispuesta a ayudar con una sonrisa.' }
  ];
}
