import { Transaction } from './transaction';


export class Asset {
    _id: string;
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
    transaction:[Transaction];
}
