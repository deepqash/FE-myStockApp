import { AssetBucket } from './asset_bucket';


export class Asset {
    name: string;
    dateCreated: string;
    symbol: string;
    numShares: number;
    budget: number;       
    profit: number;
    currentValue:number;
    cash: number;
    cashToValue: number;
    maxTransactionValue: number;
    lastSellPrice: number;
    lastBuyPrice: number;
    toSellPrice: number;
    toBuyPrice: number;
    asset_buckets: [AssetBucket];
}
