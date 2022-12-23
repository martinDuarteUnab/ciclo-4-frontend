const BASE_URL = "http://localhost:8080/"


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

export async function eliminarAgendaPorId(id) {
    const options = {method: 'DELETE'};
    const res = await fetch(BASE_URL+"citas/"+id, options);
    return await res.text();
};