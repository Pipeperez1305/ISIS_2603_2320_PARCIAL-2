import { Component, OnInit } from '@angular/core';
import { Curso } from '../curso';
import { CursoService } from '../curso.service';

@Component({
  selector: 'app-curso-list',
  templateUrl: './curso-list.component.html',
  styleUrls: ['./curso-list.component.css']
})
export class CursoListComponent implements OnInit {

  cursos: Array<Curso> = [];
  message: string = "";
  selectedCurso!: Curso;
  selected: boolean = false;
  constructor(private CursoService: CursoService) { }

  getCursos(): void {
    this.CursoService.getCursos().subscribe((Cursos) => {
      this.cursos = Cursos;
      this.message = this.getCursosCertificado(this.cursos);
    });
  }

  ngOnInit() {
    this.getCursos();
  }

  getCursosCertificado(Cursos: Curso[]): string {
    let cursosCertificados: string = '';
    Cursos.forEach((Curso) => {
      if (Curso.offers_certificate==true){

        cursosCertificados+=Curso.id.toString()+',';


      }
    });
    return `Los cursos ${cursosCertificados} ofrecen certificado`;
  }

  onSelected(Curso: Curso): void {
    this.selected = true;
    this.selectedCurso = Curso;
  }

}

