var chatConcept = angular.module('chatConcept', []);

function mainCtrl($scope) {
  $scope.init = function(item) {
    console.log(item);
  }
  $scope.data = [{
    id: 'div1',
    value: 'dark purple',
    hex: '#3e1b3a'
  },
  {
    id: 'div2',
    value: 'light purple',
    hex: '#6d355a'
  },
  {
    id: 'div3',
    value: 'Purple Fade',
    hex: '#96526a'
  },
  {
    id: 'div4',
    value: 'skin',
    hex: '#fcbc79'

  },
  {
    id: 'div5',
    value: 'Peach',
    hex: '#e29b7a'
  },
  {
    id: 'div6',
    value: 'peach/purple mix',
    hex: '#c7817e'
  }]
}
