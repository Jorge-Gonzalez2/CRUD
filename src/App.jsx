import { useState, useEffect } from 'react';
import './App.css';
import './index.css';
import Actualizar from './components/Actualizar';
import Registro from './components/Registro';
import Lista from './components/Lista';
import Navbar from './components/Navbar';
import Inicio from './components/Inicio';

function App() {

  /* LOGICA ENTRE MENUS */
  const [vista, setVista] = useState("menu");
  const [vistaActualizar, setVistaActualizar] = useState("neutral")

  /* LISTA DE ESTUDIANTES */
  const [estudiantes, setEstudiantes] = useState(() => {
    const localData = localStorage.getItem("estudiantes");
    return localData ? JSON.parse(localData) : [];
  });

  /* MODIFICADOR */
  useEffect(() => {
    localStorage.setItem("estudiantes", JSON.stringify(estudiantes));
  }, [estudiantes]);

  /* VARIABLES */
  const [rut, setRut] = useState("");
  const [nombre, setNombre] = useState("");
  const [apellido, setApellido] = useState("");
  const [edad, setEdad] = useState("");
  const [carrera, setCarrera] = useState("");
  const [promedio, setPromedio] = useState("");
  const [matricula, setMatricula] = useState(false);
  
  /* VARIABLES PARA ACTUALIZAR */
  const [alumnoBuscado, setAlumnoBuscado] = useState("");
  const [alumnoSeleccionado, setAlumnoSeleccionado] = useState(null);

  /* FUNCION PARA AGREGAR ESTUDIANTES */
  const AgregarAlumno = () => {

    if (rut.trim() === "" || rut.trim().length !== 10) {
    alert("Por favor, ingrese un RUT correcto.");
    return;
    }

    if (nombre.trim()=== ""){
      alert("Porfavor rellene su nombre")
      return;
    }

    if (apellido.trim()=== ""){
      alert("Porfavor rellene su apellido")
      return;
    }

    if (edad<18||edad>100){
      alert("ingrese una edad sobre 18 años")
      return;
    }

    if (carrera === "") {
    alert("Por favor, seleccione una carrera.");
    return;
    }
    if (promedio<1.0 || promedio>7.0){
      alert("ingrese un promedio valido")
      return;
    }

    let nuevoId = 1;
    while (estudiantes.some(estudiante => estudiante.id === nuevoId)) {
        nuevoId++; 
    }
    const nuevoAlumno = {
      id: nuevoId,
      rut,
      nombre,
      apellido,
      edad,
      carrera,
      promedio,
      matricula
    };

    setEstudiantes([...estudiantes, nuevoAlumno]);

    setRut("");
    setNombre("");
    setApellido("");
    setEdad("");
    setCarrera("");
    setPromedio("");
    
    alert("¡Estudiante postulado con exito!");
    setVista("lista");
  };

  /* FUNCION PARA ELIMINAR */
  const EliminarAlumno = (idEliminar) => {
    const listaActualizada = estudiantes.filter(alumno => alumno.id !== idEliminar);
    setEstudiantes(listaActualizada);
  };

  /* FUNCION PARA EDITAR */
  const AlumnoLista = (idActualizar) => {
    const alumnoEncontrado = estudiantes.find(est => est.id === idActualizar);
    setAlumnoSeleccionado(alumnoEncontrado);
    setVistaActualizar("encontrado");
    setVista("actualizar");
  };

  return (
    <>
      <Navbar setVista={setVista} vista={vista} />
      <main>
        {vista === "menu" && <Inicio setVista={setVista}/>}

        {vista === "registro" && 
          <Registro 
            setVista={setVista} 
            AgregarAlumno={AgregarAlumno} 
            rut={rut} setRut={setRut} 
            nombre={nombre} setNombre={setNombre}
            apellido={apellido} setApellido={setApellido}
            edad={edad} setEdad={setEdad}
            carrera={carrera} setCarrera={setCarrera}
            promedio={promedio} setPromedio={setPromedio}
          />
        }

        {vista === "actualizar" &&
          <Actualizar
            alumnoBuscado={alumnoBuscado}
            setAlumnoBuscado={setAlumnoBuscado}
            alumnoSeleccionado={alumnoSeleccionado}
            setAlumnoSeleccionado={setAlumnoSeleccionado}
            vistaActualizar={vistaActualizar}
            setVistaActualizar={setVistaActualizar}
            estudiantes={estudiantes}
            setEstudiantes={setEstudiantes}
            setVista={setVista}
          />
        }

        {vista === "lista" && 
          <Lista
            estudiantes={estudiantes}
            EliminarAlumno={EliminarAlumno}
            AlumnoLista={AlumnoLista}
          />
        }
      </main>
    </>
  );
}

export default App;