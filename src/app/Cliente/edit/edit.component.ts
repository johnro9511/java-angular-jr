import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  public cliente : Cliente= new Cliente;
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void {
  	this.Editar();
  }

  Editar(){// editar cliente
  	console.log("Estoy en Editar html");
    let rfc=localStorage.getItem("rfc");
  	// let rfc = JSON.parse(localStorage.getItem('rfc') || '{}');// parsear String
  	console.log("despues de rfc: " + rfc);
  	this.service.getClienteId(""+rfc)
  	.subscribe(data=>{
  		this.cliente=data;
  		})
  }// editar

  Actualizar(cliente : Cliente):void{
  	this.service.updateCliente(cliente)
  	.subscribe(data=>{
  		console.log(data);
  		this.cliente = data;
  		alert("SE ACTUALIZÓ CON ÉXITO...!!");
  		this.router.navigate(["listar"]);
  		})
  }// Act cliente

}// EditComponent
