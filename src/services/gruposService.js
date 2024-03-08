import axios from 'axios';

const API_URL = 'http://localhost:3000/grupos';

export const getGrupos = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data;

    }catch (error) {
        console.error('Error al obtener los grupos', error);
    }
}

export const saveGrupo = async (data) => {
    try {
        const response = await axios.post(API_URL, data);
        return response.data;
    }catch (error) {
        console.error('Error al guardar el grupo', error);
    }
}