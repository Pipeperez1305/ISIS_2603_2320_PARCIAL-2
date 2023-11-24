import { Component, Input, OnInit } from '@angular/core';
import { Curso } from '../curso';

@Component({
  selector: 'app-curso-detail',
  templateUrl: './curso-detail.component.html',
  styleUrls: ['./curso-detail.component.css']
})
export class CursoDetailComponent implements OnInit {

  @Input() cursoDetail!: Curso;
  constructor() { }

  OfreceCurso(ofrece: boolean): string {
      
    if (ofrece==true){

        return 'Sí'
      }
    else{
      return 'No'

    }
  }

  ngOnInit() {
  }

}
