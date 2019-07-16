import { Component, OnInit } from '@angular/core';
import { Asset } from '../shared/asset';
import { AssetService } from '../services/asset.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  assets: Asset[];
  displayedColumns: string[];

  
  constructor(private assetService: AssetService) { }

  ngOnInit() {
    this.assets = this.assetService.getAssets()
    this.displayedColumns = ['name', 'budget', 'cash','numShares','profit'];
  }


}
