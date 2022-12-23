import React, { useEffect, useState } from "react";
import { Button, Col, Container, Row, Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { deletePacienteById, listPacientes } from "../server/Server";

function TablaPaciente() {
    const [listaPacientes, setListaPacientes] = useState([]);

    async function listarPacientes() {
        await listPacientes()
            .then(data => {
                setListaPacientes(data);
            })
            .catch(err => console.error(err));
    }

    useEffect(() => {
        listarPacientes();
    }, [setListaPacientes])

    async function eliminarPaciente(id) {
        let respuesta = window.confirm("Seguro de Eliminar?");
        if (respuesta) {
            const response = await deletePacienteById(id);
            alert(response);
            setListaPacientes(listaPacientes.filter(paciente=>paciente.id !== id))
        }
    }

    let contadorPacientes = 0;
    return (
        <Container>
             <Row className="my-3">
        <Col><h1>Pacientes</h1></Col>
        <Col xs={6}></Col>
        <Col><Link to="/pacientes/registrar"><Button variant="success">Registrar</Button></Link></Col>
      </Row>

        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>Nombre</th>
                    <th>Apellido</th>
                    <th>F. Nacimiento</th>
                    <th>Ciudad</th>
                    <th>Detalle</th>
                    <th>Eliminar</th>
                </tr>
            </thead>
            <tbody>
                {
                    listaPacientes.map((pacientes) => (
                        <tr key={pacientes.id}>
                            <td>{++contadorPacientes}</td>
                            <td>{pacientes.nombre}</td>
                            <td>{pacientes.apellido}</td>
                            <td>{pacientes.fechanac}</td>
                            <td>{pacientes.direccion !== null ? pacientes.direccion.ciudad : "null"}</td>
                            <td><Link to={`/pacientes/${pacientes.id}`}>Ver Detalle</Link></td>
                            <td><Button variant="danger" onClick={() => eliminarPaciente(pacientes.id)}>Eliminar</Button></td>
                        </tr>
                    ))
                }
            </tbody>
        </Table>
        </Container>

    )
}
export { TablaPaciente }