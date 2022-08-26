console.log("hey world");


const cleanCepData = async () => {
    var element = document.getElementById("head");
    var child = element.lastElementChild; 
    while (child) {
        element.removeChild(child);
        child = element.lastElementChild;
    }
    var element2 = document.getElementById("response");
    var child = element2.lastElementChild; 
    while (child) {
        element2.removeChild(child);
        child = element2.lastElementChild;
    }
}

const getCepData = async (cep) => {
    cleanCepData()
    await fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(response => response.json())  
    .then(response => {

        let arrayOfHeads = Object.keys(response)

        for(let i=0; i<arrayOfHeads.length ; i++){
            var thTag = document.createElement("th");
            var text = document.createTextNode(arrayOfHeads[i]);
            thTag.appendChild(text);
            var element = document.getElementById("head");
            element.appendChild(thTag);

            var tdTag = document.createElement("td");
            var textResponse = document.createTextNode(response[arrayOfHeads[i]]);
            tdTag.appendChild(textResponse);
            var element2 = document.getElementById("response");
            element2.appendChild(tdTag);

        }

        })    
    .catch(err => console.log('Erro de solicitação', err)); 

}
