var TestView = Backbone.View.extend({
  tagName: 'li',
  template: _.template('test'),
  render: function(){
    this.$el.html(this.template());
    return this;
  }
});

module.exports = TestView;