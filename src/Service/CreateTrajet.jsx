import axios from 'axios';
import { trajetData } from '../Data/trajetData';

const API_URL = 'http://localhost:8080/api/trajets';

export const CreateTrajet = async (trajetData) => {
    try {
        const response = await axios.post(`${API_URL}/create`, trajetData);
        return response.data; // Traitez la réponse ici si nécessaire
    } catch (error) {
        throw error; // Gérez les erreurs au niveau de l'appelant
    }
};
