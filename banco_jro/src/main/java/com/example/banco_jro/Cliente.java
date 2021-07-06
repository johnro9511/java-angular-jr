package com.example.banco_jro;

import com.fasterxml.jackson.annotation.JsonFormat;
import java.util.Date;
import javax.persistence.*;

/**
 *
 * @author JUAN RODRIGO
 */

@Entity
@Table (name="cliente")

public class Cliente {
    @Id
    // @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column
    private String rfc;
    @Column
    private String nom_cli;
    @Column
    private String direccion;
    @Column
    @Temporal(TemporalType.DATE)// cast a Fecha
    @JsonFormat(pattern = "yyyy-MM-dd", timezone = "America/Mexico_City")// zona horaria

    private Date fec_nac;
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

    public Date getFec_nac() {
        System.out.println("fecha get: "+ fec_nac);
        return fec_nac;
    }

    public void setFec_nac(Date fec_nac) {
        System.out.println("fecha may: "+ fec_nac);
        this.fec_nac = fec_nac;
    }

    public int getEstado() {
        return estado;
    }

    public void setEstado(int estado) {
        this.estado = estado;
    }   
    
}// Cliente
