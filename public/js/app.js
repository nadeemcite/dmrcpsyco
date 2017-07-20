var app = angular.module('myapp', []);

app.controller('myCtrl', function ($scope, $interval) {
    $scope.colors = ['red', 'yellow', 'green'];
    $scope.state = 0;
    $scope.reset = function () {
        $scope.lights = [new String(''), new String(''), new String('')];
    }
    $scope.init = function () {
        $scope.reset();
    }
    $scope.getKey=false;
    $scope.init();
    $scope.keyEvent = function (e) {
        if ($scope.state == 1) {
            if (e.key == 'r' || e.key == 'y' || e.key == 'g' || e.key == 'l') {
                if (($scope.lights[$scope.r1 == -1 ? 0 : $scope.r1].charAt(0) == e.key) && $scope.getKey) {
                    $scope.score++;
                    $scope.getKey=false;
                } else if (e.key == 'l') {
                    $scope.changeColor();                    
                    $scope.getKey=true;
                } else {
                    $scope.negativeScore++;
                }
            }
        }
        console.log($scope.score,$scope.negativeScore)
    }
    $scope.changeColor = function () {
        $scope.reset();
        $scope.r1 = Math.ceil(Math.random() * 3) - 1;
        $scope.r2 = Math.ceil(Math.random() * 3) - 1;
        $scope.lights[$scope.r1 == -1 ? 0 : $scope.r1] = $scope.colors[$scope.r2 == -1 ? 0 : $scope.r2];
    }
    $scope.start = function () {
        $scope.reset();
        $scope.state = 1;
        $scope.score = 0;
        $scope.negativeScore = 0;
        $scope.timer = 60;
        $scope.getKey=true;
        $scope.changeColor();
        $scope.ticker = $interval(function () {
            $scope.timer--;
            if ($scope.timer == 0) {
                $scope.state = 2;
                $interval.cancel($scope.ticker);
            }
        }, 1000);
    }
    $scope.restart = function () {
        if (confirm('sure?'))
            $scope.start();
    }
});