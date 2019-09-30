import { Component, OnInit, Inject, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { Asset } from '../shared/asset';
import { AssetService } from '../services/asset.service';


@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.scss']
})


export class TransactionsComponent implements OnInit, AfterViewInit {

  assets: Asset[];
  errMess: string;
  displayedColumns: string[];
  displayedColumnsBuckets: string[];
  assetTransactions: any[];
  assetBucketTransactions: any[];
  bucketTransactions: any[];
  cashVector: any[];

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
    @Inject('baseURL') private baseURL) {  }

  
  ngOnInit() {
    this.assetService.getAssets()
      .subscribe(assets => {
            this.assets = assets;
            this.populateAssetValue();
          }  , error => this.errMess = error);

    this.displayedColumns = ['bucketName', 'strategy', 'budget', 'currentValue', 'profit'];
    this.displayedColumnsBuckets = ['type', 'shares','price'];

      }

  populateAssetValue() {
    // var assetBudgetAndValue = [];
    this.assetTransactions = [];
    for (var i = 0; i < this.assets.length; i++) {
      this.assetBucketTransactions=[];
      for (var j = 0; j < this.assets[i].asset_buckets.length; j++) {
        this.cashVector = [];
        for (var k = 0; k < this.assets[i].asset_buckets[j].transactions.length; k++) {
          this.cashVector.push({
            'date': this.assets[i].asset_buckets[j].transactions[k].date,
            'cash': this.getCashValue(this.assets[i].asset_buckets[j], k) });
        };
        this.assetBucketTransactions.push({
          'bucketName': this.assets[i].asset_buckets[j].bucketName,
          'cashVector': this.cashVector})
      }
      
      this.assetTransactions.push({
        'name': this.assets[i].name,
        'value': this.assetBucketTransactions
      });
    }
      
  }


  getCashValue(bucket, k:Number) {
    var last_cash: Number;
    if (k==0){
      last_cash = bucket.budget; 
    } else {
      last_cash = bucket.transactions[k-1].cash;
    }
  return last_cash + bucket.transactions[k].shares * bucket.transactions[k].price
  }

  
  @ViewChild('lineGraph', { static: true }) lineGraph: ElementRef;

  ngAfterViewInit() {
    const data = this.assetTransactions[this.assets[0].name][this.assets[0].asset_buckets[0].bucketName]
    lineChart(this.lineGraph.nativeElement, data); // { values, series }    
  }


}
