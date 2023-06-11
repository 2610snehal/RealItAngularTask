import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddtblComponent } from './addtbl.component';

describe('AddtblComponent', () => {
  let component: AddtblComponent;
  let fixture: ComponentFixture<AddtblComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddtblComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddtblComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
