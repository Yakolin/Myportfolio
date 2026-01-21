import slugcatImg from "../assets/img/profile-slugcat.png";
export default function Profile() {
    return (
        <div className="profile">
            <div className="profile-specs"> 
                <div className="item">
                <h1 className="subtitle" > Sobre mi </h1>
                <img src={slugcatImg} alt="Yaco" style={{alignItems: "left", width: "80%"}}/>
                </div>
                
            </div>
            <br></br>
            <div className="profile-bio">
                <p style={{textAlign: "left"}}>
                    Soy estudiante en la Facultad de Ingenieria Universidad de Buenos Aires, estoy fuertemente interesado en el mundo del 
                    desarrollo de software, robotica, inteligencia artificial y desarrollo de videojuegos.
                    <br></br>
                    <br></br>
                    Actualmente estoy tratando de mejorar como profesional y busco oportunidades para crecer y adquirir experiencia en los campos que mas me interesan.
                    <br></br>
                    <br></br>
                    Me considero una persona proactiva, con muchas ganas de aprender y enfrentar nuevos desafios en ambientes laborales o de equipo.
                    <br></br>
                    <br></br>
                    A continuacion les mostrare algunos de mis proyectos y mi avance en la carrera. 
                </p>
            </div>
            
        </div>
    )
}

export {Profile};