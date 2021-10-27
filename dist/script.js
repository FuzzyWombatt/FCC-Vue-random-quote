new Vue({
  el: '#app',
  data: {
    quote: '',
    author: '',
    quotearray: [],
    numquotes: 0,
    tweet: 'twitter.com/intent/tweet',
    randomColor: '',
  },
  computed: {
    colorPhase: function() {
      return {
          backgroundColor: this.randomColor,
          color: this.randomColor
      };
    }
  },
  methods: {
    loadQuotes: function(){
      axios.get('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json')
            .then((response) => {
             this.quotearray = response.data.quotes;
             this.numquotes = this.quotearray.length;
             this.getQuote();});
    },
      getQuote: function(){
      let randomquote = this.quotearray[(Math.round(Math.random() * this.numquotes))];
      this.quote = randomquote.quote;
      this.author = randomquote.author;
      this.randomColor = this.randomColors();
    },
      randomColors: function() {
        return '#' + Math.floor(Math.random() * 16777215).toString(16);
    }
  },
  beforeMount(){
    this.loadQuotes();
  }
  
});