(function(window) {
    'use strict';
    var App = window.App || {};
    var Validation = {
        isCompanyEmail: function (email) {
          return /.+@bignerdranch\.com$/.test(email);
        }
    };

    /* isDecaf function for silver challenge */
    isBadDecaf: function (string, integer) {
      return (string.includes('decaf') && integer >= 20);
    }
  };
    App.Validation = Validation;
    window.App = App;
})(window);
