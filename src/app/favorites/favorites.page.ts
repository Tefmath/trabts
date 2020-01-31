import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.page.html',
  styleUrls: ['./favorites.page.scss'],
})
export class FavoritesPage implements OnInit {
post;
	
  constructor() {
   this.post = [{
		 "nomeDoUsuario":"Tef",
		 "texto": "xabu",
		 "horario": "11:00",
		 "numeroDeLikes": 20,
		 "numeroDeDislikes": 10,
		 "episodioRelacionado": "Buffy",
		 "respostasDoPost": "koe",
		 "estadoDoLike": false,
		 "anexo": "tef.jpg",
		 "quantidadeDeComp": 15,
		 "spoiler": true,
		 "estadoDoDislike": false
		 

   }, 
   
   {
		 "nomeDoUsuario":"jubs",
		 "texto": "hehehe",
		 "horario": "20:00",
		 "numeroDeLikes": 20,
		 "numeroDeDislikes": 10,
		 "episodioRelacionado": "Buffy",
		 "respostasDoPost": "koe",
		 "estadoDoLike": false,
		 "anexo": "tef.jpg",
		 "quantidadeDeComp": 15,
		 "spoiler": true,
		 "estadoDoDislike": false
		 

   }]
 }

  ngOnInit() {
  }

  likes(el){
	if (el.estadoDoLike == false){
		if (el.estadoDoDislike == true){
			el.estadoDoDislike = false;
			el.numeroDeDislikes--;
			
		}
		el.estadoDoLike = true;
		el.numeroDeLikes++;
		return
	} 
	if (el.estadoDoLike == true){
		el.estadoDoLike = false;
		el.numeroDeLikes--;
	}
	
}


dislikes(el){
	if (el.estadoDoDislike == false){
		if (el.estadoDoLike == true){
			el.estadoDoLike = false;
			el.numeroDeLikes--;
		}
		el.estadoDoDislike = true;
		el.numeroDeDislikes++;
		return
	} 
	else{
		el.estadoDoDislike = false;
		el.numeroDeDislikes--;
		
	}
	
}
}