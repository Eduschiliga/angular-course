import { Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-output',
  standalone: true,
  imports: [],
  templateUrl: './output.component.html',
  styleUrl: './output.component.scss'
})
export class OutputComponent {
  @Input() number = 0;
  @Output() changedValue = new EventEmitter<string>();

  // Referencia do elemento do html
  @ViewChild('campInput') campValueIput!: ElementRef;

  incrementa() {
    this.number += 1;
    // Referencia do elemento do html
    this.campValueIput.nativeElement.value += 1;
    this.changedValue.emit(`The number has increased and the current value is: ${this.number}`);
  }

  decrementa() {
    this.number -= 1;
    this.changedValue.emit(`The number has decreased and the current value is: ${this.number}`);
  }
}
