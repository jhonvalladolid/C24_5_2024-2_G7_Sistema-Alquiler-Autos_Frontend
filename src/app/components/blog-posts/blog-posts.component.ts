import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-blog-posts',
  templateUrl: './blog-posts.component.html',
  styleUrls: ['./blog-posts.component.css']
})
export class BlogPostsComponent {
  @Input() posts: Array<{
    image: string;
    title: string;
    date: string;
    author: string;
    description: string;
    link: string;
  }> = [];
}
