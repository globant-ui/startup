function MovieDetailController() {
  var ctrl = this;

  ctrl.delete = function() {
    ctrl.onDelete({movie: ctrl.movie});
  };

  ctrl.update = function(prop, value) {
    ctrl.onUpdate({movie: ctrl.movie, prop: prop, value: value});
  };
}

angular.module('movieApp').component('movieDetail', {
  templateUrl: 'movieDetail.html',
  controller: MovieDetailController,
  bindings: {
    movie: '<',
    onDelete: '&',
    onUpdate: '&'
  }
});