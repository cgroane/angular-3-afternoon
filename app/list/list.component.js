angular.module('swagShop').component('list', {
    templateUrl: 'app/list/list.template.html',
    controllerAs: 'listCtrl',
    controller: function listComp(swagSrvc, $state) {
        this.swag = swagSrvc.swag;
        this.goToDetails = function(id) {
            $state.go('details', {id: id})
        };
    }
});