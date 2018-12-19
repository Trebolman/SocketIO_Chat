import { NUsuario } from "./n_usuario";

export class NUsuariosLista{
    private lista:NUsuario[] = [];
    constructor(){}

    // definimos funciones que administraran a los usuarios
    public agregar(nusuario:NUsuario){
        this.lista.push(nusuario);
        console.log("[NUsuarioLista|Agregar] Usuario agregado");
        console.log("[NUsuarioLista|Agregar] Nueva lista de usuarios => ",this.lista);
    }

    public getLista(){
        return this.lista; //esto debisdo a que la propiedad lista es privada
    }

    public updateNombre(id:string, nombre:string){
        for(let usuario of this.lista){
            if(usuario.id === id){
                usuario.nombre = nombre;
                break;
            }
        }
        console.log("[NUsuarioLista|updateNombre] Usuario actualizado: ");
        console.log("[NUsuarioLista|updateNombre] Nueva lista de usuarios: ",this.lista);
    }

    public deleteUsuario(id:string){
        // this.lista = this.lista.filter((usuario)=>{ //que hace de for o foreach
        //     if(usuario.id !== id){
        //         return usuario;
        //     }
        // });
        this.lista = this.lista.filter(usuario => usuario.id !== id);

        console.log("[NUsuarioLista|deleteUsuario] Usuario eliminado");
        console.log("[NUsuarioLista|deleteUsuario] Nueva lista de usuarios => ",this.lista);
    }

    public getUsuario(id:string){
        for(let usuario of this.lista){
            if(usuario.id === id){
                return usuario;
            }
        }
        console.log("[NUsuarioLista|getUsuario] No se encontró usuario")
    }
}   