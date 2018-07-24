import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InicioComponent} from './inicio/inicio.component';
import { ProductosComponent} from './productos/productos.component';
import { BajaComponent} from './baja/baja.component';
import { MediaComponent} from './media/media.component';
import { CalentadoresComponent} from './calentadores/calentadores.component';
import { ServiciosComponent} from './servicios/servicios.component';
import { ProyectosComponent} from './proyectos/proyectos.component';
import { PlanesComponent} from './planes/planes.component';
import { BlogComponent} from './blog/blog.component';
import { ContactoComponent} from './contacto/contacto.component';



const routes: Routes = [
  {path:'inicio', component:InicioComponent},
  {path:'productos', component:ProductosComponent},
  {path:'baja', component:BajaComponent},
  {path:'media', component:MediaComponent},
  {path:'calentadores', component:CalentadoresComponent},
  {path:'servicios', component:ServiciosComponent},
  {path:'proyectos', component:ProyectosComponent},
  {path:'planes', component:PlanesComponent},
  {path:'blog', component:BlogComponent},
  {path:'contacto', component:ContactoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
