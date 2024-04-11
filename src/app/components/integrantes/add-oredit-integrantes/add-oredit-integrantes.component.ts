import { CommonModule, JsonPipe } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm} from '@angular/forms'; 
import { InputTextModule } from 'primeng/inputtext';
import { Integrante } from '../../../model/integrante';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';
import { TooltipModule } from 'primeng/tooltip';
import { InputMaskModule } from 'primeng/inputmask';
import { ApiService } from '../../../service/api.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { ConfirmationService, MessageService, ConfirmEventType } from 'primeng/api';
import { ToastModule } from 'primeng/toast';




@Component({
  selector: 'app-add-oredit-integrantes',
  standalone: true,
  imports: [InputTextModule, FormsModule, CommonModule, JsonPipe,PanelModule,ButtonModule,TooltipModule,InputMaskModule],
  providers: [ConfirmationService, MessageService],
  templateUrl: './add-oredit-integrantes.component.html',
  styleUrl: './add-oredit-integrantes.component.css'
})

export class AddOreditIntegrantesComponent {

  idDir: string = '';
  titulo : string ="";
  isFormSubmited: boolean = false;
  constructor(private apiserver: ApiService, private router: Router,private route: ActivatedRoute,private messageService: MessageService) {
    this.route.params.subscribe(params => this.idDir = params['idEdit']);
    this.titulo  = (this.idDir? "Modificacion de Integrante": "Nuevo Integrante");
    
  }
  


  usr: Integrante = {
    DNI: '',
    Nombre: "",
    Apellido: "",
    Edad: 0,
    Email:"",
    Telefono: ""
};

ngOnInit(): void{

  if(this.idDir){
    this.llenarObjEdit(this.idDir);
  }
  
 };

 llenarObjEdit(id: any){
  this.apiserver.getDataById(id).subscribe(data => {
    this.usr= data;
  })
}

onSubmit(form: NgForm) {
  const isFormValid = form.form.valid;
  this.isFormSubmited = true;
  
  if (isFormValid)
  {
    if (!this.idDir){
     this.apiserver.postUser(this.usr)
      .then((resultado: string) => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Registro Cargado' });
        this.router.navigate(['/listuser']);
      })
      .catch(error => {
        console.error('Error al llamar a postUser:', error);
      });
    }
    else{
      this.apiserver.updateUser(this.usr)
      .then((resultado: string) => {
        this.messageService.add({ severity: 'info', summary: 'Confirmed', detail: 'Registro Actualizado' });
        this.router.navigate(['/listuser']);
      })
      .catch(error => {
        console.error('Error al llamar a updateUser:', error);
      });
    }

      
  }


}

}
