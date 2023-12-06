import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { Routes } from '@angular/router'; // Correct import
import { RouterModule } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component'; // Add this import
const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    HomeComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes), // Add RouterModule with your routes here

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }