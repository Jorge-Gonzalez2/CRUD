export default function Registro({
  setVista,
  AgregarAlumno,
  rut,
  setRut,
  nombre,
  setNombre,
  apellido,
  setApellido,
  edad,
  setEdad,
  promedio,
  setPromedio,
  carrera,
  setCarrera
}){
    return(
        <div className="container mt-4">
          <h1 className="mb-4">Envío postulación</h1>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Nombre</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Juan..."
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Apellido</label>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Perez..."
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">RUT</label>
              <input 
                type="text"
                className="form-control" 
                minLength="10"
                maxLength="10"
                placeholder="12345678-9"
                value={rut}
                onChange={(e) => setRut(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Edad</label>
              <input 
                type="number"
                className="form-control" 
                placeholder="+18"
                value={edad}
                onChange={(e) => setEdad(e.target.value)}
              />
            </div>
          </div>

          <div className="row">
            <div className="col-md-6 mb-3">
              <label className="form-label">Promedio</label>
              <input
                type="number"
                step="0.1"
                className="form-control"
                placeholder="7.0"
                value={promedio}
                onChange={(e) => setPromedio(e.target.value)}
              />
            </div>
            <div className="col-md-6 mb-3">
              <label className="form-label">Carrera:</label>
              <select 
                className="form-select" 
                value={carrera}
                onChange={(e) => setCarrera(e.target.value)}
              >
                <option value="" disabled>Seleccionar Carrera</option>
                <option value="analista programador">Analista Programador</option>
                <option value="administrador de empresas">Administrador de empresas</option>
                <option value="mecanica industrial">Mecanica industrial</option>
                <option value="robotica">Robotica</option>
              </select>
            </div>
          </div>

          <div className="row mt-3">
            <div className="col-12">
              <button 
                type="button" 
                className="btn btn-outline-secondary"
                onClick={AgregarAlumno}
              >
                Registrarse
              </button>
            </div>
          </div>

        </div>
    )
}