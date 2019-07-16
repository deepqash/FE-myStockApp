import { Injectable } from '@angular/core';
import { Asset } from '../shared/asset';
import { ASSETS } from '../shared/assets';

@Injectable({
  providedIn: 'root'
})
export class AssetService {

  constructor() { }

  getAssets(): Asset[] {
    return ASSETS
  }
}
