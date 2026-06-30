import { useState } from 'react';

export default function ModalEliminar({ estudiante, onEliminar }) {
    const [mostrarModal, setMostrarModal] = useState(false);

    const confirmarEliminacion = () => {
        onEliminar(estudiante.id);
        setMostrarModal(false);
    };

    return (
        <>
            <button 
                type="button" 
                className="btn btn-danger btn-sm" 
                onClick={() => setMostrarModal(true)}
            >
                Eliminar
            </button>

            {mostrarModal && (
                <div className="modal d-block" style={{ backgroundColor: 'rgba(0,0,0,0.5)' }} role="dialog">
                    <div className="modal-dialog modal-dialog-centered modal-sm" style={{ maxWidth: '350px' }}>
                        <div className="modal-content shadow">
                            <div className="modal-header border-0 pb-0">
                                <h6 className="modal-title text-danger fw-bold">¿Confirmar eliminacion?</h6>
                                <button 
                                    type="button" 
                                    className="btn-close" 
                                    onClick={() => setMostrarModal(false)}
                                ></button>
                            </div>
                            <div className="modal-body py-2">
                                <p className="small text-muted mb-0">
                                    Estas a punto de eliminar permanentemente a <strong>{estudiante.nombre} {estudiante.apellido}</strong>. Esta accion no se puede deshacer.
                                </p>
                            </div>
                            <div className="modal-footer border-0 pt-0 d-flex justify-content-end gap-2">
                                <button 
                                    type="button" 
                                    className="btn btn-light btn-sm px-3" 
                                    onClick={() => setMostrarModal(false)}
                                >
                                    Cancelar
                                </button>
                                <button 
                                    type="button" 
                                    className="btn btn-danger btn-sm px-3" 
                                    onClick={confirmarEliminacion}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}