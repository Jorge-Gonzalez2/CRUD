import { useState, useEffect } from 'react';

export default function Actualizar({
    alumnoBuscado,
    setAlumnoBuscado,
    vistaActualizar,
    setVistaActualizar,
    estudiantes,          
    alumnoSeleccionado,   
    setAlumnoSeleccionado,
    setEstudiantes,
    setVista
}){
    const [datosForm, setDatosForm] = useState(null);

    useEffect(() => {
        if (alumnoSeleccionado) {
            setDatosForm({ ...alumnoSeleccionado });
        }
    }, [alumnoSeleccionado]);

    const gestionarBusqueda = () => {
        const encontrado = estudiantes.find(est => 
            est.id.toString() === alumnoBuscado.trim() || 
            est.rut === alumnoBuscado.trim()
        );

        if (encontrado) {
            setAlumnoSeleccionado(encontrado);
            setVistaActualizar("encontrado");
        } else {
            setAlumnoSeleccionado(null);
            setVistaActualizar("No encontrado");
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setDatosForm({
            ...datosForm,
            [name]: name === "matricula" ? (value === "true") : value
        });
    };
    
    const guardarCambios = () => {
        if (datosForm.rut.trim() === "" || datosForm.rut.trim().length !== 10) {
            alert("Por favor, ingrese un RUT correcto.");
            return;
        }

        if (datosForm.nombre.trim() === "") {
            alert("Porfavor rellene su nombre");
            return;
        }

        if (datosForm.apellido.trim() === "") {
            alert("Porfavor rellene su apellido");
            return;
        }

        if (Number(datosForm.edad) < 18 || Number(datosForm.edad) > 100) {
            alert("ingrese una edad sobre 18 años");
            return;
        }

        if (datosForm.carrera === "") {
            alert("Por favor, seleccione una carrera.");
            return;
        }

        if (Number(datosForm.promedio) < 1.0 || Number(datosForm.promedio) > 7.0) {
            alert("ingrese un promedio valido");
            return;
        }

        const listaEditada = estudiantes.map(est => 
            est.id === datosForm.id ? datosForm : est
        );

        setEstudiantes(listaEditada); 
        alert("¡Datos actualizados con exito!");
        
        setAlumnoSeleccionado(null);
        setAlumnoBuscado("");
        setVista("lista");
    };

    return(
        <div className="container mt-4" style={{ maxWidth: '600px' }}>
            <div className="card p-3 shadow-sm mb-3">
                <label className="form-label h6 text-muted">Actualizar Registro de Postulante</label>
                <div className="input-group input-group-sm">
                    <input 
                        type="text" 
                        className="form-control" 
                        placeholder="Ingrese ID o RUT..."
                        value={alumnoBuscado}
                        onChange={(e) => setAlumnoBuscado(e.target.value)}
                    />
                    <button 
                        type="button" 
                        className="btn btn-primary"
                        onClick={gestionarBusqueda} 
                    >
                        Buscar
                    </button>
                </div>
            </div>

            {vistaActualizar === "No encontrado" && (
                <div className="alert alert-danger p-2 text-center small shadow-sm" role="alert">
                    No se encontro ningun alumno con el ID o RUT ingresado.
                </div>
            )}

            {vistaActualizar === "encontrado" && alumnoSeleccionado && datosForm && (
                <div className="card p-3 shadow-sm border-warning">
                    <h5 className="text-warning mb-3 text-center">
                        Modificar Alumno: {alumnoSeleccionado.nombre} {alumnoSeleccionado.apellido}
                    </h5>
                    
                    <div className="row g-2">
                        <div className="col-sm-6">
                          <label className="form-label small mb-1">Nombre</label>
                          <input 
                            type="text" 
                            className="form-control form-control-sm" 
                            value={datosForm.nombre}
                            name='nombre'
                            onChange={handleChange}
                          />
                        </div>
                        <div className="col-sm-6">
                          <label className="form-label small mb-1">Apellido</label>
                          <input 
                            type="text" 
                            className="form-control form-control-sm" 
                            value={datosForm.apellido}
                            name='apellido'
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-sm-6">
                          <label className="form-label small mb-1">Edad</label>
                          <input 
                            type="text" 
                            className="form-control form-control-sm" 
                            value={datosForm.edad}
                            name='edad'
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-sm-6">
                          <label className="form-label small mb-1">RUT</label>
                          <input 
                            type="text" 
                            className="form-control form-control-sm" 
                            value={datosForm.rut}
                            name='rut'
                            onChange={handleChange}
                          />
                        </div>

                        <div className="col-sm-6">
                          <label className="form-label small mb-1">Promedio</label>
                          <input 
                            type="text" 
                            className="form-control form-control-sm" 
                            value={datosForm.promedio}
                            name='promedio'
                            onChange={handleChange}
                          />
                        </div>
                        
                        <div className="col-sm-6">
                            <label className="form-label small mb-1">Carrera</label>
                            <select 
                                className="form-select form-select-sm text-capitalize" 
                                value={datosForm.carrera} 
                                name='carrera'
                                onChange={handleChange}
                            >
                                <option value="analista programador">Analista Programador</option>
                                <option value="administrador de empresas">Administrador de empresas</option>
                                <option value="mecanica industrial">Mecanica industrial</option>
                                <option value="robotica">Robotica</option>
                            </select>
                        </div>

                        <div className="col-12">
                            <label className="form-label small mb-1">Estado de Matricula</label>
                            <select 
                                className="form-select form-select-sm" 
                                value={datosForm.matricula ? "true" : "false"}
                                name='matricula'
                                onChange={handleChange}
                            >
                                <option value="true">Activa</option>
                                <option value="false">Inactiva</option>
                            </select>
                        </div>
                    </div>
                    
                    <button 
                        className="btn btn-success btn-sm mt-3 w-100"
                        onClick={guardarCambios}
                    >
                        Guardar Cambios
                    </button>
                </div>
            )}
        </div>
    );
}