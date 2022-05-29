import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FedyaComponent } from './fedya.component';

describe('FedyaComponent', () => {
  let component: FedyaComponent;
  let fixture: ComponentFixture<FedyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FedyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FedyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
