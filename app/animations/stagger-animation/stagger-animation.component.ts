import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-stagger-animation',
  imports: [],
  templateUrl: './stagger-animation.component.html',
  styleUrl: './stagger-animation.component.scss'
})
export class StaggerAnimationComponent {
  items = signal([1,2,3,4,5]);
  show = signal<boolean>(false);
  toggle() {
    this.show.update((bool) => !bool)
  }
}
