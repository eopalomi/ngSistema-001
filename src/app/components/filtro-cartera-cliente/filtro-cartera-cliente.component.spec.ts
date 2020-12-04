import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltroCarteraClienteComponent } from './filtro-cartera-cliente.component';

describe('FiltroCarteraClienteComponent', () => {
  let component: FiltroCarteraClienteComponent;
  let fixture: ComponentFixture<FiltroCarteraClienteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltroCarteraClienteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltroCarteraClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
