import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SocietyAnnounceComponent } from './society-announce.component';

describe('SocietyAnnounceComponent', () => {
  let component: SocietyAnnounceComponent;
  let fixture: ComponentFixture<SocietyAnnounceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SocietyAnnounceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SocietyAnnounceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
