angular.module('starter', ['wakanda'])
  .service('WakandaManager', function($q, $wakanda) {
    var _this = this;
    var initPromise = $wakanda.init();
    this.$wakanda = $wakanda;

    this.ready = function() {
      var deferred = $q.defer();

      initPromise
        .then(function() {
          deferred.resolve(_this);
        })
        .catch(function(e) {
          deferred.reject(e);
        });

      return deferred.promise;
    };
  })
  .controller('myController', function($scope, WakandaManager) {
    WakandaManager.ready().then(function () {
      var $wakanda = WakandaManager.$wakanda;

      //var ds = $wakanda.getDatastore();
      //$scope.employees = ds.Employee.$find({select: 'company'});
    });
  });
