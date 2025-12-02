import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PaginaInicialComponent } from './pagina-inicial/pagina-inicial.component';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CadastroComponent } from './cadastro/cadastro.component';
import { DoacaoCadastroComponent } from './doacao-cadastro/doacao-cadastro.component';
import { FormularioSolicitacaoComponent } from './formulario-solicitacao/formulario-solicitacao.component';

@NgModule({
  declarations: [
    AppComponent,
    PaginaInicialComponent,
    LoginComponent,
    CadastroComponent,
    DoacaoCadastroComponent,
    FormularioSolicitacaoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
