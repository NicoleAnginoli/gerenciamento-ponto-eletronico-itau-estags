import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroIdComponent } from './filtro-id.component';

describe('FiltroIdComponent', () => {
  let component: FiltroIdComponent;
  let fixture: ComponentFixture<FiltroIdComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroIdComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroIdComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
