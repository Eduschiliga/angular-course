import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'app-operador-elvis',
  imports: [],
  templateUrl: './operador-elvis.component.html',
  styleUrl: './operador-elvis.component.scss'
})
export class OperadorElvisComponent {
  taks = {
    description: 'Descrição da tarefa',
    accountable: {
      user: {
        name: null,
      }
    }
  };
}
