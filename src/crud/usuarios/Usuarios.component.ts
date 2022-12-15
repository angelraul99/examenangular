import { Component, OnInit } from '@angular/core';
import { UsuariosModel } from 'src/models/Usuarios.model';
import Swal from 'sweetalert2';
import { UsuariosService } from 'src/services/Usuarios.service';

@Component({
  selector: 'app-Usuarios',
  templateUrl: './Usuarios.component.html',
  styleUrls: ['./Usuarios.component.css']
})
export class UsuariosComponent implements OnInit {

mostrarActualizar: boolean = false;
  usuariosAll: UsuariosModel[] = [];
  id: number= 0;

  constructor(private readonly UsuariosService: UsuariosService) { }

  async ngOnInit() {
    this.usuariosAll = await this.UsuariosService.getUsuarios();
  }

  obtenerUsuarios() {
    this.UsuariosService.getUsuarios()
    .then((response: any) => {
      this.usuariosAll = response.cont.usuariosAll;
    })
    .catch((error: any) => {
      Swal.fire({
        icon: "error",
        text: error.error.msg
      });
    });
  }

  actualizar(idUsuarios: any) {
    this.id = idUsuarios;
    this.mostrarActualizar = true;
  }

  restableceRegistro(){
    this.mostrarActualizar = false;
    this.id;
            this.obtenerUsuarios();
        }

        eliminar(usuarios: UsuariosModel)
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
                this.UsuariosService.deleteUsuarios(usuarios.id_us)
                .then((response: any) => {
                    Swal.fire({
                    icon: "info",
            text: "Successfully removed"
                    });
            this.obtenerUsuarios();
        })
        .catch((error: any) => {
          Swal.fire({
            icon: "error",
            text: "Error updating Usuarios."
          });
        })
      }
    })
  }


}