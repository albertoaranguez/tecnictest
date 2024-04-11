import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router'
// import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { IntegrantesComponent} from './components/integrantes/integrantes.component';
import { AddOreditIntegrantesComponent} from './components/integrantes/add-oredit-integrantes/add-oredit-integrantes.component';

export const routes: Routes = [
    {path: '', component: HomeComponent, pathMatch: 'full'},
    {path: 'inicio', component: HomeComponent},
    {path: 'listuser', component: IntegrantesComponent},
    {path: 'newuser', component: AddOreditIntegrantesComponent},
    {path: 'edituser/:idEdit', component: AddOreditIntegrantesComponent},

];


@NgModule({
    declarations: [],
    imports: [
      CommonModule,
      RouterModule.forRoot(routes)
    ],
    exports : [RouterModule]
  })
  export class AppRoutingModule { 
  
  }