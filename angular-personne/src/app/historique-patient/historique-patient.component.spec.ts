import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HistoriquePatientComponent } from './historique-patient.component';

describe('HistoriquePatientComponent', () => {
  let component: HistoriquePatientComponent;
  let fixture: ComponentFixture<HistoriquePatientComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HistoriquePatientComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HistoriquePatientComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
