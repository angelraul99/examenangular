import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { SaludModel } from 'src/models/Salud.model';
import { SaludService } from 'src/services/Salud.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Salud-detail',
  templateUrl: './Salud-detail.component.html',
  styleUrls: ['./Salud-detail.component.css']
})
export class SaludDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        salud: SaludModel = new SaludModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly SaludService: SaludService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.SaludService.getSaludById(this.id)
        .then((response: any) => {
          this.salud = response.cont.Salud;
        })
        .catch(() => {});
    }
  }

  submitSalud(forma: NgForm){
    if (this.isNew)
    {
        this.SaludService.postSalud(this.salud)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Salud has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Salud"
            });
        });
        } else
        {

            this.SaludService.putSalud(this.salud, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Salud has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Salud"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    