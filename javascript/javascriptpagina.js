function pesquisapagina()
{	
	var oi;
	oi=document.getElementById = pesquisar.value;
	
	if(oi=="filmes"){
		window.open('filmes.html',"_self");
	
	}
	if(oi=="series"||oi=="séries"){
		window.open('series.html',"_self");
	
	}
	if(oi=="mangas"||oi=="mangás"){
		window.open('mangas.html',"_self");
	
	}
	if(oi=="animes"){
		window.open('animes.html',"_self");
	
	}
	if(oi=="inicio"){
		window.open('mangas.html',"_self");
	
	}
		
}
function mudaBackground() {
	
document.getElementById("supernatural").style.backgroundColor = "#6495ED";
document.getElementById("supernatural").style.borderColor = "#000000";
}
function mudaBackground1() {
	
document.getElementById("supernatural").style.backgroundColor = "#a3a2f1";
document.getElementById("supernatural").style.borderColor = "transparent";
}


function mostra(tipo)
{

				
		if(tipo==1){
		document.getElementById("onepiece").src="imagens/onepiece.gif";
		
		}
		if(tipo==2){
		document.getElementById("onepiece").src="imagens/one.png";
		}
		if(tipo==3){
		document.getElementById("naruto").src="imagens/naruto.gif";
		
		}
		if(tipo==4){
		document.getElementById("naruto").src="imagens/naruto.png";
		}
		if(tipo==5){
		document.getElementById("onepunch").src="imagens/onepunch.gif";
		
		}
		if(tipo==6){
		document.getElementById("onepunch").src="imagens/onepunch.png";
		}
		if(tipo==7){
		document.getElementById("dead").src="imagens/deadpoolyou.jpg";
		}
		if(tipo==8){
		document.getElementById("dead").src="imagens/deadpool2.jpg";
		}
}
function validaRadio() {

	
	
  if (document.form1.q1[0].checked == false 
    && document.form1.q1[1].checked == false 
	&& document.form1.q1[2].checked == false
	&& document.form1.q1[3].checked == false
	&& document.form1.q1[4].checked == false
	&& document.form1.q1[5].checked == false
	&& document.form1.q1[6].checked == false) {
    alert('Por favor, selecione algum filme.');
   
  }

}
function teste(){alert('Por favor, selecione algum filme.');}

function votacao() {
	for(var i = 0; i < i<7; i++)
	 {
		if (document.form1.q1[i].checked == true) 
			{	
				if(i%2==1)	
				alert('hummmm tão sombrio...Obrigado pelo sua colaboração');
				else
					alert('hummmm fã da marvel né...Obrigado pelo sua colaboração');
			
			}
		 
	
	}
  
}

function seleciona(clicado){
	
	 for(var i = 1; i < i<=7; i++)
	 {
		if(clicado==i)
	{
		
		if(document.getElementById("quiz"+i).checked==true)
		{
			document.getElementById("quiz"+i).checked=false;
		}	
		else
		{
			document.getElementById("quiz"+i).checked=true
		}
		break;
	 }
		 
	
	}
		
}
