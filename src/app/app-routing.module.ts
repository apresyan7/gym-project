import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';
import { HomeComponent } from './components/home/home.component';
import { ProgramsComponent } from './components/programs/programs.component';
import { SupplementsComponent } from './components/supplements/supplements.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'programs', component: ProgramsComponent},
  {path: 'supplements', component: SupplementsComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
