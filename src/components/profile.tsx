import slugcatImg from "../assets/img/profile-slugcat.png";
export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-specs">
                <div className="item">
                    <h1 className="subtitle" > Sobre mi </h1>
                    <img src={slugcatImg} alt="Yaco" style={{ alignItems: "left", width: "80%" }} />
                </div>

            </div>
            <br></br>
            <div className="profile-bio">
                <p style={{ textAlign: "left" }}>
                    Soy estudiante en la Facultad de Ingenieria Universidad de Buenos Aires, estoy fuertemente interesado en el mundo del
                    Desarrollo de software, Fintech, Robotica, Inteligencia Artificial y Desarrollo de Videojuegos como hobby.
                    <br></br>
                    <br></br>
                    Tengo manejo en diversos lenguajes de programacion y tecnologias, reforzados por mi rol como colaborador en la Facultad ademas del desarrollo de proyectos personales.
                    <br></br>
                    <br></br>
                    Manejo conceptos de programacion orientada a objetos, estructuras de datos, algoritmos y patrones de diseño.
                    <br></br>
                    <br></br>
                    Actualmente estoy tratando de mejorar como profesional y busco oportunidades para crecer y adquirir experiencia en los campos que mas me interesan.
                    <br></br>
                    <br></br>
                    Me considero una persona proactiva, con ganas de aprender constantemente y enfrentar nuevos desafios con equipos de trabajo.
                    <br></br>
                </p>
            </div>

        </div>
    )
}

export { Profile };