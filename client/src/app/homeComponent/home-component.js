/* eslint-disable */
module.exports = {
    template : require('./home.html'),
    controller : homeController,
    controllerAs : 'homeCtrl'
}

function homeController(){
    self = this;
    self.message = 'I am all ready';
}