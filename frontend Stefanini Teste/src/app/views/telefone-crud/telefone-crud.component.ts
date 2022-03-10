import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HeaderService } from 'src/app/components/template/header/header.service';

@Component({
  selector: 'app-telefone-crud',
  templateUrl: './telefone-crud.component.html',
  styleUrls: ['./telefone-crud.component.css']
})
export class TelefoneCrudComponent implements OnInit {

  constructor(private router: Router, private headerService: HeaderService) { 
    headerService.headerData = {
      title: 'Cadastro de Telefones',
      icon: 'phone',
      routeUrl: '/telefones'
    }
   }

  ngOnInit(): void {
  }

  navigateToProductCreats(){
    this.router.navigate(['/telefones/create'])
  }

}
