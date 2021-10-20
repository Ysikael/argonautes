import React, { useState, useEffect } from "react";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import firebase from "./utils/firebaseConfig";
import Main from "./components/Main";

const header = {
  textAlign: 'center',
  padding: '2em',
  backgroundColor: '#f4f4f4',
  marginBottom: '4em',
}
const footer = {
  height: '50px',
  backgroundColor: '#f76c6c',
  marginTop:'8em',
}
const baseline = {
  color: 'white',
  fontFamily: 'Roboto',
  lineHeight:'50px',
  marginTop: '2em',
}

const App = () => {
  const [isSignedIn, setIsSignedIn] = useState(false);

  const uiConfig = {
    signInFlow: "popup",
    signInOptions: [
      firebase.auth.GoogleAuthProvider.PROVIDER_ID,
      firebase.auth.EmailAuthProvider.PROVIDER_ID,
    ],
    callbacks: {
      signInSuccess: () => false,
    },
  };

  useEffect(() => {
    firebase.auth().onAuthStateChanged((user) => {
      // !! ensure boolean
      setIsSignedIn(!!user);
      console.log(user);
    });
  }, []);

  return (
    <div className="App" style={{textAlign: 'center'}}>
      {isSignedIn ? (
        <Main />
      ) : (
        <div>
          <header style={header}>                                                                                           
               <h1 style={{fontsize: '2.5em', color: 'black', fontFamily: 'Roboto'}}>
               <img style={{maxWidth: '96px', marginRight:'10px'}} src="https://www.wildcodeschool.com/assets/logo_main-e4f3f744c8e717f1b7df3858dce55a86c63d4766d5d9a7f454250145f097c2fe.png" alt="Wild Code School logo" />
           Les Argonautes</h1>                                                            
          </header>
          <h4 style={{fontFamily:'Roboto', color:'#f76c6c', marginBottom:'2em'}}>Connectez-vous</h4>
          <StyledFirebaseAuth
            uiConfig={uiConfig}
            firebaseAuth={firebase.auth()}
          />
          <div style={footer}>
            <p style={baseline}>Réalisé par Krystel Menot dans le cadre d'une admission à la WCS</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default App;
