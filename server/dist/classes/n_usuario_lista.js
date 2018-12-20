"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class NUsuariosLista {
    constructor() {
        this.lista = [];
    }
    // definimos funciones que administraran a los usuarios
    agregar(nusuario) {
        this.lista.push(nusuario);
        console.log("[NUsuarioLista|Agregar] Usuario agregado");
        console.log("[NUsuarioLista|Agregar] Nueva lista de usuarios => ", this.lista);
    }
    getLista() {
        return this.lista; //esto debisdo a que la propiedad lista es privada
    }
    updateNombre(id, nombre) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                usuario.nombre = nombre;
                break;
            }
        }
        console.log("[NUsuarioLista|updateNombre] Usuario actualizado: ");
        console.log("[NUsuarioLista|updateNombre] Nueva lista de usuarios: ", this.lista);
    }
    deleteUsuario(id) {
        // this.lista = this.lista.filter((usuario)=>{ //que hace de for o foreach
        //     if(usuario.id !== id){
        //         return usuario;
        //     }
        // });
        this.lista = this.lista.filter(usuario => usuario.id !== id);
        console.log("[NUsuarioLista|deleteUsuario] Usuario eliminado");
        console.log("[NUsuarioLista|deleteUsuario] Nueva lista de usuarios => ", this.lista);
    }
    getUsuario(id) {
        for (let usuario of this.lista) {
            if (usuario.id === id) {
                return usuario;
            }
        }
        console.log("[NUsuarioLista|getUsuario] No se encontró usuario");
    }
}
exports.NUsuariosLista = NUsuariosLista;
