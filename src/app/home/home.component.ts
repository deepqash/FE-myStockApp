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

  
  constructor(private assetService: AssetService,
  @Inject('baseURL') private baseURL) { }

  ngOnInit() {
    this.assetService.getAssets()
    .subscribe(assets => this.assets=assets
    , error=>this.errMess=error);

    this.displayedColumns = ['name', 'budget', 'cash','numShares','profit'];
  }


}
