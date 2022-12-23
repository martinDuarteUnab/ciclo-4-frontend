const BASE_URL = "http://129.213.188.180:8080/"


export async function listaAgendas() {
    const options = { method: 'GET' };
    const res = await fetch(BASE_URL + 'citas', options);
    return await res.json();
};

export async function guardarAgenda(agenda) {
    const options = {
        method: 'POST',
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(agenda)
    };
    const res = await fetch(BASE_URL+"citas", options);
    return await res.json();
};



export async function findAllMedicos() {
    const res = await fetch(BASE_URL+"medicos");
    return await res.json();
};

export async function findAgendaById(id) {
    const res = await fetch(BASE_URL+"citas/"+id);
    return await res.json();
};

export async function existPacienteByNdocumento(id) {
    const res = await fetch(BASE_URL+"paciente/existe/query?identificacion="+id);
    return await res.json();
};

export async function findPacienteByNdocumento(identificacion) {
    const res = await fetch(BASE_URL+"paciente/identificacion/"+identificacion);
    return await res.json();
};

export async function listPacientes() {
    const res = await fetch(BASE_URL+"paciente");
    return await res.json();
}

export async function findPacienteById(id) {
    
    const res = await fetch(BASE_URL + "paciente/"+id);
    return await res.json();
}

export async function deletePacienteById(id) {
    const options = { method: "DELETE" }
    const res = await fetch(BASE_URL +"paciente/"+ id, options);
    return await res.text();
}

export async function savePaciente(paciente) {
    const options = {
        method: "POST",
        headers:{"Content-type":"application/json"},
        body:JSON.stringify(paciente)
    }
    const res = await fetch(BASE_URL+"paciente/", options);
    return await res.text();
}