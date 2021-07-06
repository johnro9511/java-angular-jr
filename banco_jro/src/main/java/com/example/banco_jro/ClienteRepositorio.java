package com.example.banco_jro;

import java.util.List;
import org.springframework.data.repository.Repository;

/**
 *
 * @author juan_
 */

public interface ClienteRepositorio extends Repository<Cliente, String>{
    List<Cliente>findAll();// buscar todo
    Cliente findByRfc(String rfc);// select debe poner el nombre By + Columna
    Cliente save(Cliente c);// guardar datos
    void delete(Cliente c);// eliminar datos
}//ClienteRepositorio
