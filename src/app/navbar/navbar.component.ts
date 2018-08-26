import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor() { }

  ngOnInit() {
//Funcion de desĺegue de slide izquierdo al hacer click enen boton menu
    $(document).ready(main);
    var contador = 1;
    function main(){
	  $('.menu_bar').click(function(){
		  if(contador == 1){
		  	$('nav').animate({
		  		left: '0%'
		  	});
		  	contador = 0;
		  } else {
		  	  contador = 1;
		  	  $('nav').animate({
		  	  	left: '-100%'
		  	  });
		    }
 
	  });
 
    };
  }

}
