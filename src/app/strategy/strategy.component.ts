import { Component, OnInit, Inject } from '@angular/core';
import {Strategy} from '../shared/strategy';
import { StrategyService } from '../services/strategy.service';

@Component({
  selector: 'app-strategy',
  templateUrl: './strategy.component.html',
  styleUrls: ['./strategy.component.scss']
})

export class StrategyComponent implements OnInit {

  strategies: Strategy[];
  errMess: string;
  displayedColumns: string[];
  bucketList: string[];

  constructor(private strategyService: StrategyService,
    @Inject('baseURL') private baseURL) { }  

  ngOnInit() {
    this.strategyService.getStrategies()
      .subscribe(strategies => {this.strategies = strategies;} 
        , error => this.errMess = error);

    this.displayedColumns = ['strategy', 'alpha_buy','alpha_sell','beta_sell'];
    // this.displayedColumns = ['bucket_name','alpha_buy', 'alpha_sell', 'beta_sell'];
  }


}
