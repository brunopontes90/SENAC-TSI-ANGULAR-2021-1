import { Cliente } from './../../model/cliente';
import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  clientes = new Array<Cliente>();

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.listar();
  }

  listar(): void{
    this.clienteService.listar().subscribe(clientes => {
      this.clientes = clientes;
    });
  }
}
