import { useState, useEffect } from 'react';
// import completitions
const rootStudyPlan = '../json/study-plan.json';
const rootStatusPlan = '../json/status-plan.json'

type Materia = {
    id: string;
    materia: string;
    creditos: number;
    categoria: string;
    level: number;
}

type MateriaStatus = {
    status: 'aprobada' | 'cursando' | 'pendiente';
    note?: number;
    date: string;
}

//Aca estoy usando una especie de api pero con el json, una forma de practicar
// En vez de solicitarlo con una uri lo hago en la ruta del json
export function Career() {

    // Posible modularizacion, tampoco es WOW que complejo peeeeero... 
    const [materiasCarrera, setMateriasCarrera] = useState<Array<Materia>>([]);
    useEffect(() => {
        fetch(rootStudyPlan)
            .then((res) => res.json())
            .then((data: Array<Materia>) => {
                setMateriasCarrera(data)
            })
            .catch((err) => {
                console.log("Error cargando el json de Materias" + err);
            })
    }, []);

    const [materiasStatus, setMateriasStatus] = useState<Array<MateriaStatus>>([]);
    useEffect(() => {
        fetch(rootStatusPlan)
            .then((res) => res.json())
            .then((res: Array<MateriaStatus>) => {
                setMateriasStatus(res)
            })
            .catch((err) => {
                console.log("Error cargando el json de Materias Status" + err);
            })
    }, [])


    return (
        <div className="career">
            <h2 style={{ textShadow: "blue 1px 0 10px" }}> Mi Trayectoria Academica en la Facultad </h2>

            <p>Aqui podrias agregar informacion sobre tu trayectoria profesional, estudios, experiencias laborales, proyectos destacados, habilidades adquiridas, certificaciones y cualquier otro detalle relevante que quieras compartir sobre tu carrera.</p>
        </div>
    )
}
export default { Career };