import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroPontoComponent } from './registro-ponto.component';

describe('RegistroPontoComponent', () => {
  let component: RegistroPontoComponent;
  let fixture: ComponentFixture<RegistroPontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RegistroPontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistroPontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
