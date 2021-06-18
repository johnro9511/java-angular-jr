import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  public cliente:Cliente= new Cliente;

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void { }

  Guardar():void{
  	this.service.createCliente(this.cliente)
  	.subscribe(data=>{
  		console.log(data);
  		alert("SE AGREGÓ CON ÉXITO...!!");
  		this.router.navigate(["listar"]);
  		});
  }// Guardar

}// AddComponent
