import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegistrarModel } from 'src/models/Registrar.model';
import { RegistrarService } from 'src/services/Registrar.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Registrar-detail',
  templateUrl: './Registrar-detail.component.html',
  styleUrls: ['./Registrar-detail.component.css']
})
export class RegistrarDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        registrar: RegistrarModel = new RegistrarModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly RegistrarService: RegistrarService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.RegistrarService.getRegistrarById(this.id)
        .then((response: any) => {
          this.registrar = response.cont.Registrar;
        })
        .catch(() => {});
    }
  }

  submitRegistrar(forma: NgForm){
    if (this.isNew)
    {
        this.RegistrarService.postRegistrar(this.registrar)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Registrar has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Registrar"
            });
        });
        } else
        {

            this.RegistrarService.putRegistrar(this.registrar, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Registrar has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Registrar"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    