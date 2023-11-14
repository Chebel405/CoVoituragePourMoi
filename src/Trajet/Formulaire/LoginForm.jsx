import React from 'react';
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as yup from 'yup';
import { Link } from 'react-router-dom';
import LoginFormService from '../../Service/LoginFormService';
import './../../../public/styles/LoginForm.module.scss';

const loginSchema = yup.object().shape({
    email: yup.string().email('Format d\'email invalide').required('Champ requis'),
    password: yup.string().required('Champ requis'),
});

const LoginForm = () => {
    const initialValues = {
        email: '',
        password: '',
    };

    const handleSubmit = async (values, { resetForm }) => {
        try {
            //Utiliser le service LoginFormService pour faire la requete POST vers le back
            const responseData = await LoginFormService.login(values);

            console.log('Réponse du Back:', responseData);

            // Reinitialiser le formulaire après une connexion reussie
            resetForm();
        } catch (error) {
            // Gérer les erreurs, ex: Afficher un mess d'error à l'utilisateur
            console.log('Erreur lors de la connexion:', error);
        }
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={loginSchema}
            onSubmit={handleSubmit}
        >
            {({ isValid, dirty }) => (
                <div className='center'>
                    <div className="encadrer-formulaire">
                        <Form className="login-form">
                            {/* Champ Email */}
                            <h1>Connectez-vous</h1>
                            <h6>Accédez à votre espace dédié.</h6>
                            <div className="center">
                                <label htmlFor="email">Email:</label>
                                <div>
                                    <Field type="text" id="email" name="email" />
                                </div>
                                <ErrorMessage name="email">
                                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                                </ErrorMessage>
                            </div>

                            {/* Champ Mot de passe */}
                            <div className="center">
                                <label htmlFor="password">Mot de passe:</label>
                                <div>
                                    <Field type="password" id="password" name="password" />
                                </div>
                                <ErrorMessage name="password">
                                    {(msg) => <div style={{ color: 'red' }}>{msg}</div>}
                                </ErrorMessage>
                            </div>


                            {/* Bouton de Connexion */}
                            <div className="center">
                                <button type="submit" disabled={!isValid || !dirty}>
                                    Se connecter
                                </button>
                            </div>


                            {/* Lien d'inscription */}
                            <p>
                                Pas encore de compte?{' '}
                                <Link to="/inscription">Inscrivez-vous</Link>
                            </p>

                            {/* Bouton Mot de passe oublié */}
                            <div className='mdpOublie'>
                                <Link to="/forget">Mot de passe oublié ?</Link>
                            </div>
                        </Form>
                    </div>
                </div>

            )}

        </Formik>
    );
};

export default LoginForm;
