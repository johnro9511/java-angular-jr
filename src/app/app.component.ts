import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BANCO JRO';

 constructor(private router:Router){ }

  Listar(){// ver todos los clientes
    this.router.navigate(["listar"])
  }

  Nuevo(){// agregar nvo. cliente
    this.router.navigate(["add"])
  }
}
