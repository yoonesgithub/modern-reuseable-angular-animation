import { Component, signal } from '@angular/core';
import { UckyFalcon75Component } from "../../../ui-verse/ucky-falcon-75/ucky-falcon-75.component";
import { TenderSwan29Component } from "../../../ui-verse/tender-swan-29/tender-swan-29.component";
type validAnimations = 'slide-down-300' | 'fade-in-300';
@Component({
  selector: 'app-enter-binding',
  imports: [UckyFalcon75Component, TenderSwan29Component],
  templateUrl: './enter-binding.component.html',
  styleUrl: './enter-binding.component.scss'
})
export class EnterBindingComponent {
 show = signal<boolean>(false);
    animationOptions = [
     { label: 'Slide down', value: 'slide-down-1000' },
     { label: 'Fade in', value: 'fade-in-1000' }
   ];

  animation = signal('');
  setAnimation(newAnimation: string) {
    this.show.update((bool) => false);
    this.animation.update((val) => newAnimation)
    setTimeout(() => {
      this.show.update((bool) => true);
    }, 1_000);
  }
}
