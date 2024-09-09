import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-property-binding-interpolacao',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './property-binding-interpolacao.component.html',
  styleUrl: './property-binding-interpolacao.component.scss'
})
export class PropertyBindingInterpolacaoComponent {
  protected url: string = 'https://www.google.com';
  protected cursoAngular: boolean = true;
  protected urlImagem: string = 'http://lorempixel.com.br/150/150/?1';
  protected currentCaractere: string = '';
  protected valueSaved: string = '';
  protected isMouseOver: boolean = false;
  protected name: string = 'abc';
  protected person = {
    name: '',
    age: 0
  }

  constructor() { }

  getValor() {
    return 1;
  }

  getCurtir() {
    return true;
  }

  buttonClicked() {
    alert('Button clicked!');
  }

  onKeyUp(event: KeyboardEvent) {
    this.currentCaractere += event.key;
  }

  onKeyUpEnter(event: any) {
    const INPUT = event.target as HTMLInputElement;

    this.valueSaved = INPUT.value;
  }

  onMouseOverOut(event: MouseEvent) {
    this.isMouseOver = !this.isMouseOver;
  }
}
