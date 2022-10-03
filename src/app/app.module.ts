//ANGULAR//
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { FormsModule } from '@angular/forms';
//FIREBASE//
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { environment } from '../environments/environment';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
//NGRX//
import { StoreModule } from '@ngrx/store';
import { MAIN_REDUCER } from './main.reducer';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { HerosEffects } from './store/heroesState/heroes.effects';
//COMPONENTS//
import { AppComponent } from './app.component';
import { TableComponent } from './core/table/table.component';
import { EditHeroeComponent } from './core/edit-heroe/edit-heroe.component';
//MODULO DE ANGULAR MATERIAL//
import { MaterialModule } from './material.module';
//MODULO DE RUTAS//
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    EditHeroeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MaterialModule,
    AngularSvgIconModule.forRoot(),
    StoreModule.forRoot(MAIN_REDUCER),
    EffectsModule.forRoot([ HerosEffects ]),
    StoreDevtoolsModule.instrument({
      maxAge: 100, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
      autoPause: true, // Pauses recording actions and state changes when the extension window is not open
    }),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
  ],
  providers: [],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
