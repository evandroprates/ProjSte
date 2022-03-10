import { Component, OnInit } from '@angular/core';
import { Telefone } from '../telefone.model';
import { ActivatedRoute } from '@angular/router';
import { TelefoneService } from '../telefone.service';

@Component({
  selector: 'app-telefone-read',
  templateUrl: './telefone-read.component.html',
  styleUrls: ['./telefone-read.component.css']
})
export class TelefoneReadComponent implements OnInit {

  telefones: Telefone[]
  displayedColumns = ['id', 'telefone', 'tipo', 'action']

  constructor(private productService: TelefoneService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.productService.readPhone().subscribe(telefones => {
      this.telefones = telefones
      console.log(telefones)
    })
  }

}
