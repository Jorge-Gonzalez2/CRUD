export default function Navbar({setVista}){
    return(
        <header>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                <a className="navbar-brand">Navegador CRUD</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                    <a className="nav-link active" aria-current="page" style={{ cursor: 'pointer' }} onClick={() => setVista("menu")}>Inicio</a>
                    <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setVista("registro")}>Registro</a>
                    <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setVista("actualizar")}>Actualizar</a>
                    <a className="nav-link" style={{ cursor: 'pointer' }} onClick={() => setVista("lista")}>Lista</a>
                    </div>
                </div>
                </div>
            </nav>
            </header>
    )
}