import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddFuncComponent } from './add-func.component';

describe('AddFuncComponent', () => {
  let component: AddFuncComponent;
  let fixture: ComponentFixture<AddFuncComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddFuncComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddFuncComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
