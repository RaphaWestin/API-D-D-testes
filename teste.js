
async function fetchAPI(){
    const response = await fetch("https://www.dnd5eapi.co/api/classes/wizard")
    const json = await response.json();
    const nomeClasse = document.querySelector("h1");
    nomeClasse.innerText = json.name;
    const skills = document.querySelector("ul");
    json.proficiency_choices[0].from.forEach(skill => {
        skills.innerHTML += `<li>${skill.name}</li>`
    })
    
    // const skill2 = document.querySelector(".skill2");
    // const skill3 = document.querySelector(".skill3");
    // const skill4 = document.querySelector(".skill4");
    // skill1.innerText = json.proficiency_choices[0].from[0].name;
    // skill2.innerText = json.proficiency_choices[0].from[1].name;
    // skill3.innerText = json.proficiency_choices[0].from[2].name;
    // skill4.innerText = json.proficiency_choices[0].from[3].name;
}

fetchAPI();
