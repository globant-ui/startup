'use strict';

var RandomColorModule = (function()
{
  function RandomColorModule() { }

  RandomColorModule.prototype = {
    //nextSingleColor will return an number between 0 and 255
    nextSingleColor : function()
    {
      var rand = Math.random() * (255);
      rand = Math.floor(rand);
      return Number(rand);
    },

    // nextSingleAlpha will return a float between 0.0 and 1.0
    nextSingleAlpha: function()
    {
      return (Math.random() * (1.0)).toFixed(1);
    },

    //nextRGBColor will return a color like 'rgb(60,210,75)'
    nextRGBColor   : function()
    {
     return 'rgb(' + this.nextSingleColor() + ',' + this.nextSingleColor() +
       ',' + this.nextSingleColor() + ')';
    },

    //nextRGBAColor will return a color like 'rgba(60,210,75,0.3)'
    nextRGBAColor   : function()
    {
      return 'rgba(' + this.nextSingleColor() + ',' + this.nextSingleColor() +
        ',' + this.nextSingleColor() + ',' + this.nextSingleAlpha() + ')';
    }
  };

  return RandomColorModule;
}());

module.exports = RandomColorModule;