import { Component, OnInit } from '@angular/core';
import { TelefoneService } from '../telefone/telefone.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Telefone } from '../telefone/telefone.model';

@Component({
  selector: 'app-telefone-update',
  templateUrl: './telefone-update.component.html',
  styleUrls: ['./telefone-update.component.css']
})
export class TelefoneUpdateComponent implements OnInit {

  constructor(private telefoneService: TelefoneService, private router: Router, private route: ActivatedRoute) { }

  telefone: Telefone = {
    numeroTelefone: '',
    tipoTelefone: null
  }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.telefoneService.readPhoneById(id).subscribe(telefone => {
      this.telefone = telefone
    })
  }

  updatePhone(){
    this.telefoneService.updatePhone(this.telefone).subscribe(telefone =>{
      this.telefoneService.showMessage('Telefone Atualizado com sucesso!')
      this.router.navigate(['/telefones'])
    })
  }

  cancel(){
    this.router.navigate(['/telefones'])
  }
}
