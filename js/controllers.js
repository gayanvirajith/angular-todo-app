(function(){

  var app = angular.module('appControllers', []);
  
  app.controller('TodoController',['$firebase', '$scope', function($firebase, $scope){
    
    // Initialize list of todos  
    $scope.todos = [];
    var ref = new Firebase("https://gayan-todo.firebaseio.com/web/data/todos");
    var sync = $firebase(ref);
    // download the data into a local object
    $scope.todos = sync.$asArray();

    object = this;
    object.ref = sync.$ref();

    // Function to add todo item
    $scope.addTodo = function() {

      var newTodo = {
        name: $scope.todoText,
        done: false
      };

      $scope.todos.$add(newTodo);
      $scope.todoText = '';
    };

    // Function to delete todo item
    $scope.removeTodo = function(index) {
      item = $scope.todos.$getRecord($scope.todos.$keyAt(index));
      $scope.todos.$remove(item);
    };

    // Function to move item from a position to another
    $scope.moveTo = function(index, direction) {
      
      // Move up
      if (direction === 'up') {
        if (index === 0) return;
        index = index - 1;
      }

      // Move down
      if (direction === 'down') {
        if (index === $scope.todos.length - 1) {
          return;
        }  
      }
      
      var todo = $scope.todos[index];
      $scope.todos.splice(index + 2, 0, todo); // Move to a new position 
      $scope.todos.splice(index, 1);// Delete old position item
    
    }; 


  }]);

})();
