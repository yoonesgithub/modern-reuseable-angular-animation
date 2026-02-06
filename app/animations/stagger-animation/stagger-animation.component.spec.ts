import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StaggerAnimationComponent } from './stagger-animation.component';

describe('StaggerAnimationComponent', () => {
  let component: StaggerAnimationComponent;
  let fixture: ComponentFixture<StaggerAnimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StaggerAnimationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StaggerAnimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
