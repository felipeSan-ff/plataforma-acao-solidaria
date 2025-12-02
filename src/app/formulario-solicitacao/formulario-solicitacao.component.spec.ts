import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioSolicitacaoComponent } from './formulario-solicitacao.component';

describe('FormularioSolicitacaoComponent', () => {
  let component: FormularioSolicitacaoComponent;
  let fixture: ComponentFixture<FormularioSolicitacaoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [FormularioSolicitacaoComponent]
    });
    fixture = TestBed.createComponent(FormularioSolicitacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
