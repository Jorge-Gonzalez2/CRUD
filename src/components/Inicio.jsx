export default function Inicio({setVista}){
    return(
        <div className="card">
          <div className="card-header">
            Bienvenida
          </div>
          <div className="card-body">
            <h5 className="card-title">¡Hola!</h5>
            <p className="card-text">¡Te damos la bienvenida!<br/>
              Explora este proyecto desarrollado en React, donde podrás interactuar con un<br/> 
              sistema CRUD completo para gestionar información en tiempo real.</p>
            <a onClick={() => setVista("registro")} className="btn btn-primary">Ir a Registrarse</a>
          </div>
        </div>
    )
}