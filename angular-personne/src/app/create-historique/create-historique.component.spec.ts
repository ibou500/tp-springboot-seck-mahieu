import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHistoriqueComponent } from './create-historique.component';

describe('CreateHistoriqueComponent', () => {
  let component: CreateHistoriqueComponent;
  let fixture: ComponentFixture<CreateHistoriqueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateHistoriqueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateHistoriqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
