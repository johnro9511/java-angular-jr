package com.example.banco_jro;

import java.util.List;

/**
 *
 * @author juan_
 */

public interface ClienteService {
    List<Cliente>listar();
    Cliente listarId(String rfc);
    Cliente add(Cliente c);
    Cliente edit(Cliente c);
    Cliente delete(String rfc);
}// ClienteService
