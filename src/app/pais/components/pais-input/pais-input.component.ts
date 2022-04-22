import { Component, EventEmitter, Output, OnInit, Input } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'app-pais-input',
  templateUrl: './pais-input.component.html'
})
export class PaisInputComponent implements OnInit{  

  @Output() onEnter   : EventEmitter<string> = new EventEmitter();
  @Output() onDebounce: EventEmitter<string> = new EventEmitter(); // Se emita cuando deje de escribir

  debouncer: Subject<string> = new Subject();

  termino: string = '';

  @Input() placeholder: string = '';

  ngOnInit() { //Se dispara una vez, cuando el componente ha sido creado e inicializado
    this.debouncer
    .pipe(debounceTime(300))
    .subscribe( valor => {
      this.onDebounce.emit( valor );
    } )
  }

  buscar(){
    this.onEnter.emit(this.termino);
  }

  teclaPresionada(){
    // const valor = event.target.value;
    
    this.debouncer.next( this.termino );
  }
}
