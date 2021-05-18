    var somaUsuario = 0;
    var somaComputador = 0;
    var usuarioDado1 = 0;
    var usuarioDado2 = 0;
    var computadorDado1 = 0;
    var computadorDado2 = 0;
    var vencedor = "";

    function lancarDados() {
        usuarioDado1 = Math.floor(Math.random() * (6 + 1) + 1);
        usuarioDado2 = Math.floor(Math.random() * (6 + 1) + 1);
        somaUsuario = usuarioDado1 + usuarioDado2;
        
        computadorDado1 = Math.floor(Math.random() * (6 + 1) + 1);
        computadorDado2 = Math.floor(Math.random() * (6 + 1) + 1);
        somaComputador = computadorDado1 + computadorDado2;

        if (somaUsuario > somaComputador) {
            mostrarResultado = true;
            vencedor = "usuario";
        } else if (somaUsuario < somaComputador) {
            mostrarResultado = true;
            vencedor = "computador";
        } else {
            mostrarResultado = true;
            vencedor = "empate";
        }
    }

    function gerarImagemDados(numero) {
        switch(numero) {
            case 1:
                document.write("<img src=\"images/Lado1.png\" style=\"margin-right: 20px;\" alt=\"\"");
                break;
            case 2:
                document.write("<img src=\"images/Lado2.png\" style=\"margin-right: 20px;\" alt=\"\"");
                break;
            case 3:
                document.write("<img src=\"images/Lado3.png\" style=\"margin-right: 20px;\" alt=\"\"");
                break;
            case 4:
                document.write("<img src=\"images/Lado4.png\" style=\"margin-right: 20px;\" alt=\"\"");
                break;
            case 5:
                document.write("<img src=\"images/Lado5.png\" style=\"margin-right: 20px;\" alt=\"\"");
                break;
            case 6:
                document.write("<img src=\"images/Lado6.png\" style=\"margin-right: 20px;\" alt=\"\"");
                break;
            default:
                document.write("");
                break;
        }
    }

    function gerarUsuarioHTML() {
        document.write("<div class=\"div-usuario\">");
        document.write("<h1 style=\"color: white;\">Dados do Usuario</h1>");
        gerarImagemDados(usuarioDado1);
        document.write("<br>");
        gerarImagemDados(usuarioDado2);
        document.write("<br>");
        document.write("<h2 style=\"color: white;\">Resultado "+ somaUsuario + "</h2>");
        document.write('</div>');
    }

    function gerarResultadoHTML() {
        
        document.write("<div class=\"div-resultado\">");
        document.write("<br>");
        switch(vencedor) {
            case "usuario":
                document.write("<p id=\"resultado\" value=\"\">Você venceu</p>");
                break;
            case "computador":
                document.write("<p id=\"resultado\" value=\"\">Você perdeu</p>");
                break; 
            case "empate":
                document.write("<p id=\"resultado\" value=\"\">Empate</p>");
                break; 
        }
        document.write("<br>");
        document.write('</div>');
    }

    function gerarComputadorHTML() {
        
        document.write("<div class=\"div-computador\">");
        document.write("<h1 style=\"color: white;\">Dados do Computador</h1>");
        gerarImagemDados(computadorDado1);
        document.write("<br>");
        gerarImagemDados(computadorDado2);
        document.write("<br>");
        document.write("<h2 style=\"color: white;\">Resultado "+ somaComputador + "</h2>");
        document.write('</div>');
    }

    lancarDados();
    gerarUsuarioHTML();
    gerarComputadorHTML();
    