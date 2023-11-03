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
import { getFirestore, provideFirestore, Firestore, collection, collectionData, addDoc, DocumentData, updateDoc, doc } from '@angular/fire/firestore';
import { HttpClientModule } from '@angular/common/http';
import { AngularFireModule } from '@angular/fire/compat';
import { FirestoreModule } from '@angular/fire/firestore';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { FIREBASE_OPTIONS } from '@angular/fire/compat';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { LoginComponent } from './auth/login/login.component';
import { SignupComponent } from './auth/signup/signup.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    provideFirebaseApp(() => initializeApp(environment.firebaseConfig)),
    provideFirestore(() =>getFirestore()),
    provideAuth(() => getAuth()),
    AngularFireStorageModule,
    FirestoreModule,
    AngularFireModule
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
    LoginComponent,
    SignupComponent,
  ],
  providers: [
    ServerService,
    { provide: FIREBASE_OPTIONS, useValue: environment.firebaseConfig }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
