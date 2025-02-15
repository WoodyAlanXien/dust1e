// File: helpers/registerHandlebarsHelpers.js

export function registerHandlebarsHelpers() {
    // Helper to format a number as a percentage
    Handlebars.registerHelper('percentage', function(value) {
      return `${value * 100}%`;
    });
  
    // Helper to check if two values are equal
    Handlebars.registerHelper('ifEqual', function(a, b, options) {
      if (a === b) {
        return options.fn(this);
      } else {
        return options.inverse(this);
      }
    });
  
    // Helper to capitalize the first letter of a string
    Handlebars.registerHelper('capitalize', function(value) {
      if (typeof value !== 'string') return '';
      return value.charAt(0).toUpperCase() + value.slice(1);
    });
  
    // Helper to sum two numbers
    Handlebars.registerHelper('sum', function(a, b) {
      return a + b;
    });
  
    // Helper to format a date
    Handlebars.registerHelper('formatDate', function(date, format) {
      const options = { year: 'numeric', month: 'short', day: 'numeric' };
      return new Date(date).toLocaleDateString(undefined, options);
    });
  
    // Helper to repeat a block a given number of times
    Handlebars.registerHelper('repeat', function(n, block) {
      let accum = '';
      for (let i = 0; i < n; ++i) {
        accum += block.fn(i);
      }
      return accum;
    });
  }
  