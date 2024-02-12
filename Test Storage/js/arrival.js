document.addEventListener("DOMContentLoaded",(event) => {

    let token1 = sessionStorage.getItem("token");

    console.log(token1)

//Controllo sul valore del token di sessione che nel caso sia sbagliato reindirizza automaticamente alla pagina di login
//Inserire questo controllo associato alla lifespan di una sessione (Es. 10 minuti) permette di 

//Check on the value of the session token which, if it is wrong, automatically redirects to the login page
//Inserting this control associated with the lifespan of a session (e.g. 10 minutes) allows you to
    if (token1 != "blkslmk8fx18pp6ytpf9kz7jxcz31v"){

        location.href="index.html";

    }


}); //Fine DOM
//End DOMContentLoaded