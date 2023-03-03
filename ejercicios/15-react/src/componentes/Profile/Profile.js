//-----------------------
//Ejercicio en clase N°1
//-----------------------
/*
export default function Profile() {
  return (
    <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />
  );
}
*/

//-----------------------
//Ejercicio en clase N°2
//-----------------------
/*
export default function Profile() {
    return <img src="https://i.imgur.com/lICfvbD.jpg" alt="Aklilu Lemma" />
}
*/

//-----------------------
//Ejercicio en clase N°3
//-----------------------
/*
function Profile() {
	return (
		<img src="https://i.imgur.com/QIrZWGIs.jpg" alt="Alan L. Hart" />
	);
}

let App = function Gallerry() {
	return (
		<section>
			<h1>Amazing scientists</h1>
			<profile />
			<profile />
			<profile />
		</section>
	);
}
*/
//El error es que los "<profile />" estan escritos con minuscula y tiene que tener la primer letra en mayuscula "<Profile />"

//-----------------------
//Ejercicio en clase N°4
//-----------------------

import React from 'react'

const Profile = () => {
  return (
    <div>
        <h1>Hola Mundo de React!</h1>
        <p>Este es mi primer componente :D</p>
    </div>
  )
}

export default Profile