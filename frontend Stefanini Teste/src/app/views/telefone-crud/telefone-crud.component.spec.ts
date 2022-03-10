import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TelefoneCrudComponent } from './telefone-crud.component';

describe('ProductCrudComponent', () => {
  let component: TelefoneCrudComponent;
  let fixture: ComponentFixture<TelefoneCrudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TelefoneCrudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TelefoneCrudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
