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