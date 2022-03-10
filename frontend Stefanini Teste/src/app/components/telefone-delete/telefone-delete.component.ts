import { Component, OnInit } from '@angular/core';
import { TelefoneService } from '../telefone/telefone.service';
import { Telefone } from '../telefone/telefone.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-telefone-delete',
  templateUrl: './telefone-delete.component.html',
  styleUrls: ['./telefone-delete.component.css']
})
export class TelefoneDeleteComponent implements OnInit {

  constructor(private productService: TelefoneService, private router: Router, private route: ActivatedRoute) { }

  telefone: Telefone 


  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')
    this.productService.readPhoneById(id).subscribe(telefone =>{
      this.telefone = telefone
    })
  }

  deletePhone(){
    this.productService.deletePhone(this.telefone.id).subscribe(produtc =>{
      this.productService.showMessageDelete("Telefone Excluido!")
      this.router.navigate(["/telefones"])
    })
  }

  cancel(){
    this.router.navigate(["/telefones"])
  }

}
