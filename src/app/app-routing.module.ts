import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// IMPORTACION DE COMPONENTE QUE FUNCIONARAN COMO RUTAS
import { HomeComponent } from './components/page/home/home.component';
import { ErrorComponent } from './components/page/error/error.component';
import { PruebaComponent } from './components/page/prueba/prueba.component';
// RUTAS
const routes: Routes = [
  { path: '', component:  HomeComponent },
  { path: 'home', component:  HomeComponent },
  { path: 'prueba', component:  PruebaComponent },     //EJME RUTA OPCIONAL
  { path: 'prueba/:var', component:  PruebaComponent },//EJME RUTA OPCIONAL
  { path: '**', component:  ErrorComponent}
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(routes, { useHash: false });
