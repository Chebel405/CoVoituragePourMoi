import axios from 'axios';



// Remplacez cela par l'URL de votre backend ????

//const API_BASE_URL = 'http://localhost:8080/api/login';
const API_BASE_URL = 'http://localhost:5000';

const instance = axios.create({
    baseURL: API_BASE_URL,
});


// const LoginFormService = {
//     login: async (formData) => {
//         try {
//             const response = await instance.post('/login', formData);
//             return response.data;
//         } catch (error) {
//             console.error('Erreur lors de la connexion:', error);
//             throw error;
//         }
//     },
// };

const simulateServerValidation = async (values) => {
    try {
        // Simuler une requête asynchrone vers le serveur (json-server)
        const response = await instance.get('/users');
        const users = response.data;

        // Vérifier si les informations d'identification sont valides
        const isValidCredentials = users.some(user => user.email === values.email && user.password === values.password);

        return isValidCredentials;
    } catch (error) {
        console.error('Erreur lors de la simulation de la validation côté serveur:', error);
        return false;
    }
};

const LoginFormService = {
    login: async (formData) => {
        try {
            // Remplacez cette ligne par la simulation de validation côté serveur
            const isValidCredentials = await simulateServerValidation(formData);

            if (isValidCredentials) {
                console.log('Connexion réussie !');
                // Effectuer les actions nécessaires après une connexion réussie
            } else {
                console.log('Informations d\'identification invalides.');
            }

            return isValidCredentials; // Vous pouvez également retourner d'autres informations si nécessaire
        } catch (error) {
            console.error('Erreur lors de la connexion:', error);
            throw error;
        }
    },
};
export default LoginFormService;
