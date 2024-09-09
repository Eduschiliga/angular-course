import { Component } from '@angular/core';
import { InputComponent } from "../input/input.component";
import { OutputComponent } from "../output/output.component";

@Component({
  selector: 'app-input-properties',
  standalone: true,
  imports: [InputComponent, OutputComponent],
  templateUrl: './input-properties.component.html',
  styleUrl: './input-properties.component.scss'
})
export class InputPropertiesComponent {
  protected nameCourse = 'Angular';
  protected number = 0;
  protected message = '';

  onChangeValue(event: string) {
    this.message = event;
  }
}
