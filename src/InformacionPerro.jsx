import { ModalFormulario } from "./ModalFormulario";
export function InformacionPerro({ perro }){

    var perroObjeto = perro;
    return(

        <><div class="offcanvas offcanvas-start" id={perroObjeto.name}>
            <div class="offcanvas-header">
                <h1 class="offcanvas-title">{perroObjeto.name}</h1>
                <button type="button" class="btn-close" data-bs-dismiss="offcanvas"></button>
            </div>
            <div class="offcanvas-body">
                <p>{perroObjeto.description}</p>
                <p>{perroObjeto.age.number} {perroObjeto.age.type}</p>
                <p><a class="btn btn-outline-info" href={perroObjeto.ubicacion}>{perroObjeto.location.city}, {perroObjeto.location.state}</a></p>
                <p>{perroObjeto.gender}</p>
                <button class="btn btn-secondary" data-bs-toggle="modal" data-bs-target="#myModal" type="button">MAS INFORMACION</button>
            </div>
        </div>
        <ModalFormulario key={perroObjeto} perro = {perroObjeto} /></>
        
        
    );

}