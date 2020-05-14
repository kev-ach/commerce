import React, { useState } from 'react';

const Toto = props => {

  const [surname, setName] = useState('Kevin');
  const btnReponseToto = props.leState.messageMaman !== null ? (<button onClick={props.reponseDeToto}>Réponse</button>) : (<button disabled>Réponse</button>);

  return(
    <div>
      <h2>Bonjour {surname} {props.name} !</h2>
      {btnReponseToto}
      <p>{props.leState.messageToto}</p>
    </div>
  )
}

export default Toto;
