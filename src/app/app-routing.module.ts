import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { ListingComponent } from './pages/listing/listing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { RentVehicleComponent } from './pages/rent-vehicle/rent-vehicle.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'listing', component: ListingComponent },
  { path: 'testimonials', component: TestimonialsPageComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'about', component: AboutComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'rent/:id', component: RentVehicleComponent },
  { path: '**', redirectTo: '' }, // Redireccionar cualquier ruta desconocida a Home
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
