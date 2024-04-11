import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { TableModule } from 'primeng/table';
import { TooltipModule } from 'primeng/tooltip';
import { ApiService } from '../../service/api.service';
import { ActivatedRoute } from '@angular/router';
import { Router } from '@angular/router';

@Component({
  selector: 'app-integrantes',
  standalone: true,
  imports: [ButtonModule, TableModule,TooltipModule],
  templateUrl: './integrantes.component.html',
  styleUrl: './integrantes.component.css'
})
export class IntegrantesComponent {
  listIntegrantes: any[] = [];


   constructor(private apiserver: ApiService, private route: ActivatedRoute, private router: Router) {
    
   };
   ngOnInit(): void{
    this.llenarData();
   };



   eliminarRegistro(id_registro: any) {
    this.apiserver.deleteUser(id_registro).subscribe({
      next: result => {
        try {
          this.llenarData();
        } catch (error) {
          console.error("Error en el manejo del resultado:", error);
        }
      },
      error: err => {
        console.error("Error en la petición HTTP:", err);
      }
    });

   }
   
   confirmEliminarRegistro(id : any) {

    if (confirm('Confirma eliminar integrante : \n' + id.Apellido + ","+ id.Nombre)){  
        this.eliminarRegistro(id.id);
    }
   }

   dirEdit(id : any) {

    this.router.navigate(['/edituser/'+ id.id]);

   }

   llenarData(){
    this.apiserver.getData().subscribe(data => {
      this.listIntegrantes= data;
    })
    
    
  }
}
