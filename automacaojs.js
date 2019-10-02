var desataudio =0;
var flt=0.0;
falg = false;
  var botoes="";
  var bol0=false;
  var bol1=false;
  var bol2=false;
  var bol3=false;
 var alertabanho=0;
var controle = 0;
var apagar=0;
 refresh();
 refreshHora();
 refreshbotoes();
function ler(){
  if(desataudio ==0){
 if(apagar ==0){
 falar("olá,!! tudo bem..., eu sou assistente de ajuda,... minha função é lhe informar as funções dos botões... ,há quando quiser saber as funções é  só clicar na imagem internet das coisas.., do sistema que te falo o que o sistema lhe oferece.....Obrigado pela sua atenção...");
 apagar=1;
  }
  }
}
function banho()
{
  if(desataudio ==0){
  if(alertabanho ==0)
  {
    alertabanho++;
  falar("Olá!!! o chuveiro , já atingiu a temperatura de banho...,Evite desperdicio.. de água,nosso planeta agradéce.....,se consientisse!!");
  }else if(alertabanho ==1)
  {
    alertabanho++;
     falar("Olá!!, já atingiu a temperatura de banho,preciso desligar água ..,se consientisse,por favor...,vamos fazer a nossa parte, o planeta agradecea sua preocupação!!");
  }else if(alertabanho ==2)
  {
     falar("Olá!!! vou desligar o chuveiro ,você não veio tomar banho sinto muito....estou desligando!!"); 
        refreshclearsaidalampada1();
       alertabanho ++;
       
  }
  }
}
function receber0() {
    
    if(controle ==0){
       refreshsetasaidalampada();
     }
    else
    {
   refreshclearsaidalampada();
        }
   carregarbotoes();    
}
var filter=0;
var controle1 = 0;
function receber1(){ 
  if(controle1 ==0)
    {
     refreshsetasaidachuveiro();
     }else{
       refreshclearsaidachuveiro();
     }
      refreshlesaidachuveiro();
}
var controle2 = 0;
function receber2() {
    
    if(controle2 ==0){
       refreshsetasaidalampada1();
     }
    else
    {
   refreshclearsaidalampada1();
        }
      refreshlesaidalampada1();
}
var controle3 = 0;
function receber3() {
    
    if(controle3 ==0){
       refreshsetasaidalampada2();
     }
    else
    {
   refreshclearsaidalampada2();
    }
      refreshlesaidalampada2();
        
}
function circumference(r) {
  if (Number.isNaN(Number.parseFloat(r))) {
    return 0;
  }
  return parseFloat(r)
}

function refreshTemperatureC()
{
 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("temperaturec").innerHTML = this.responseText;
       flt  = circumference(this.responseText);
      if(flt >= 30.00)
      {
        banho();
      }
    }
  };
  xhttp.open("GET", "/temperaturec", true);
  xhttp.send();
  
}
function refreshHorarioBrasil()
{
 var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
      document.getElementById("horario").innerHTML = this.responseText;
    }
  };
  xhttp.open("GET", "/horario", true);
  xhttp.send();
  
}

    setInterval(ler,15000);  
    setInterval(refreshbotoes, 5000);//cada 10s
    setInterval(refreshHora, 30000);//cada 1 minuto
    setInterval(refresh, 20000);//cada 20s
    function refreshbotoes()
    {
      refreshlesaidachuveiro();
     refreshlesaidalampada();
      refreshlesaidalampada1();
     refreshlesaidalampada2();
      filter=0;
    }
     function refresh()
    {
     refreshTemperatureC();
    }
    
  function  refreshHora()
   {
      refreshHorarioBrasil();
   }
    
    
    function refreshlesaidachuveiro()
    {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada2").innerHTML = "Q.Casal:" + xmlhttp.responseText;
          var estado = xmlhttp.responseText;
          if(estado == "Ligado")
          {
           document.getElementById("evento_botao1").style.color= "red";
            document.getElementById("evento_botao1").style.background = "#FFFF00";
            document.getElementById("evento_botao1").text= "ON";
            document.getElementById("estado_lampada").text= "Q.Casal:Ligado";
            document.getElementById("img02").src = 'https://img.filipeflop.com/files/download/automacao/lampada_ligada.png';
           document.getElementById("img05").src = 'https://img.filipeflop.com/files/download/automacao/lampada_ligada.png';
            controle1=1;
          }else
          {
         document.getElementById("evento_botao1").style.background = "blue";    
         document.getElementById("evento_botao1").style.color="white";
        document.getElementById("evento_botao1").text= "OFF";
         document.getElementById("estado_lampada").text= "Q.Casal:Desligado";
         document.getElementById("img02").src = 'https://img.filipeflop.com/files/download/automacao/lampada_desligada.png';
         document.getElementById("img05").src = 'https://img.filipeflop.com/files/download/automacao/lampada_desligada.png';
         controle1=0;
          }
        }
      };
      xmlhttp.open("GET", "/lesaidachuveiro", true);
      xmlhttp.send();
    }

function refreshsetasaidachuveiro()
    {
      if(filter == 0)
      {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada2").innerHTML = "Q.Casal:"   +xmlhttp.responseText ;
        }
      };
       document.getElementById("evento_botao").style.background = "#696969";   
       document.getElementById("evento_botao").style.color="white";
       document.getElementById("evento_botao2").style.background = "#696969";   
       document.getElementById("evento_botao2").style.color="white";
       document.getElementById("evento_botao3").style.background = "#696969";   
       document.getElementById("evento_botao3").style.color="white";
      xmlhttp.open("GET", "/setasaidachuveiro", true);
      xmlhttp.send();  
       controle1=1;
       filter=1;
        falar("VOCÊ APERTOU, O BOTÃO PARA LIGAR, Á LUZ DO QUARTO, DE CASAL!!!");
    }
    }
   function refreshclearsaidachuveiro()
    {
       if(filter == 0)//filtro de tempo para o botão aquardar a resposta do serviço 
       {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada2").innerHTML = "Q.Casal:"+xmlhttp.responseText ;
        }
      };
       document.getElementById("evento_botao").style.background = "#696969";   
       document.getElementById("evento_botao").style.color="white";
       document.getElementById("evento_botao2").style.background = "#696969";   
       document.getElementById("evento_botao2").style.color="white";
       document.getElementById("evento_botao3").style.background = "#696969";   
       document.getElementById("evento_botao3").style.color="white";
      xmlhttp.open("GET", "/clearsaidachuveiro", true);
      xmlhttp.send();
        controle1=0; 
        filter =1;
         falar("VOCÊ APERTOU, O BOTÃO PARA DESLIGAR, Á LUZ DO QUARTO, DE CASAL!!!");
    }
    }
 
function refreshlesaidalampada()
    {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada3").innerHTML = "Q.Solteiro:" + xmlhttp.responseText;
          var estado = xmlhttp.responseText;
          if(estado == "Ligado")
          {
             document.getElementById("evento_botao").style.color= "red";
           document.getElementById("evento_botao").style.background = "#FFFF00";
              document.getElementById("evento_botao").text= "ON";
            document.getElementById("estado_lampada1").text= "Q.Solteiro:Ligado";
            document.getElementById("img01").src = 'https://img.filipeflop.com/files/download/automacao/lampada_ligada.png';
             document.getElementById("img06").src = 'https://img.filipeflop.com/files/download/automacao/lampada_ligada.png';
           controle=1;
          }else
          {
       document.getElementById("evento_botao").style.background = "blue";   
         document.getElementById("evento_botao").style.color="white";
        document.getElementById("evento_botao").text= "OFF";
         document.getElementById("estado_lampada1").text= "Q.Solteiro:Desligado";
         document.getElementById("img01").src = 'https://img.filipeflop.com/files/download/automacao/lampada_desligada.png';
          document.getElementById("img06").src = 'https://img.filipeflop.com/files/download/automacao/lampada_desligada.png';
        controle=0;
          }
        }
      };
      xmlhttp.open("GET", "/lesaidalampada", true);
      xmlhttp.send();
    }
    

function refreshsetasaidalampada()
    {
       if(filter == 0)
       {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada3").innerHTML = "Q.Solteiro:"   +xmlhttp.responseText ;
        }
      };
       document.getElementById("evento_botao1").style.background = "#696969";   
       document.getElementById("evento_botao1").style.color="white";
       document.getElementById("evento_botao2").style.background = "#696969";   
       document.getElementById("evento_botao2").style.color="white";
       document.getElementById("evento_botao3").style.background = "#696969";   
       document.getElementById("evento_botao3").style.color="white";
      xmlhttp.open("GET", "/setasaidalampada", true);
      xmlhttp.send();  
     controle=1;
     filter=1;
       falar("VOCÊ APERTOU, O BOTÃO PARA LIGAR, Á LUZ DO QUARTO, DE SOLTEIRO!!!");
       }
    }
   function refreshclearsaidalampada()
    {
       if(filter == 0)
       {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada3").innerHTML = "Q.Solteiro:"+xmlhttp.responseText ;
        }
      };
       document.getElementById("evento_botao1").style.background = "#696969";   
       document.getElementById("evento_botao1").style.color="white";
       document.getElementById("evento_botao2").style.background = "#696969";   
       document.getElementById("evento_botao2").style.color="white";
       document.getElementById("evento_botao3").style.background = "#696969";   
       document.getElementById("evento_botao3").style.color="white";
      xmlhttp.open("GET", "/clearsaidalampada", true);
      xmlhttp.send();
      controle=0;
      filter=1;
        falar("VOCÊ APERTOU, O BOTÃO PARA DESLIGAR, Á LUZ DO QUARTO, DE SOLTEIRO!!!");
       }
    }
    function refreshlesaidalampada1()
    {
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada6").innerHTML = "B.Chuveiro:" + xmlhttp.responseText;
          var estado = xmlhttp.responseText;
          if(estado == "Ligado")
          {
             document.getElementById("evento_botao2").style.color= "red";
           document.getElementById("evento_botao2").style.background = "#FFFF00";
              document.getElementById("evento_botao2").text= "ON";
            document.getElementById("estado_lampada4").text= "B.Chuveiro:Ligado";
            document.getElementById("img03").src = 'https://img.filipeflop.com/files/download/automacao/lampada_ligada.png';
             document.getElementById("img07").src = 'https://img.filipeflop.com/files/download/automacao/lampada_ligada.png';
           controle2=1;
          }else
          {
       document.getElementById("evento_botao2").style.background = "blue";   
         document.getElementById("evento_botao2").style.color="white";
        document.getElementById("evento_botao2").text= "OFF";
         document.getElementById("estado_lampada4").text= "B.Chuveiro:Desligado";
         document.getElementById("img03").src = 'https://img.filipeflop.com/files/download/automacao/lampada_desligada.png';
          document.getElementById("img07").src = 'https://img.filipeflop.com/files/download/automacao/lampada_desligada.png';
        controle2=0;
          }
        }
      };
      xmlhttp.open("GET", "/lesaidalampada1", true);
      xmlhttp.send();
    }
    

function refreshsetasaidalampada1()
    {
       if(filter == 0)
       {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada6").innerHTML = "R.Chuveiro:"   +xmlhttp.responseText ;
        }
      };
       document.getElementById("evento_botao1").style.background = "#696969";   
       document.getElementById("evento_botao1").style.color="white";
       document.getElementById("evento_botao").style.background = "#696969";   
       document.getElementById("evento_botao").style.color="white";
       document.getElementById("evento_botao3").style.background = "#696969";   
       document.getElementById("evento_botao3").style.color="white";
      xmlhttp.open("GET", "/setasaidalampada1", true);
      xmlhttp.send();  
     controle2=1;
     filter=1;
     if(desataudio ==0){
      falar("VOCÊ APERTOU, O BOTÃO PARA LIGAR, O RÊGISTRO  ELETRICO, DO  CHUVEIRO, PARA PREAQUECER A ÁGUA DO BANHO!!!");
       }
       }
        alertabanho=0;
    }
   function refreshclearsaidalampada1()
    {
       if(filter == 0)
       {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada6").innerHTML = "R.Chuveiro:"+xmlhttp.responseText;
        }
      };
      document.getElementById("evento_botao1").style.background = "#696969";   
       document.getElementById("evento_botao1").style.color="white";
       document.getElementById("evento_botao").style.background = "#696969";   
       document.getElementById("evento_botao").style.color="white";
       document.getElementById("evento_botao3").style.background = "#696969";   
       document.getElementById("evento_botao3").style.color="white";
      xmlhttp.open("GET", "/clearsaidalampada1", true);
      xmlhttp.send();
      controle2=0;
      filter=1;  
      if(desataudio ==0){
    falar("VOCÊ APERTOU, O BOTÃO PARA DESLIGAR, O RÊGISTRO  ELETRICO, DO  CHUVEIRO, PARA DESATIVAR A SAÍDA DE   ÁGUA PARA O  BANHO!!!");
      }
       }
    }
     function refreshlesaidalampada2()
    {
      
      var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada7").innerHTML = "A.Cozinha:" + xmlhttp.responseText;
          var estado = xmlhttp.responseText;
          if(estado == "Ligado")
          {
             document.getElementById("evento_botao3").style.color= "red";
           document.getElementById("evento_botao3").style.background = "#FFFF00";
              document.getElementById("evento_botao3").text= "ON";
            document.getElementById("estado_lampada5").text= "A.Cozinha:Ligado";
            document.getElementById("img04").src = 'https://img.filipeflop.com/files/download/automacao/lampada_ligada.png';
             document.getElementById("img08").src = 'https://img.filipeflop.com/files/download/automacao/lampada_ligada.png';
           controle3=1;
          }else
          {
          document.getElementById("evento_botao3").style.background = "blue";   
         document.getElementById("evento_botao3").style.color="white";
        document.getElementById("evento_botao3").text= "OFF";
         document.getElementById("estado_lampada5").text= "A.Cozinha:Desligado";
         document.getElementById("img04").src = 'https://img.filipeflop.com/files/download/automacao/lampada_desligada.png';
          document.getElementById("img08").src = 'https://img.filipeflop.com/files/download/automacao/lampada_desligada.png';
        controle3=0;
          }
        }
      };
      xmlhttp.open("GET", "/lesaidalampada2", true);
      xmlhttp.send();
    }
    

function refreshsetasaidalampada2()
    {
       if(filter == 0)
       {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada7").innerHTML = "A.Cozinha:"   +xmlhttp.responseText ;
        }
      };
      document.getElementById("evento_botao1").style.background = "#696969";   
       document.getElementById("evento_botao1").style.color="white";
       document.getElementById("evento_botao").style.background = "#696969";   
       document.getElementById("evento_botao").style.color="white";
       document.getElementById("evento_botao2").style.background = "#696969";   
       document.getElementById("evento_botao2").style.color="white";
      xmlhttp.open("GET", "/setasaidalampada2", true);
      xmlhttp.send();  
     controle3=1;
     filter=1;
     if(desataudio ==0){
      falar("VOCÊ APERTOU, O BOTÃO PARA LIGAR, Á LUZ DA COZINHA!!!");
     }
       }
    }
   function refreshclearsaidalampada2()
    {
       if(filter == 0)
       {
     var xmlhttp = new XMLHttpRequest();
      xmlhttp.onreadystatechange = function() {
        if (xmlhttp.readyState == XMLHttpRequest.DONE && xmlhttp.status == 200){
          document.getElementById("estado_lampada7").innerHTML = "A.Cozinha:"+xmlhttp.responseText ;
        }
      };
       document.getElementById("evento_botao1").style.background = "#696969";   
       document.getElementById("evento_botao1").style.color="white";
       document.getElementById("evento_botao").style.background = "#696969";   
       document.getElementById("evento_botao").style.color="white";
       document.getElementById("evento_botao2").style.background = "#696969";   
       document.getElementById("evento_botao2").style.color="white";
      xmlhttp.open("GET", "/clearsaidalampada2", true);
      xmlhttp.send();
      controle3=0;
      filter=1;
      if(desataudio ==0){
       falar("VOCÊ APERTOU, O BOTÃO PARA DESLIGAR, Á LUZ DA COZINHA!!!");
      }
       }
    }
   
function falar(texto){
  var text  = new SpeechSynthesisUtterance();
      text.lang = "pt-BR";
      text.text = texto;
    
       // voices = window.speechSynthesis.getVoices();
      text["voiceURI"] = "Google português do Brasil"; //discovered after dumping getVoices()
      text.lang = "pt-BR";
      text['localService'] = true;
  speechSynthesis.speak(text);
}   