import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from "rxjs/operators";
import { PaisService } from '../../services/pais.service';

@Component({
  selector: 'app-ver-pais',
  templateUrl: './ver-pais.component.html',
  styles: [
  ]
})
export class VerPaisComponent implements OnInit {

  constructor( private activatedRoute: ActivatedRoute, 
               private paisService: PaisService
    ) { }

  ngOnInit(): void {

    // this.activatedRoute.params
    //   .subscribe( ({ id }) => { // Hago la desestructuración de params (params.id está en el app-routing.module.ts)
    //     console.log( id );

    //     this.paisService.getPaisPorCodigo( id )
    //     .subscribe( pais => {
    //       console.log(pais);
    //     });

    //   } )

    // Usar RxJs
    // Accedemos al Observable que tiene los parámetros
    this.activatedRoute.params
      .pipe( //Operador de Rx. Permite recibir un Observable y regresar un Observable
        // switchMap( ( param ) => this.paisService.getPaisPorCodigo( param['id'] ) )
        switchMap( ( {id} ) => this.paisService.getPaisPorCodigo( id ) )
      )
      .subscribe( resp => {
        console.log( resp );
      });

  }

}
