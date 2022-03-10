import { Component, OnInit } from '@angular/core';
import { TelefoneService } from '../telefone.service';
import { Router } from '@angular/router';
import { Telefone } from '../telefone.model';

@Component({
  selector: 'app-telefone-create',
  templateUrl: './telefone-create.component.html',
  styleUrls: ['./telefone-create.component.css']
})
export class TelefoneCreateComponent implements OnInit {

  constructor(private telefoneService: TelefoneService,
    private router: Router) { }

    telefone: Telefone = {
      numeroTelefone: '',
      tipoTelefone: null
    }


  ngOnInit(): void {
   
  }

  creatProduct(){
      this.telefoneService.createPhone(this.telefone).subscribe(() => {
      this.telefoneService.showMessage('Telefone Criado!')
      this.router.navigate(['/telefones'])
    })
  }

  cancel(){
    this.router.navigate(['/telefones'])
  }
  

}
