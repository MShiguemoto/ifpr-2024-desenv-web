document.addEventListener('DOMContentLoaded',()=>{
    verificarTema();
    // verificarLocalizacaoStorage();
});

function verificarTema(){
    const temaArmazenado =  localStorage.getItem('tema');
    if(temaArmazenado){
        document.body.setAttribute
        ('data-tema', temaArmazenado);
    }
}

function alterarTema(){
    const tema = 
        document.body.getAttribute("data-tema");
    const novoTema = tema == 'dark' ? 'light' : 'dark';
    document.body.setAttribute("data-tema",novoTema);
    localStorage.setItem('tema', novoTema);
}
function copiar(){
    const curriculo = 
    document.getElementById("mostrarCurriculo").textContent;
    navigator.clipboard.writeText(curriculo).then(()=>{
        alert("Conteúdo copiado para a área de transferência");
    }).catch(error=>{
        console.error("erro ao copiar", error);
        alert("Erro ao copiar o conteúdo");
    })
}
// function verificarLocalizacaoStorage(){
//     const localizacao = localStorage.getItem('localizacao');
//     if(localizacao){
//         document.getElementById("localizacao").value 
//         = localizacao;
//     }else{
//         getLocalizacao();
//     }
// }

// function getLocalizacao(){
//     if(navigator.geolocation){
//         navigator.geolocation.getCurrentPosition
//         (position=>{
//             const lat = position.coords.latitude;
//             const long = position.coords.longitude;  
    
//             fetch(`https://geocode.xyz/${lat},${long}?geoit=json`)
//                 .then(response=>response.json())
//                 .then(data=>{
//                     const localizacao = 
//                     data.region || data.city || `${lat},${long}`;
//                     document.getElementById
//                     ("localizacao").value=localizacao;
//                     localStorage.setItem("localizacao",localizacao);
//                 }).catch(error=>{
//                     console.error("Alguma coisa deu errado",error);
//                 });
//         });
//     }
// }



// function gerarCurriculo(){
//     const nome = document.getElementById("nome").value;
//     const email = document.getElementById("email").value;
//     //fazer para todos os campos
//     const curriculo = {nome, email};
//     console.log(curriculo);
//     localStorage.setItem("curriculo", JSON.stringify(curriculo));
//     apresentarCurriculo(curriculo);
//     vibrar();
// }

// function apresentarCurriculo(data){
//     const template = 
//     document.getElementById('templateCurriculo')
//     .content.cloneNode(true);
//     template.querySelector(".nome").textContent = data.nome;
//     template.querySelector(".email").textContent = data.email;
//     //fazer de todos os campos
//     const mostrarCurriculo = 
//     document.getElementById("mostrarCurriculo");
//     mostrarCurriculo.innerHTML='';
//     mostrarCurriculo.appendChild(template);

// }

// function lerCurriculo(){
//     const curriculo  = JSON.parse(
//         localStorage.getItem("curriculo"));
//     if(curriculo){
//         apresentarCurriculo(curriculo);
//     }
// }

// function vibrar() {
//     if (navigator.vibrate) {
//         navigator.vibrate(500);
//     }
// }

// function copiar(){
//     const curriculo = 
//     document.getElementById("mostrarCurriculo").textContent;
//     navigator.clipboard.writeText(curriculo).then(()=>{
//         alert("Conteúdo copiado para a área de transferência");
//     }).catch(error=>{
//         console.error("erro ao copiar", error);
//         alert("Erro ao copiar o conteúdo");
//     })
// }