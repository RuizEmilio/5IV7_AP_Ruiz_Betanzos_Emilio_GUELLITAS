import perrosLista from './perros.json';
import {PerroTarjeta} from "./PerroTarjeta";
import { InformacionPerro } from "./InformacionPerro";
import estilos from "./PerrosTabla.module.css";

export function TablaPerros(){

    return (  // LOS OBJETOS LOS RECORRES CON MAP, Y ESTO ES UN FOR EACH Y DEVUELVE SUS CARACTERISTICAS

        <ul className = {estilos.tablaPerro}>
            {perrosLista.map((perro) =>(
                <>
                    <PerroTarjeta key={perro.name} perro={perro}>
                        {perro.name}
                    </PerroTarjeta>
                    <InformacionPerro key={perro.name} perro = {perro} />
                </>
            ))}
        </ul>
    
    );

}