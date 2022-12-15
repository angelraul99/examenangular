import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EducacionModel } from 'src/models/Educacion.model';
import { EducacionService } from 'src/services/Educacion.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Educacion-detail',
  templateUrl: './Educacion-detail.component.html',
  styleUrls: ['./Educacion-detail.component.css']
})
export class EducacionDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        educacion: EducacionModel = new EducacionModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly EducacionService: EducacionService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.EducacionService.getEducacionById(this.id)
        .then((response: any) => {
          this.educacion = response.cont.Educacion;
        })
        .catch(() => {});
    }
  }

  submitEducacion(forma: NgForm){
    if (this.isNew)
    {
        this.EducacionService.postEducacion(this.educacion)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Educacion has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Educacion"
            });
        });
        } else
        {

            this.EducacionService.putEducacion(this.educacion, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Educacion has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Educacion"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    