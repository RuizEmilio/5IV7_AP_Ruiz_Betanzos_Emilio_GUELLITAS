export function ModalFormulario({ perro }){

    var informacionContacto = "EL CONTACTO ES " + perro.contacto + "\n PERRO " + perro.name + "\n FOTO " + perro.pictures[1];

    return (

        <div class="modal" id = 'myModal'>
                <div class="modal-dialog modal-sm">
                    <div class="modal-content">
                        <div class="modal-header">
                            <h4 class="modal-title">CONTACTANOS</h4>
                            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
                        </div>
                        <div class="modal-body">
                            <div class="input-group mb-3">
                                <span class="input-group-text">EMAIL</span>
                                <input type="email" class="form-control" id = 'CorreoCliente'/>
                                <form action="https://formsubmit.co/" method="post" id='formularioDatos'>
                                    <input type="text" name="DATOS" readOnly='readonly' value= {informacionContacto}/>
                                    <input type="submit" value="ENVIAR" />
                                </form>
                            </div>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-danger" data-bs-dismiss="modal">CERRAR</button>
                        </div>

                    </div>
                </div>
            </div>

    );

}