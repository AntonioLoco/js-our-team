/*
Utilizzando i dati forniti, creare un array di oggetti per rappresentare i membri del team.
Ogni membro è caratterizzato dalle seguenti informazioni: nome, ruolo e foto.

Wayne Barnett	Founder & CEO	        wayne-barnett-founder-ceo.jpg
Angela Caroll	Chief Editor	        angela-caroll-chief-editor.jpg
Walter Gordon	Office Manager	        walter-gordon-office-manager.jpg
Angela Lopez	Social Media Manager	angela-lopez-social-media-manager.jpg
Scott Estrada	Developer	            scott-estrada-developer.jpg
Barbara Ramos	Graphic Designer	    barbara-ramos-graphic-designer.jpg


BONUS 2:
Organizzare i singoli membri in card/schede. Se non vi sentite particolarmente creativi, potete prendere uno spunto dallo screenshot allegato.
*/


const cardsElement = document.querySelector(".row");
console.log(cardsElement);

//MILESTONE 0:
//Creare l’array di oggetti con le informazioni fornite.
let teamMembers = [
    {
        name: "Wayne Barnett",
        roleCompany: "Founder & CEO",
        srcPhoto: "wayne-barnett-founder-ceo.jpg"
    },
    {
        name: "Angela Caroll",
        roleCompany: "Chief Editor",
        srcPhoto: "angela-caroll-chief-editor.jpg"
    },
    {
        name: "Walter Gordon",
        roleCompany: "Office Manager",
        srcPhoto: "walter-gordon-office-manager.jpg"
    },
    {
        name: "Angela Lopez",
        roleCompany: "Social Media Manager",
        srcPhoto: "angela-lopez-social-media-manager.jpg"
    },
    {
        name: "Scott Estrada",
        roleCompany: "Developer",
        srcPhoto: "scott-estrada-developer.jpg"
    },
    {
        name: "Barbara Ramos",
        roleCompany: "Graphic Designer",
        srcPhoto: "barbara-ramos-graphic-designer.jpg"
    }
]

//MILESTONE 1:
//Stampare su console le informazioni di nome, ruolo e la stringa della foto
console.log(teamMembers);
for(let i = 0; i < teamMembers.length; i++){
    let thisMember = teamMembers[i];

    for(let key in thisMember){
        console.log(`${key}: ${thisMember[key]}`);
    }
}

//MILESTONE 2:
//Stampare le stesse informazioni su DOM sottoforma di stringhe
for(let i = 0; i < teamMembers.length; i++){
    let thisMember = teamMembers[i];

    // const card = `
    //     <div class="card">
    //         <h2>Nome: ${thisMember.name}</h2>
    //         <h4>Ruolo nell'azienda: ${thisMember.roleCompany}</h4>
    //         <p>Src immagine: ${thisMember.srcPhoto}</p>
    //     </div>
    // `;
    
    //BONUS 1:
    //Trasformare la stringa foto in una immagine effettiva
    const card = `
        <div class="card">
            <h2>Nome: ${thisMember.name}</h2>
            <h4>Ruolo nell'azienda: ${thisMember.roleCompany}</h4>
            <img src="img/${thisMember.srcPhoto}" alt="Photo ${thisMember.name}">
        </div>
    `;
    cardsElement.innerHTML += card;
}


