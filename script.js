var noticias = [];
var nomes = [];

function cadastraNoticia(){

    // Pegar o que foi escrito
    var noticia_digitada;
    noticia_digitada = document.getElementById("inputNoticia").value;

    // pegar a notícia
    var nome_digitado;
    nome_digitado = document.getElementById("inputNome").value;

    // Verifica se os campos estão vazios e emite uma mensagem de erro se for o caso
    if(noticia_digitada == "" || nome_digitado == ""){
        alert("Ops, você deixou alguns campos vazios. Preencha-os corretamente.");
        return;
    }
    // Adiciona as notícias e os nomes 
    noticias.push(noticia_digitada);
    nomes.push(nome_digitado);

    // Cria a estrutura HTML para receber os elementos e faz um FOR para percorrer os arrays
    var html = "";
    html += "<ul>";
    for( var i = 0; i < noticias.length; i++ ){
        html += "<li> <strong>" + nomes[i] + "</strong> <br/> " + noticias[i] + "</li>";
    }
    html += "</ul>";

    // Adiciona o HTML gerado na lista de notícias
    document.getElementById("listaNoticias").innerHTML = html;

    // Mostra o array de nomes no rodapé da página
    document.getElementById("listaEscritores").innerHTML = nomes;

    // Esconde o painel de cadastro de notícias
    escondePostarNoticia();

}

function mostraPostarNoticia(){

    // Mostra a modal e o fundo preto
    document.getElementById("modal").style.display = "block";
    document.getElementById("fundoPreto").style.display = "block";

    // Limpa os campos 
    document.getElementById("inputNome").value = "";
    document.getElementById("inputNoticia").value = "";

    // Já foca o campo de nome para ser escrito assim que o modal abre
    document.getElementById("inputNome").focus();

}
function escondePostarNoticia(){
    // Esconde o modal e o fundo preto
    document.getElementById("modal").style.display = "none";
    document.getElementById("fundoPreto").style.display = "none";
}

