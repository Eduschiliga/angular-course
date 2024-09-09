import { Component } from '@angular/core';
import { BgYellowDirective } from '../../directive/bg-yellow.directive';


@Component({
  selector: 'app-diretivas-customizadas',
  templateUrl: './diretivas-customizadas.component.html',
  styleUrl: './diretivas-customizadas.component.scss',
  standalone: true,
  imports: [BgYellowDirective]
})
export class DiretivasCustomizadasComponent {

}
