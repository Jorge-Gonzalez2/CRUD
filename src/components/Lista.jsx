import ModalEliminar from "./ModalEliminar";

export default function Lista({ 
    estudiantes,
    EliminarAlumno,
    AlumnoLista
}) {
  return (
    <div className="mt-4">
      <div className="card shadow-sm">
        <div className="card-header bg-primary text-white">
          <h4 className="mb-0">Lista de Alumnos Postulantes</h4>
        </div>
        <div className="card-body">
          {estudiantes.length === 0 ? (
            <div className="alert alert-info mb-0 text-center" role="alert">
              No hay alumnos registrados en este momento.
            </div>
          ) : (
            <div className="table-responsive">
              <table className="table table-hover align-middle">
                <thead className="table-light">
                  <tr>
                    <th>ID</th>
                    <th>RUT</th>
                    <th>Nombre</th>
                    <th>Edad</th>
                    <th>Carrera</th>
                    <th>Matricula</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {estudiantes.map((alumno) => (
                    <tr key={alumno.id}>
                      <td><strong>{alumno.id}</strong></td>
                      <td><strong>{alumno.rut}</strong></td>
                      <td>{alumno.nombre} {alumno.apellido}</td>
                      <td>{alumno.edad} años</td>
                      <td>
                        <span className="badge bg-secondary text-capitalize">
                          {alumno.carrera}
                        </span>
                      </td>
                      <td>
                        {alumno.matricula ? (
                          <span className="text-success">● Activa</span>
                        ) : (
                          <span className="text-danger">● Inactiva</span>
                        )}
                      </td>
                      <td className="text-center">

                        <button 
                        className="btn btn-warning btn-sm me-2"
                        onClick={() => AlumnoLista(alumno.id)}>
                          Editar
                        </button>

                        <ModalEliminar
                            estudiante={alumno} 
                            onEliminar={EliminarAlumno} 
                        />

                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          
        </div>
      </div>
    </div>
  );
}