import Backbone from 'backbone';


var QuoteView = Backbone.View.extend({
  initialize: function(options) {
    this.quote = options.quote;
    this.template = options.template;
    // $('#tmpl-quote-view')
  },

  render: function() {
    // console.log("I'm here2!!!!");
    var html = this.template({
      // quote: this.quote,
      symbol: this.quote.symbol,
      price: this.quote.price
    });
    this.$el.html(html);

    // Enable chained calls
    return this;
  },

  events: {
    'click .btn-buy': 'makeBuy',
    'click .btn-sell': 'makeSell'
  },

  // Increase the stock's price by a fixed amount (say, $1.00).
  // Re-render the view so that the new price is displayed to the user.
  makeBuy: function() {
    this.quote.price += 1;

    // Re-render the whole list, now including the new card
    this.render();
  },

  // Decrease the stocks' price by a fixed amount (say, $1.00).
  // Re-render the view so that the new price is displayed to the user.
  makeSell: function() {
    this.quote.price -= 1;

    // Re-render the whole list, now including the new card
    this.render();
  }
});

export default QuoteView;
