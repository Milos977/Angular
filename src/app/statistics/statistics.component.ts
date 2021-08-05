import { Component, OnInit } from '@angular/core';

import { ActivatedRoute } from '@angular/router';

import { SlikeService } from '../services/slike/slike.service';

import { Slike } from '../shared/models/slike';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss']
})
export class StatisticsComponent implements OnInit {

  slike:Slike[] = [];

  constructor(private slikeService:SlikeService,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
      if(params.searchTerm)
      this.slike = this.slikeService.getAll().filter(slike => slike.name.toLowerCase().includes(params.searchTerm.toLowerCase()));

      else
      this.slike = this.slikeService.getAll();
    })

    

  
  }

}
