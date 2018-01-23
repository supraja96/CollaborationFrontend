angular.
module('myApp', []).
directive('myBackgroundImage', function () {
    return function (scope, element, attrs) {
        element.css({
            'background-image': 'url(' + attrs.myBackgroundImage + ')',
                'background-size': 'cover',
                'background-repeat': 'no-repeat',
                'background-position': 'center center'
        });
    };
});