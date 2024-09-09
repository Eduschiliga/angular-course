import { Component } from '@angular/core';
import { CursosService } from '../../services/cursos/cursos.service';

@Component({
  selector: 'app-cursos',
  standalone: true,
  imports: [],
  templateUrl: './cursos.component.html',
  styleUrl: './cursos.component.scss'
})
export class CursosComponent {
  protected nomePortal: string;
  protected cursos: string[];

  constructor(
    private cursosService: CursosService
  ) {
    this.nomePortal = 'http://loiane.training';
    this.cursos = this.cursosService.getCursos();
  }

}
