import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {

  emailDigitado: string = '';
  senhaDigitada: any = '';


  resultado: string = '';
  dadosLogin: any[] = [];



  onButtonClick(){
    this.dadosLogin.push({
    email: this.emailDigitado,
    senha: this.senhaDigitada
  });
  console.log(this.dadosLogin)
  

  }
}
