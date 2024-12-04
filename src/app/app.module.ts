import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './pages/home/home.component';
import { HeroComponent } from './components/hero/hero.component';
import { HowItWorksComponent } from './components/how-it-works/how-it-works.component';
import { PromoComponent } from './components/promo/promo.component';
import { CarListingsComponent } from './components/car-listings/car-listings.component';
import { FeaturesComponent } from './components/features/features.component';
import { TestimonialsComponent } from './components/testimonials/testimonials.component';
import { CtaComponent } from './components/cta/cta.component';
import { ListingComponent } from './pages/listing/listing.component';
import { BlogComponent } from './pages/blog/blog.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';
import { HttpClientModule } from '@angular/common/http';
import { HeroBannerComponent } from './components/hero-banner/hero-banner.component';
import { TestimonialsPageComponent } from './pages/testimonials-page/testimonials-page.component';
import { BlogPostsComponent } from './components/blog-posts/blog-posts.component';
import { CarCompanyComponent } from './components/car-company/car-company.component';
import { TeamMembersComponent } from './components/team-members/team-members.component';
import { OurHistoryComponent } from './components/our-history/our-history.component';
import { ContactFormComponent } from './components/contact-form/contact-form.component';
import { RentVehicleComponent } from './pages/rent-vehicle/rent-vehicle.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    HeroComponent,
    HowItWorksComponent,
    PromoComponent,
    CarListingsComponent,
    FeaturesComponent,
    TestimonialsComponent,
    CtaComponent,
    ListingComponent,
    BlogComponent,
    AboutComponent,
    ContactComponent,
    HeroBannerComponent,
    TestimonialsPageComponent,
    BlogPostsComponent,
    CarCompanyComponent,
    TeamMembersComponent,
    OurHistoryComponent,
    ContactFormComponent,
    RentVehicleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
