package com.example.banco_jro;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author juan_
 */

public interface ClienteRepositorio extends Repository<Cliente, Integer>{
    List<Cliente>findAll();// buscar todo
    // Cliente findOne(String rfc);// select 1
    Cliente save(Cliente c);// guardar datos
    void delete(Cliente c);// eliminar datos
}//ClienteRepositorio
