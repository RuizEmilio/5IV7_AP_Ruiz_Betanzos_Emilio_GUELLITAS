import estilos from "./PerroTarjeta.module.css";
export function PerroTarjeta({perro}){

    var idDiv = '#' + perro.name;
    return(

        <li className = {estilos.tresPerros}>
            <div className = "btn btn-primary" data-bs-toggle="offcanvas" data-bs-target = {idDiv}>
                <img className = {estilos.perroImagen} src = {perro.pictures[0]} alt = {perro} />
                <div>
                    {perro.name}
                </div>
            </div>
        </li>

    );

}