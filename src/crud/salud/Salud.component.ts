import { Component, OnInit } from '@angular/core';
import { SaludModel } from 'src/models/Salud.model';
import Swal from 'sweetalert2';
import { SaludService } from 'src/services/Salud.service';

@Component({
  selector: 'app-Salud',
  templateUrl: './Salud.component.html',
  styleUrls: ['./Salud.component.css']
})
export class SaludComponent implements OnInit {

mostrarActualizar: boolean = false;
  saludAll: SaludModel[] = [];
  id: number= 0;

  constructor(private readonly SaludService: SaludService) { }

  async ngOnInit() {
    this.saludAll = await this.SaludService.getSalud();
  }

  obtenerSalud() {
    this.SaludService.getSalud()
    .then((response: any) => {
      this.saludAll = response.cont.saludAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idSalud: any) {
    this.id = idSalud;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerSalud();
        }

        eliminar(salud: SaludModel)
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
                this.SaludService.deleteSalud(salud.id_salu)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerSalud();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Salud."
          });
        })
      }
    })
  }


}