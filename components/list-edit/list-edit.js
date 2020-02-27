
'use strict';

angular.module('myApp').component('listEdit', {
  templateUrl: 'components/list-edit/list-edit.html',
  controller: function(dataService) {
    var ctrl = this;
    ctrl.rowData = dataService.data;
    ctrl.modalClose = function() {
      ctrl.showEditModal = false;
    }
  },
  bindings: {
    showEditModal: '=',
    editRowIndex: '='
  },
});
