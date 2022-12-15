import { Component, OnInit } from '@angular/core';
import { PoliticaModel } from 'src/models/Politica.model';
import Swal from 'sweetalert2';
import { PoliticaService } from 'src/services/Politica.service';

@Component({
  selector: 'app-Politica',
  templateUrl: './Politica.component.html',
  styleUrls: ['./Politica.component.css']
})
export class PoliticaComponent implements OnInit {

mostrarActualizar: boolean = false;
  politicaAll: PoliticaModel[] = [];
  id: number= 0;

  constructor(private readonly PoliticaService: PoliticaService) { }

  async ngOnInit() {
    this.politicaAll = await this.PoliticaService.getPolitica();
  }

  obtenerPolitica() {
    this.PoliticaService.getPolitica()
    .then((response: any) => {
      this.politicaAll = response.cont.politicaAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idPolitica: any) {
    this.id = idPolitica;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerPolitica();
        }

        eliminar(politica: PoliticaModel)
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
                this.PoliticaService.deletePolitica(politica.id_pol)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerPolitica();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Politica."
          });
        })
      }
    })
  }


}