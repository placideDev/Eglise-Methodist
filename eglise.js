// function clickme(){
//     let liste = document.getElementById("navbars");
//         liste.style.display="block";
// }

function closeme() {
  let navbars = document.getElementById("navbars");
  navbars.style.display = "none";
};

function clickme() {
  let navbar = document.getElementById("navbars");
  navbar.style.display = "block";
}

function superhero() {
  let superhero = document.getElementById('hero')
  superhero.style.display = 'block';
}


$(document).ready(function () {
  $('#calendar').evoCalendar({

    language: "fr",
    sidebarDisplayDefault: "false",

    calendarEvents: [
      {
        id: 'event1', // Event's ID (required)
        name: "New Year", // Event name (required)
        date: "January/1/2022", // Event date (required)
        description: "fete de nouvel an ",
        type: "holiday", // Event type (required)
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'event2', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "January/2/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyMonth: false // Same event every year (optional)
      },

      {
        id: 'event3', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "january/9/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyMonth: true // Same event every year (optional)
      },

      {
        id: 'event4', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "january/16/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyMonth: true // Same event every year (optional)
      },
      {
        id: 'event5', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "january/23/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'event6', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "january/30/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'event7', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "January/7/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'event8', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "January/14/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'event9', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "January/21/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'event10', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "January/28/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },



      //   fevrier

      {
        id: 'fev1', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "Février/6/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'fev2', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "Février/13/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'fev3', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "Février/20/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'fev4', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "Février/27/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },





      {
        id: 'event7', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "Février/5/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'event8', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "Février/12/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'event7', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "Février/19/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'event7', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "Février/26/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'mercedi5', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "Février/2/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'fev6', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "Février/9/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'fev7', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "Février/16/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'fev8', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "Février/23/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },


      // vendredi fev

      {
        id: 'fev9', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "Février/4/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'fev10', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "Février/11/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'fev11', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "Février/18/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'fev12', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "Fevrier/25/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },



      //   mars

      {
        id: 'mars1', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "Mars/6/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'mars2', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "Mars/13/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'mars3', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "Mars/20/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'mars4', // Event's ID (required)
        name: "Dimanche", // Event name (required)
        date: "Mars/27/2022", // Event date (required)
        description: "1er Culte de 7h00 à 1h00 fr-Ang 2ème Culte de 10h00 à 13h00 🔴 francais Anglais",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      //   mercredi

      {
        id: 'mars5', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "mars/2/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'mars6', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "mars/9/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'mars7', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "mars/16/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'mars8', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "mars/23/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'mars9', // Event's ID (required)
        name: "Mercredi", // Event name (required)
        date: "mars/30/2022", // Event date (required)
        description: " Culte du soir de 17h00 à 18h00 🔴 français english",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      // vendredi

      {
        id: 'mars10', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "Mars/4/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'mars11', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "Mars/11/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },

      {
        id: 'mars12', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "Mars/18/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },
      {
        id: 'mars13', // Event's ID (required)
        name: "Vendredi", // Event name (required)
        date: "Mars/25/2022", // Event date (required)
        description: "Intercession et Étude Biblique de 17h à 19h30",
        type: "holiday", // Event type (required) 
        everyYear: true // Same event every year (optional)
      },




      // suis fatigue par ici


    ]
  });


});

// fini le calendrier