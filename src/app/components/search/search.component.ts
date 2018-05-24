import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {HeroesService,Heroe} from '../../servicios/heroes.service';

//Router
import {Router} from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: []
})
export class SearchComponent implements OnInit {
  heroes:Heroe[]=[];
  termino:string;
  constructor(private activatedRoute:ActivatedRoute, private _heroesService:HeroesService,private router:Router) {

  }

  ngOnInit() {
    this.activatedRoute.params.subscribe(params =>{
      this.termino=params['termino'];
      this.heroes=this._heroesService.buscarHeroes(params['termino']);
    });
  }

  verHeroe(index:number)
  {
    this.router.navigate(['/heroe',index]);
  }

}
