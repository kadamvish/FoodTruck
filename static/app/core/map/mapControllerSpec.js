/* global expect */
// TO BE DONE
"use strict";

describe("MapController", function () {
    var scope, controller, vm;

    beforeEach(module("MyFoodTruckApp"));

    beforeEach(inject(function ($controller, $rootScope) {
        scope = $rootScope.$new();
        
        controller = $controller("MapController", {$scope: scope});
        vm = controller;
    }));

    it("should be defined", function () {
        expect(controller).toBeDefined();
    });

});
