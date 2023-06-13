import { Component, Input, OnInit } from '@angular/core';
import { Hero } from '../heroes/hero';
import {ActivatedRoute} from '@angular/router';
import { Location } from '@angular/common';
import { HeroService } from '../hero.service';
import { subscribeOn } from 'rxjs';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent {

  @Input() hero? : Hero; 

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ){}

  ngOnInit(): void {
    this.getHero();
  }

  getHero() {
    const id = Number(this.route.snapshot.paramMap.get('id')); //Number to convert the id came from the route from string to number, snapshot used to access the routes and get the data from the url,paramMap used to get the value of the id  
    return this.heroService.getHero(id) //excuting the get hero in heroservices on the sent id
    .subscribe(hero => this.hero = hero);  //controlling the data recieved 
  }

  goBack(): void {
    this.location.back();
  }
}

