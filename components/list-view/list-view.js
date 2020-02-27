
'use strict';

angular.module('myApp').component('listView', {
  templateUrl: 'components/list-view/list-view.html',
  controller: function(dataService) {
    var ctrl = this;
    dataService.fetchData().then( function() {
      ctrl.rows = dataService.data;
    });

    ctrl.update = function() {
      dataService.updateData();
    }

    ctrl.updateRow = function(index) {
      console.log(index);
      ctrl.editRowIndex = index;
      ctrl.showEditModal = true;
    }
  }
});
