var ctrls = angular.module('startupControllers', []);

// Movie Model, data in LocalHost
var Datas = [
  {
    title : 'Terminator',
    year  : '1984',
    genre : 'Action',
    desc  : 'A human-looking indestructible cyborg is sent' +
    ' from 2029 to 1984 to assassinate a waitress,' +
    ' whose unborn son will lead humanity in a war' +
    ' against the machines, while a soldier from that' +
    ' war is sent to protect her at all costs.',
    imgUrl: 'http://img08.deviantart.net/c2a5/i/2009/156/e/2/terminator_salvation_icon_by_phrozendemon.png'
  },
  {
    title : 'Alien',
    year  : '1979',
    genre : 'Horror',
    desc  : 'The commercial vessel Nostromo receives a distress' +
    ' call from an unexplored planet. After searching for' +
    ' survivors, the crew heads home only to realize that' +
    ' a deadly bioform has joined them.',
    imgUrl: 'https://pbs.twimg.com/profile_images/595342556726104064/kmqEH843.jpg'
  },
  {
    title : 'Robocop',
    year  : '1987',
    genre : 'Action',
    desc  : 'In a dystopic and crime-ridden Detroit,' +
    ' a terminally wounded cop returns to the force as' +
    ' a powerful cyborg haunted by submerged memories.',
    imgUrl: 'http://media.urbandictionary.com/image/large/robocop-28550.jpg'
  },
  {
    title : 'Blade Runner',
    year  : '1982',
    genre : 'Sci-Fi',
    desc  : 'A blade runner must pursue and try to terminate' +
    ' four replicants who stole a ship in space and have ' +
    'returned to Earth to find their creator.',
    imgUrl: 'http://www.vangelislyrics.com/covers/hblade.jpg'
  }
];

// Movie Details Controller
ctrls.controller('MovieDetailsCtrl', ['$scope', '$routeParams', '$window', function ($scope, $routeParams, $window, LocalStorage)
{
 // Get Data
  $scope.movieId = $routeParams.id;
  $scope.edit = 0;
  $scope.data = LocalStorage.getData();

  // Generate new Item
  if ($routeParams.id === 'add')
  {
    $scope.target =
    {
      title : '',
      year  : '',
      genre : '',
      desc: '',
      imgUrl: 'http://img2.wikia.nocookie.net/__cb20130819212538/dragon-stones/images/f/fc/256x256.gif'
    };
  }

  // Enable Edit Mode
  $scope.editMode = function ()
  {
    // Enable edit mode
    $scope.edit = 1;
  };

  // Disable Edit Mode
  $scope.normalMode = function ()
  {
    //Save if new item
    if ($routeParams.id === 'add')
    {
      Datas.push($scope.target);
      $window.location.href = './';
    }
    $scope.edit = 0;
  };

  // Delete Item
  $scope.deleteItem = function()
  {
    // Delete Item from Source
    $scope.data.splice($routeParams.id, 1);
    // Redirect to List
    $window.location.href = './';
  };

  // Back To List
  $scope.backList = function()
  {
    $window.location.href = './';
  };

}]);

// Movie List Controller
ctrls.controller('MovieListCtrl', ['$scope', 'IntStorage', function ($scope, LocalStorage)
{
  LocalStorage.setData(Datas);
  $scope.data = LocalStorage.getData();
}]);
