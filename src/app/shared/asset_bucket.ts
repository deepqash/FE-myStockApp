import { Transaction } from './transaction';

export class AssetBucket {
    bucketName: String;
    strategy: String;
    budget: Number;
    profit: String;
    currentValue: Number;
    sell_price: Number;
    buy_price: Number;
    transactions: [Transaction]
}