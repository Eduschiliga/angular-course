import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

import { CicloComponentComponent } from './components/ciclo-component/ciclo-component.component';
import { CicloComponent } from './components/ciclo-component/ciclo/ciclo.component';
import { CursosComponent } from './components/cursos/cursos.component';
import { InputPropertiesComponent } from './components/input-properties/input-properties.component';
import { NgContentComponent } from './components/ng-content/ng-content.component';
import { OperadorElvisComponent } from './components/operador-elvis/operador-elvis.component';
import { PropertyBindingInterpolacaoComponent } from './components/property-binding-interpolacao/property-binding-interpolacao.component';
import { DiretivasCustomizadasComponent } from "./components/diretivas-customizadas/diretivas-customizadas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    CursosComponent,
    PropertyBindingInterpolacaoComponent,
    InputPropertiesComponent,
    CicloComponent,
    CicloComponentComponent,
    OperadorElvisComponent,
    NgContentComponent,
    DiretivasCustomizadasComponent
],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'angular-course';
  number = 0;
}
