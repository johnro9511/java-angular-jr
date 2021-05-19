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

  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void { }

  Guardar(cliente ?: Cliente){
  	this.service.createCliente(cliente)
  	.subscribe(data=>{
  		console.log(data);
  		alert("SE AGREGÓ CON ÉXITO...!!");
  		this.router.navigate(["listar"]);
  		})
  }

}
