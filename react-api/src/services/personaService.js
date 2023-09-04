
const API_URL = "http://localhost:8080/personas";

export async function getAllPersonas() {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data
}

export async function savePersona(persona) {
    await fetch(API_URL, {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body:JSON.stringify(persona)
    })
}