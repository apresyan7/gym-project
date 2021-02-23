import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { SupplementsComponent } from './components/supplements/supplements.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProgramItemsComponent } from './components/programs/program-items/program-items.component';
import { FilterDirectiveDirective } from './shared/directives/filter-directive.directive';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    ProgramsComponent,
    SupplementsComponent,
    AboutComponent,
    ContactComponent,
    ProgramItemsComponent,
    FilterDirectiveDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
