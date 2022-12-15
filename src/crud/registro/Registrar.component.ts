import { Component, OnInit } from '@angular/core';
import { RegistrarModel } from 'src/models/Registrar.model';
import Swal from 'sweetalert2';
import { RegistrarService } from 'src/services/Registrar.service';

@Component({
  selector: 'app-Registrar',
  templateUrl: './Registrar.component.html',
  styleUrls: ['./Registrar.component.css']
})
export class RegistrarComponent implements OnInit {

mostrarActualizar: boolean = false;
  registrarAll: RegistrarModel[] = [];
  id: number= 0;

  constructor(private readonly RegistrarService: RegistrarService) { }

  async ngOnInit() {
    this.registrarAll = await this.RegistrarService.getRegistrar();
  }

  obtenerRegistrar() {
    this.RegistrarService.getRegistrar()
    .then((response: any) => {
      this.registrarAll = response.cont.registrarAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idRegistrar: any) {
    this.id = idRegistrar;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerRegistrar();
        }

        eliminar(registrar: RegistrarModel)
        {
            Swal.fire({
            icon: "question",
    title: `Are you sure to delete?`,
    showCancelButton: true,
    confirmButtonText: 'Yes',
    cancelButtonText: "Cancel"
            }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed)
            {
                this.RegistrarService.deleteRegistrar(registrar.id_en)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerRegistrar();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Registrar."
          });
        })
      }
    })
  }


}