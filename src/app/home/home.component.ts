import { Component, OnInit, Inject } from '@angular/core';
import { Asset } from '../shared/asset';
import { AssetService } from '../services/asset.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})


export class HomeComponent implements OnInit {

  assets: Asset[];
  errMess: string;
  displayedColumns: string[];
  assetBudgetAndValue: any[];

  view: any[] = [600, 400];      
  // options for the chart
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showXAxisLabel = true;
  xAxisLabel = 'Asset';
  showYAxisLabel = true;
  yAxisLabel = 'Value';
  timeline = true;

  colorScheme = {
    domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
  };

  constructor(private assetService: AssetService,
  @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.assetService.getAssets()
    .subscribe(assets => {
      this.assets=assets;
      this.populateAssetValue();
    }, error=>this.errMess=error);

    this.displayedColumns = ['name', 'dateCreated', 'budget', 'currentValue','cash','numShares','profit'];
    
  }

  populateAssetValue() {
    this.assetBudgetAndValue = [];
    for (var i = 0; i < this.assets.length; i++) {
      this.assetBudgetAndValue.push({
        'name': this.assets[i].name,
        'series': [{ "name": "budget", 'value': this.assets[i].budget },
                   { "name": "currentValue", 'value': this.assets[i].currentValue }]
      });
    }
  } 
  


}
