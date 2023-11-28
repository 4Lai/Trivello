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
import { OffersComponent } from './pages/offers/offers.component';
import { OfferDetailedComponent } from './pages/offer-detailed/offer-detailed.component';
import { OffersHeroComponent } from './shared/components/offers-hero/offers-hero.component';
import { OffersContentComponent } from './shared/components/offers-content/offers-content.component';
import { OfferDetailedHeroComponent } from './shared/components/offer-detailed-hero/offer-detailed-hero.component';
import { OfferDetailedContentComponent } from './shared/components/offer-detailed-content/offer-detailed-content.component';
import { OfferDetailTitleComponent } from './shared/components/offer-detail-title/offer-detail-title.component';
import { OfferDetailScoreComponent } from './shared/components/offer-detail-score/offer-detail-score.component';
import { OfferDetailedObjComponent } from './shared/components/offer-detailed-obj/offer-detailed-obj.component';
import { OffersDetailedRecComponent } from './shared/components/offers-detailed-rec/offers-detailed-rec.component';
import { OfferDetailedStayPlanComponent } from './shared/components/offer-detailed-stay-plan/offer-detailed-stay-plan.component';

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
    OffersComponent,
    OfferDetailedComponent,
    OffersHeroComponent,
    OffersContentComponent,
    OfferDetailedHeroComponent,
    OfferDetailedContentComponent,
    OfferDetailTitleComponent,
    OfferDetailScoreComponent,
    OfferDetailedObjComponent,
    OffersDetailedRecComponent,
    OfferDetailedStayPlanComponent,
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
