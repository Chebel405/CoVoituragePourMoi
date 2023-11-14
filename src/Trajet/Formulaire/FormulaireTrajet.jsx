// import React, { useState } from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import { CreateTrajet } from './../../Service/CreateTrajet';
// import './../../../public/styles/FormulaireTrajet.module.scss';



// const TrajetSchema = Yup.object().shape({
//   departLieu: Yup.string().required('Champ obligatoire'),
//   arriveeLieu: Yup.string().required('Champ obligatoire'),
//   departDateTime: Yup.date().required('Champ obligatoire'),
//   departHour: Yup.string()
//     .matches(/^(0[0-9]|1[0-9]|2[0-3]):[0-5][0-9]$/, 'L\'heure doit être au format "HH:mm"')
//     .required('Champ obligatoire'),
//   // departMinute: Yup.string()
//   //   .matches(/^[0-5][0-9]$/, 'Les minutes doivent être entre 00 et 59')
//   //   .required('Champ obligatoire'),
//   seats: Yup.number().required('Champ obligatoire'),
//   smallBags: Yup.number().required('Champ obligatoire'),
//   bigBags: Yup.number().required('Champ obligatoire'),
//   silence: Yup.boolean().required('Champ obligatoire'),
//   musiqueGenre: Yup.string().required('Champ obligatoire'),
//   carBrand: Yup.string().required('Champ obligatoire'),
//   carPicture: Yup.string().required('Champ obligatoire'),
//   creationDate: Yup.date().required('Champ obligatoire'),
//   modificationDate: Yup.date().required('Champ obligatoire'),
// });

// const FormulaireTrajet = ({ onFormSubmit, isSubmitted }) => {

//   const [isFormValid, setIsFormValid] = useState(false);

//   const handleSubmit = async (values, { setSubmitting }) => {
//     try {
//       // Utilisez le service CreateTrajet pour envoyer les données au backend
//       const response = await CreateTrajet(values);
//       // Réinitialisez le formulaire ou effectuez d'autres actions en cas de succès
//       // console.log('Trajet créé avec succès :', response);
//       onFormSubmit(response);

//       setDisabled(true);

//       // Réinitialisez le formulaire ou effectuez d'autres actions en cas de succès
//       setSubmitting(false);
//     } catch (error) {
//       // Gérez les erreurs en cas d'échec de la création du trajet
//       console.error('Erreur lors de la création du trajet :', error);
//     }

//     console.log('Valeurs soumises :', values);
//   };

//   return (
//     <div>
//       <Formik
//         initialValues={{
//           departLieu: '',
//           arriveeLieu: '',
//           departDateTime: '',
//           departHour: '',
//           departMinute: '',
//           seats: '',
//           smallBags: '',
//           bigBags: '',
//           silence: false,
//           musiqueGenre: '',
//           carBrand: '',
//           carPicture: '',
//           creationDate: '',
//           modificationDate: '',
//         }}
//         validationSchema={TrajetSchema}
//         onSubmit={handleSubmit}
//       >
//         {({ isSubmitting, dirty }) => (
//           <Form>
//             {/* {trajetData.map((trajet, index) => (
//               <div key={index}> */}
//             <div>
//               <label>Lieu de départ</label>
//               <Field
//                 type="text"
//                 name="departLieu"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="departLieu" component="div" className="error" />
//             </div>
//             <div>
//               <label>Lieu d'arrivée</label>
//               <Field
//                 type="text"
//                 name="arriveeLieu"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="arriveeLieu" component="div" className="error" />
//             </div>
//             <div>
//               <label>Départ Date/Time</label>
//               <Field
//                 type="datetime-local"
//                 name="departDateTime"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="departDateTime" component="div" className="error" />
//             </div>
//             <div>
//               <label>Heure de départ</label>
//               <div>
//                 {/* <Field as="select" name="departHour" disabled={isSubmitted}>
//                   <option value="">Sélectionnez une heure</option>
//                   {heuresDeDepart.map((heure) => (
//                     <option key={heure} value={heure}>
//                       {heure}
//                     </option>
//                   ))}
//                 </Field> */}
//                 <Field
//                   type="time"
//                   name="departHour"
//                   disabled={isSubmitted}
//                 />
//                 <ErrorMessage name="departHour" component="div" className="error" />
//               </div>
//             </div>
//             {/* <div> */}
//             {/* <label>Minute de départ</label> */}
//             {/* <div> */}
//             {/* <Field as="select" name="departMinute" disabled={isSubmitted}>
//                   <option value="">Sélectionnez les minutes</option>
//                   {minutesDeDepart.map((minute) => (
//                     <option key={minute} value={minute}>
//                       {minute}
//                     </option>
//                   ))}
//                 </Field> */}
//             {/* <Field
//                   type="number"
//                   name="departMinute"
//                   min="0"
//                   max="59"
//                   disabled={isSubmitted}
//                 />
//                 <ErrorMessage name="departMinute" component="div" className="error" />
//               </div> */}
//             {/* </div> */}
//             <div>
//               <label>Seats</label>
//               <Field
//                 type="number"
//                 name="seats"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="seats" component="div" className="error" />
//             </div>
//             <div>
//               <label>Small Bags</label>
//               <Field
//                 type="number"
//                 name="smallBags"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="smallBags" component="div" className="error" />
//             </div>
//             <div>
//               <label>Big Bags</label>
//               <Field
//                 type="number"
//                 name="bigBags"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="bigBags" component="div" className="error" />
//             </div>
//             <div>
//               <label>Silence</label>
//               <Field
//                 type="checkbox"
//                 name="silence"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="silence" component="div" className="error" />
//             </div>
//             <div>
//               <label>Music Genre</label>
//               <div className="two-columns">
//                 <div className="column">
//                   <label>
//                     <Field
//                       type="radio"
//                       name="musiqueGenre"
//                       value="Pop"
//                       disabled={isSubmitted}
//                     />
//                     Pop
//                   </label>
//                   <label>
//                     <Field
//                       type="radio"
//                       name="musiqueGenre"
//                       value="Rock"
//                       disabled={isSubmitted}
//                     />
//                     Rock
//                   </label>
//                   <label>
//                     <Field
//                       type="radio"
//                       name="musiqueGenre"
//                       value="Rap"
//                       disabled={isSubmitted}
//                     />
//                     Rap
//                   </label>
//                 </div>
//                 <div className="column">
//                   <label>
//                     <Field
//                       type="radio"
//                       name="musiqueGenre"
//                       value="Variété"
//                       disabled={isSubmitted}
//                     />
//                     Variété
//                   </label>
//                   <label>
//                     <Field
//                       type="radio"
//                       name="musiqueGenre"
//                       value="Electro"
//                       disabled={isSubmitted}
//                     />
//                     Electro
//                   </label>
//                   <label>
//                     <Field
//                       type="radio"
//                       name="musiqueGenre"
//                       value="Indifférent"
//                       disabled={isSubmitted}
//                     />
//                     Indifférent
//                   </label>
//                 </div>
//               </div>
//               <ErrorMessage name="musiqueGenre" component="div" className="error" />
//             </div>


//             <div>
//               <label>Car Brand</label>
//               <Field
//                 type="text"
//                 name="carBrand"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="carBrand" component="div" className="error" />
//             </div>
//             <div>
//               <label>Car Picture</label>
//               <Field
//                 type="text"
//                 name="carPicture"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="carPicture" component="div" className="error" />
//             </div>
//             <div>
//               <label>Creation Date</label>
//               <Field
//                 type="date"
//                 name="creationDate"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="creationDate" component="div" className="error" />
//             </div>
//             <div>
//               <label>Modification Date</label>
//               <Field
//                 type="date"
//                 name="modificationDate"
//                 disabled={isSubmitted} />
//               <ErrorMessage name="modificationDate" component="div" className="error" />
//             </div>
//             {/* </div> */}
//             {/* ))} */}
//             <button type="submit" disabled={isSubmitting || isFormValid}>
//               Soumettre
//             </button>
//           </Form>
//         )}
//       </Formik>
//     </div>
//   );
// };

// export default FormulaireTrajet;