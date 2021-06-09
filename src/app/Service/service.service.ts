import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
	private Url: string;
	// private Urlx: string;
	
	/* CORRER APLICACION EN SERVIDOR */
	// ng serve --host 192.168.1.1 --disableHostCheck
	
	constructor(private http:HttpClient) { 
		this.Url='http://localhost:8080/banco_jro/clientes';
		// this.Urlx='http://192.168.1.1:8080/banco_jro/add_cliente';
	}

  	// Urlx = 'http://localhost:8080/banco_jro/add_cliente';
  	
  	public getClientes(){
  		return this.http.get<Cliente[]>(this.Url);
  	}//getClientes

  	public createCliente(cliente ?: Cliente){
  		console.log(this.http.post<Cliente>(this.Url,cliente));
  		return this.http.post<Cliente>(this.Url,cliente);
  	}//getClientes
}//ServiceService
