import { Component } from '@angular/core';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [`
    button {
      margin-right: 5px;
    }
  `
  ]
})
export class PorRegionComponent{

  regiones: string[] = ['africa', 'americas', 'asia', 'europe', 'oceanía'];
  regionActiva: string = '';

  constructor() { }

  getClaseCSS( region:string ): string{
    return (region === this.regionActiva) 
            ? 'btn btn-primary' 
            : 'btn btn-outline-primary';
  }

  activarRegion( region: string ){
    this.regionActiva = region;

    // TODO: hacer la llamada al servicio
  }
}
