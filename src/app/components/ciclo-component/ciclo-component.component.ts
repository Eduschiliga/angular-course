import { Component } from '@angular/core';
import { CicloComponent } from "./ciclo/ciclo.component";

@Component({
  selector: 'app-ciclo-component',
  standalone: true,
  imports: [CicloComponent],
  templateUrl: './ciclo-component.component.html',
  styleUrl: './ciclo-component.component.scss'
})
export class CicloComponentComponent {
  value = 10;
  delete = false;

  changeValue() {
    this.value = Math.floor(Math.random() * 1000);
  }

  deleteCicle() {
    this.delete = true;
  }
}
