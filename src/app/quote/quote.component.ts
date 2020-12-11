import { QuoteService } from './../quote.service';
import { OnChanges, SimpleChanges } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { QuoteItem } from '../data/quote';
import { Form } from '@angular/forms';

@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css'],
})
export class QuoteComponent implements OnInit, OnChanges {
  @Input('content') textQuote = '';

  quoteUser = '';
  isPosted: boolean = false;
  constructor(private quoteService: QuoteService) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    this.textQuote = changes.textQuote.currentValue;
  }

  postQuote(): void {
    if (!this.quoteUser) {
      return;
    } else {
      const quote: QuoteItem = { text: this.quoteUser };
      try {
        this.isPosted = true;
        this.quoteService.createQuote(quote);
      } catch (e) {
        this.isPosted = false;
      }
    }
  }
}
