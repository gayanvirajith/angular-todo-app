(function(){

  var app = angular.module('appControllers', []);
  
  app.controller('TodoController', function(){
    
    // Initialize list of todos  
    this.todos = [
      { name: "Todo item 1", done: false },
      { name: "Todo item 2", done: false },
    ];

    // Function to add todo item
    this.addTodo = function() {

      var newTodo = {
        name: this.todoText,
        done: false
      };

      this.todos.push(newTodo);
      this.todoText = '';
    };

    // Function to delete todo item
    this.removeTodo = function(index) {
      this.todos.splice(index, 1);
    };

    // Function to move item from a position to another
    this.moveTo = function(index) {
      
      if (index === this.todos.length - 1) {
        return;
      }

      var todo = this.todos[index];
      this.todos.splice(index + 2, 0, todo); // Move to a new position 
      this.todos.splice(index, 1);// Delete old position item
    }; 

  });

})();
