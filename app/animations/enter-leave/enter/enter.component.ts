import { Component, signal } from '@angular/core';
import { UckyFalcon75Component } from "../../../ui-verse/ucky-falcon-75/ucky-falcon-75.component";

@Component({
  selector: 'app-enter',
  imports: [UckyFalcon75Component],
  templateUrl: './enter.component.html',
  styleUrl: './enter.component.scss'
})
export class EnterComponent {
  // simple enter 
  show = signal<boolean>(false);
  toggle() {
    this.show.update((bool) => !bool)
  }
}
