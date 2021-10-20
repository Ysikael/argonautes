
import React, { useState } from 'react';
import firebase from '../utils/firebaseConfig';

const Create = () => {
    const [argonaute, setArgonaute] = useState('');

    const createName = () => {
        const namesDB = firebase.database().ref("namesDB")
        const name = {
            argonaute:argonaute,
        };

        namesDB.push(name);

        setArgonaute('');
    }

    return (
        <div className="create">
            <h4 style={{fontFamily: 'Roboto', fontWeight: 'normal', marginBottom:'10px'}}>Nom de l'Argonaute</h4>
            <div className="form">
                <input style={{marginBottom: '4em', marginRight:'5px'}}
                type="text"
                placeholder="Charalampos"
                value={argonaute}
                onChange={(e) => setArgonaute(e.target.value)}
                />
                <button onClick={createName}>Envoyer</button>
            </div>
            
        </div>
    );
};

export default Create;


