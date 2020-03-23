import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePontoComponent } from './table-ponto.component';

describe('TablePontoComponent', () => {
  let component: TablePontoComponent;
  let fixture: ComponentFixture<TablePontoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePontoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePontoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
