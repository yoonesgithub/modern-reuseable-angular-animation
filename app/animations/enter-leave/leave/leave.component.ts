import { Component, signal } from '@angular/core';
import { YoungWalrus64Component } from "../../../ui-verse/young-walrus-64/young-walrus-64.component";

@Component({
  selector: 'app-leave',
  imports: [YoungWalrus64Component],
  templateUrl: './leave.component.html',
  styleUrl: './leave.component.scss'
})
export class LeaveComponent {
   show = signal<boolean>(false);
  toggle() {
    this.show.update((bool) => !bool)
  }
}
