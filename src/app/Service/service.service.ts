import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Cliente } from '../Modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
	private Url: string;
	// private Urlx: string;
	
	constructor(private http:HttpClient) { 
		this.Url='http://localhost:8080/banco_jro/clientes';
		// this.Urlx='http://localhost:8080/banco_jro/add';
	}
  	
  	public getClientes(){
  		return this.http.get<Cliente[]>(this.Url);
  	}//getClientes

  	public createCliente(cliente ?: Cliente) : Observable<Cliente>{
  		console.log(this.http.post<Cliente>(this.Url,cliente));
  		return this.http.post<Cliente>(this.Url,cliente);
  	}//createCliente

  	getClienteId(rfc : String){
  		return this.http.get<Cliente>(this.Url +"/"+ rfc);
  	}// getRfc

  	updateCliente(cliente : Cliente){
  		return this.http.put<Cliente>(this.Url +"/"+ cliente.rfc,cliente);
  	}// actualizar cliente

  	deleteCliente(cliente : Cliente){
  		return this.http.delete<Cliente>(this.Url +"/"+ cliente.rfc);
  	}// borrar cliente

}//ServiceService
