angular.module('swagShop').component('cart', {
    templateUrl: 'app/cart/cart.template.html',
    controllerAs: 'cartCtrl',
    controller: function cartComp(cartSrvc) {
        this.cart = cartSrvc.currentCart()
        this.total = function () {
            return this.cart.reduce((acc, cur) => acc + cur.price, 0)
        }
        this.checkout = function(){
           this.cart = cartSrvc.checkout()
        }
        this.removeItem = function (index)  {
            cartSrvc.remove(index)
        }
    }
})