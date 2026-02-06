import { Component } from '@angular/core';
import { EnterComponent } from "./enter/enter.component";
import { EnterBindingComponent } from "./enter-binding/enter-binding.component";
import { LeaveComponent } from "./leave/leave.component";
import { StaggerAnimationComponent } from "../stagger-animation/stagger-animation.component";

@Component({
  selector: 'app-enter-leave',
  imports: [EnterComponent, EnterBindingComponent, LeaveComponent, StaggerAnimationComponent],
  templateUrl: './enter-leave.component.html',
  styleUrl: './enter-leave.component.scss'
})
export class EnterLeaveComponent {
  
}
