import React from 'react';

const TrajetPage = ({ submittedData }) => {
    return (
        <div>
            <h2>Données soumises :</h2>
            <p>Départ Date/Time: {submittedData.departDateTime}</p>
            <p>Seats: {submittedData.seats}</p>
            <p>Small Bags: {submittedData.smallBags}</p>
            <p>Big Bags: {submittedData.bigBags}</p>
            <p>Silence: {submittedData.silence}</p>
            <p>Music Genre: {submittedData.musiqueGenre}</p>
            <p>Car Brand: {submittedData.carBrand}</p>
            <p>Car Picture: {submittedData.carPicture}</p>
            <p>Creation Date: {submittedData.creationDate}</p>
            <p>Modification Date: {submittedData.modificationDate}</p>
        </div>
    );
};

export default TrajetPage;