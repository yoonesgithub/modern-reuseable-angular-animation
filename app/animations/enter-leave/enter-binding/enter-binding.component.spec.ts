import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnterBindingComponent } from './enter-binding.component';

describe('EnterBindingComponent', () => {
  let component: EnterBindingComponent;
  let fixture: ComponentFixture<EnterBindingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EnterBindingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnterBindingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
