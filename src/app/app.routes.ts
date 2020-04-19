import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UsuarioComponent } from './components/usuario/usuario.component';
import { USUARIO_ROUTES } from './components/usuario/usuario.routes';

const APP_ROUTING: Routes = [
    { path: 'home', component: HomeComponent },
    { path: 'usuario/:id', component: UsuarioComponent,
        children: USUARIO_ROUTES // esto se va encontrar dentro de otra constante importada
    },
    { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

@NgModule({
    imports: [RouterModule.forRoot(APP_ROUTING)],
    exports: [RouterModule]
})
export class AppRoutingModule {}
