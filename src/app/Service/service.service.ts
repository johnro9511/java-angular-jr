import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Cliente } from '../Modelo/Cliente';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
	constructor(private http:HttpClient) {  }

  	Url='http://localhost:8000/banco_jro/clientes';

  	getClientes(){
  		return this.http.get<Cliente[]>(this.Url);
  	}//getClientes
}//ServiceService
