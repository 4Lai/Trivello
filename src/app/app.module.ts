import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { HeroComponent } from './shared/components/hero/hero.component';
import { SearchHeroComponent } from './shared/components/search-hero/search-hero.component';
import { HotDealsComponent } from './shared/components/hot-deals/hot-deals.component';
import { NavBarComponent } from './shared/components/nav-bar/nav-bar.component';
import { SelectSearchComponent } from './shared/components/select-search/select-search.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AboutUsComponent } from './shared/components/about-us/about-us.component';
import { PopUpNavbarComponent } from './shared/components/pop-up-navbar/pop-up-navbar.component';
import { WhereComponent } from './shared/components/where/where.component';
import { HotDealsSingleComponent } from './shared/components/hot-deals-single/hot-deals-single.component';
import { NewsletterComponent } from './shared/components/newsletter/newsletter.component';
import { TestimonialsComponent } from './shared/components/testimonials/testimonials.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FooterComponent } from './shared/components/footer/footer.component';
import { AboutComponent } from './pages/about/about.component';
import { AboutUsHeroComponent } from './shared/components/about-us-hero/about-us-hero.component';
import { AboutUsHistoryComponent } from './shared/components/about-us-history/about-us-history.component';
import { AboutUsContactComponent } from './shared/components/about-us-contact/about-us-contact.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    HeroComponent,
    SearchHeroComponent,
    HotDealsComponent,
    NavBarComponent,
    SelectSearchComponent,
    AboutUsComponent,
    PopUpNavbarComponent,
    WhereComponent,
    HotDealsSingleComponent,
    NewsletterComponent,
    TestimonialsComponent,
    FooterComponent,
    AboutComponent,
    AboutUsHeroComponent,
    AboutUsHistoryComponent,
    AboutUsContactComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
