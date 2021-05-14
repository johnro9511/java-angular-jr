package com.example.banco_jro;

import java.util.List;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

/**
 *
 * @author juan_
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
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Cliente add(Cliente c) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Cliente edit(Cliente c) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }

    @Override
    public Cliente delete(String rfc) {
        throw new UnsupportedOperationException("Not supported yet."); //To change body of generated methods, choose Tools | Templates.
    }
    
}// ClienteServiceImp
