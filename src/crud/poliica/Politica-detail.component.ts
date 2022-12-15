import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PoliticaModel } from 'src/models/Politica.model';
import { PoliticaService } from 'src/services/Politica.service';
import Swal from 'sweetalert2';

@Component({
 selector: 'app-Politica-detail',
  templateUrl: './Politica-detail.component.html',
  styleUrls: ['./Politica-detail.component.css']
})
export class PoliticaDetailComponent implements OnInit {
@Input() id: number = 0;
        isNew: boolean = false;

        politica: PoliticaModel = new PoliticaModel();
            @Output() emitChange: EventEmitter < any > = new EventEmitter();
            constructor(private readonly PoliticaService: PoliticaService) { }

  ngOnInit() : void {
    
    this.isNew = !this.id;

console.log(this.isNew);
    if(!this.isNew){
      this.PoliticaService.getPoliticaById(this.id)
        .then((response: any) => {
          this.politica = response.cont.Politica;
        })
        .catch(() => {});
    }
  }

  submitPolitica(forma: NgForm){
    if (this.isNew)
    {
        this.PoliticaService.postPolitica(this.politica)
        .then((response: any) => {
            Swal.fire({
            icon: "success",
        text: "Politica has been successfully registered"
            });
            // forma.reset();
            this.emitChange.emit();
        })
    .catch ((error: any) => {
            Swal.fire({
            icon: "error",
        text: "An error has occurred to register Politica"
            });
        });
        } else
        {

            this.PoliticaService.putPolitica(this.politica, this.id)
            .then((response: any) => {
                Swal.fire({
                icon: "success",
        text: "Politica has been successfully updated."
                });
                this.emitChange.emit();
            })
    .catch ((error: any) => {
                Swal.fire({
                icon: "error",
        text: "An error has occurred to update Politica"
                });
            });
            }

        }

        limpiarForm(forma: NgForm){
            forma.reset();
        }

    }
    