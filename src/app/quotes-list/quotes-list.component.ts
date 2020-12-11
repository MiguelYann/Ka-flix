import { map } from 'rxjs/operators';
import { QuoteService } from './../quote.service';
import { QuoteItem } from './../data/quote';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'quotes-list',
  templateUrl: './quotes-list.component.html',
  styleUrls: ['./quotes-list.component.css'],
})
export class QuotesListComponent implements OnInit {
  p = 1;
  quoteList: QuoteItem[] = [];
  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {
    this.quoteService
      .getAllQuote()
      .snapshotChanges()
      .pipe(
        map((change) =>
          change.map((data) => ({
            id: data.payload.doc.id,
            ...data.payload.doc.data(),
          }))
        )
      )
      .subscribe((payload) => {
        this.quoteList = payload as QuoteItem[];
      });
  }
}
