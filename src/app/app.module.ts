import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountdownTimeComponent } from './countdown-time/countdown-time.component';
import { ParticlesModule } from 'angular-particle';
import { QuoteComponent } from './quote/quote.component';
import { AngularFireModule } from '@angular/fire';
import { FormsModule } from '@angular/forms';
import { QuotesListComponent } from './quotes-list/quotes-list.component';
import {NgxPaginationModule} from 'ngx-pagination';
@NgModule({
  declarations: [
    AppComponent,
    CountdownTimeComponent,
    QuoteComponent,
    QuotesListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ParticlesModule,
    AngularFireModule.initializeApp(environment.firebase),
    FormsModule,
    NgxPaginationModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
