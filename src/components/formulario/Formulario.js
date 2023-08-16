import "./Formulario.css"
import CampoTexto from "../campotexto"
const Formulario = () =>{
    return <section className="formulario">
        <form>
            <h2>Rellena el formulario para crear el colaborador.</h2>
           <CampoTexto titulo="Nombre" placeholder="Ingresar nombre"/>
           <CampoTexto titulo="Puesto" placeholder="Ingresar puesto"/>
           <CampoTexto titulo="Foto" placeholder="Ingresar enlace de foto"/>
           <CampoTexto titulo="Equipo" placeholder="Seleccionar equipo"/>
        </form>
    </section>
}

export default Formulario