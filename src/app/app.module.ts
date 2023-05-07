import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CarteleraComponent } from './cartelera/cartelera.component';
import { AlimentosComponent } from './alimentos/alimentos.component';
import { UbicanosComponent } from './ubicanos/ubicanos.component';
import { PerfilComponent } from './perfil/perfil.component';
import { BuscadorComponent } from './buscador/buscador.component';

@NgModule({
  declarations: [
    AppComponent,
    CarteleraComponent,
    AlimentosComponent,
    UbicanosComponent,
    PerfilComponent,
    BuscadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
