import { QuoteItem } from './data/quote';
import { Quote } from '@angular/compiler';
import { Injectable } from '@angular/core';
import {
  AngularFirestore,
  AngularFirestoreCollection,
} from '@angular/fire/firestore';

@Injectable({
  providedIn: 'root',
})
export class QuoteService {
  private pathCollections = '/quotes';

  quoteRef!: AngularFirestoreCollection<QuoteItem>;

  constructor(private database: AngularFirestore) {
    this.quoteRef = this.database.collection(this.pathCollections);
  }

  createQuote(theQuote: QuoteItem): void {
    this.quoteRef.add({ ...theQuote });
  }

  getAllQuote(): AngularFirestoreCollection<QuoteItem> {
    return this.quoteRef;
  }
}
