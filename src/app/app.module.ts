import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ServerService } from './server.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddComponent } from './add/add.component';
import { NavComponent } from './nav/nav.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { EditComponent } from './edit/edit.component';
import { PlantdetailComponent } from './plantdetail/plantdetail.component';
import { environment } from 'src/environments/environment';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { provideFirebaseApp, initializeApp, FirebaseApp } from '@angular/fire/app';
import { getFirestore, provideFirestore, Firestore } from '@angular/fire/firestore';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() =>getFirestore()),
  ],
  declarations: [
    AppComponent,
    AddComponent,
    NavComponent,
    HeaderComponent,
    FooterComponent,
    EditComponent,
    HomeComponent,
    PlantdetailComponent,
  ],
  providers: [
    ServerService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
