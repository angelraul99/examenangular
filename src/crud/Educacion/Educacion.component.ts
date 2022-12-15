import { Component, OnInit } from '@angular/core';
import { EducacionModel } from 'src/models/Educacion.model';
import Swal from 'sweetalert2';
import { EducacionService } from 'src/services/Educacion.service';

@Component({
  selector: 'app-Educacion',
  templateUrl: './Educacion.component.html',
  styleUrls: ['./Educacion.component.css']
})
export class EducacionComponent implements OnInit {

mostrarActualizar: boolean = false;
  educacionAll: EducacionModel[] = [];
  id: number= 0;

  constructor(private readonly EducacionService: EducacionService) { }

  async ngOnInit() {
    this.educacionAll = await this.EducacionService.getEducacion();
  }

  obtenerEducacion() {
    this.EducacionService.getEducacion()
    .then((response: any) => {
      this.educacionAll = response.cont.educacionAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idEducacion: any) {
    this.id = idEducacion;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerEducacion();
        }

        eliminar(educacion: EducacionModel)
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
                this.EducacionService.deleteEducacion(educacion.id_edu)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerEducacion();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Educacion."
          });
        })
      }
    })
  }


}