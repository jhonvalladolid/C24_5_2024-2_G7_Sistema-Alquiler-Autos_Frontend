import { Component } from '@angular/core';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent {
  posts = [
    {
      image: 'assets/images/post_1.jpg',
      title: 'El mejor servicio de renta de autos',
      date: '17 de Julio, 2019',
      author: 'Admin',
      description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
      link: 'single.html'
    },
    {
      image: 'assets/images/img_2.jpg',
      title: 'Consejos para mantener tu auto impecable',
      date: '20 de Julio, 2019',
      author: 'Admin',
      description: 'Dolores eos soluta, dolore harum molestias consectetur.',
      link: 'single.html'
    },
    {
      image: 'assets/images/img_3.jpg',
      title: 'Renta de autos: Lo que necesitas saber',
      date: '22 de Julio, 2019',
      author: 'Admin',
      description: 'Consectetur adipisicing elit. Dolores eos soluta, dolore.',
      link: 'single.html'
    },
    // Agrega más publicaciones si es necesario
  ];
}
