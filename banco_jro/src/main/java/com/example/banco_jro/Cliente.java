package com.example.banco_jro;

import javax.persistence.*;

/**
 *
 * @author juan_
 */

@Entity
@Table (name="cliente")

public class Cliente {
    // @Id
    // @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Id
    @Column
    private String rfc;
    @Column
    private String nom_cli;
    @Column
    private String direccion;
    @Column
    private String fec_nac;
    @Column
    private int estado;

    public String getRfc() {
        return rfc;
    }

    public void setRfc(String rfc) {
        this.rfc = rfc;
    }

    public String getNom_cli() {
        return nom_cli;
    }

    public void setNom_cli(String nom_cli) {
        this.nom_cli = nom_cli;
    }

    public String getDireccion() {
        return direccion;
    }

    public void setDireccion(String direccion) {
        this.direccion = direccion;
    }

    public String getFec_nac() {
        return fec_nac;
    }

    public void setFecnac(String fec_nac) {
        this.fec_nac = fec_nac;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }   
    
}// Cliente
