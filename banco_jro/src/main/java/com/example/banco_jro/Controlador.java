package com.example.banco_jro;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

/**
 *
 * @author JUAN RODRIGO
 */

@CrossOrigin(origins = "http://localhost:4200", maxAge = 3600)
@RestController 
@RequestMapping({"/clientes"})
public class Controlador {
    @Autowired
    ClienteService service;
    
    @GetMapping
    public List<Cliente> listar(){
        return service.listar();// obtiene array de datos *from
    }//listar()
    
    @PostMapping
    public Cliente agregar(@RequestBody Cliente c){
        return service.add(c);
    }//agregar()
    
}//Controlador
