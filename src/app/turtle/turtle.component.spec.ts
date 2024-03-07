import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TurtleComponent } from './turtle.component';

describe('TurtleComponent', () => {
  let component: TurtleComponent;
  let fixture: ComponentFixture<TurtleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TurtleComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TurtleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
