import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from '../../Service/service.service';
import { Cliente } from 'src/app/Modelo/Cliente';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {
 	clientes ?: Cliente[];
  constructor(private service:ServiceService, private router:Router) { }

  ngOnInit(): void{// mostrar clientes
  	this.service.getClientes()
  	.subscribe(data=>{
  		this.clientes=data; 
  		})
  }

  Editar(cliente : Cliente): void{// editar cliente
    let name1:string = cliente.rfc as string;
    console.log("cliente edit: "+ name1);
    localStorage.setItem("rfc", name1);
    this.router.navigate(["edit"]);
  }// editar

  Delete(cliente : Cliente){
    this.service.deleteCliente(cliente)
    .subscribe(data=>{
      console.log("esto se va eliminar: "+ data);
      // this.clientes=this.clientes.filter(c=>c!==cliente); 
      alert("CLIENTE ELIMINADO...!!");
      location.reload();// refrescar pagina
    })
  }// Delete cliente

}// ListarComponent
