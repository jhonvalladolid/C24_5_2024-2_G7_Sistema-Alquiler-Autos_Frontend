import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListingComponent } from './pages/listing/listing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Ruta por defecto
  { path: 'listing', component: ListingComponent }, // Ruta por defecto
  { path: 'testimonials', component: TestimonialsPageComponent }, // Ruta por defecto
  { path: 'blog', component: BlogComponent }, // Ruta por defecto
  { path: 'about', component: AboutComponent }, // Ruta por defecto
  { path: 'contact', component: ContactComponent }, // Ruta por defecto
  { path: '**', redirectTo: '' }, // Redireccionar cualquier ruta desconocida a Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
