import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BajaComponent } from './baja/baja.component';
import { BlogComponent } from './blog/blog.component';
import { CalentadoresComponent } from './calentadores/calentadores.component';
import { ContactoComponent } from './contacto/contacto.component';
import { InicioComponent } from './inicio/inicio.component';
import { MediaComponent } from './media/media.component';
import { PlanesComponent } from './planes/planes.component';
import { ProductosComponent } from './productos/productos.component';
import { ProyectosComponent } from './proyectos/proyectos.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BajaComponent,
    BlogComponent,
    CalentadoresComponent,
    ContactoComponent,
    InicioComponent,
    MediaComponent,
    PlanesComponent,
    ProductosComponent,
    ProyectosComponent,
    ServiciosComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
