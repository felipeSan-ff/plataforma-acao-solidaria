import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoacaoCadastroComponent } from './doacao-cadastro.component';

describe('DoacaoCadastroComponent', () => {
  let component: DoacaoCadastroComponent;
  let fixture: ComponentFixture<DoacaoCadastroComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DoacaoCadastroComponent]
    });
    fixture = TestBed.createComponent(DoacaoCadastroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
