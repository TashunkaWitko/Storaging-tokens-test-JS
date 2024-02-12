document.addEventListener("DOMContentLoaded", (event) => {

  let sendButton =  document.querySelector(".sending")

  //Best practice ci dicono che i token di sessione si ottengono con una fetch/chiamata API al server che restituisce un token appena generato, questo poi viene utilizzato per la durta della sessione
  
  //Best practices tell us that session tokens are obtained with a fetch/API call to the server which returns a newly generated token, which is then used for the duration of the session
  let token = "blkslmk8fx18pp6ytpf9kz7jxcz31v"


  //Evento click sul button della form

  //Click event on the form button
  sendButton.addEventListener("click", () =>{

   let form = document.querySelector("form");

   var Username = form.inputbox1.value;

   var Password = form.inputbox2.value;

   //Check specifico manuale sui dati, di base si implementerebbe una regular expression associata ud un controllo al database fatto dalla parte server 

   // Specific manual check on the data, basically a regular expression associated with a database check done by the server would be implemented
   if(Username!= "Micheal" || Password != "SDR6gwfu7tg#-"){


    //Display del messaggio di errore

    //Error message display
    document.querySelector(".alert-danger").style.display="block";

    //Alert box del browser

    //Browser alert box
    alert("Username o Password errati");
   }


   //Questo metodo non è sicuro in quanto lascia scoperti per un eventuale attacco XSS, L'implementazione corretta consiste in un una request ad un API che genera un token che a sua volta non viene mai messo in chiaro ma associato ad un'ulteriore funzione (INCAPSULAMENTO dei dati).
   
   //This method is not safe as it leaves open for a possible XSS attack. The correct implementation consists of a request to an API which generates a token which in turn is never made clear but associated with a further function (ENCAPSULATION of data).
   else{
    location.href = "arrival.html";
    sessionStorage.setItem("token",token);
   }

  })




}); //Fine DOM 
//End DOMContentLoaded