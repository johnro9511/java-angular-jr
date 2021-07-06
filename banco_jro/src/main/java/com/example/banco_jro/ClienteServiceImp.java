package com.example.banco_jro;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author JUAN RODRIGO
 */
@Service
public class ClienteServiceImp implements ClienteService{
    @Autowired 
    private ClienteRepositorio repositorio;
    
    @Override
    public List<Cliente> listar() {
        return repositorio.findAll();// listar todos los elementos
    }// listar

    @Override
    public Cliente listarId(String rfc) {
        return repositorio.findByRfc(rfc);
    }

    @Override
    public Cliente add(Cliente c) {
        return repositorio.save(c);
    }

    @Override
    public Cliente edit(Cliente c) {
        return repositorio.save(c);  
    }

    @Override
    public Cliente delete(String rfc) {
        Cliente c = repositorio.findByRfc(rfc);
        if(c != null){
            repositorio.delete(c);
        }
        return c;
    }
    
}// ClienteServiceImp
