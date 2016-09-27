var $ = require('jquery');
var Backbone = require('backbone');
var _ = require('underscore');
Backbone.$ = $;
require('./view')

_.templateSettings = {
    interpolate: /\{\{(.+?)\}\}/g
};

$(function(){
  var userView = new TestView({});
  $('body').html(userView.render().el)
})