function EventObserver() {
  this.observers = [];
}

EventObserver.prototype = {
  subscribe: function (fn) {
    this.observers.push(fn);
    console.log(`You're now subscribe to ${fn.name}`);
  },
  
  unsubscribe: function(fn){
    //
    this.observers = this.observers.filter(function(item){
      if(item != fn){
        return item;
      }
    });

    console.log(`You're now unsubscribe from ${fn.name}`);
  },

  fire: function(){
    this.observers.forEach(function(item){
      item.call();
    });
  }
}

const click = new EventObserver();

//Event Listeners
document.querySelector('.sub-ms').addEventListener('click', 
function(){
  click.subscribe(getCurMilliseconds);
});

document.querySelector('.unsub-ms').addEventListener('click', 
function(){
  click.unsubscribe(getCurMilliseconds);
});

document.querySelector('.fire').addEventListener('click', 
function(){
  click.fire();
});


//Click handler
const getCurMilliseconds = function(){
  console.log(`Current milliseconds: ${new Date().getMilliseconds()}`);
}

const getCurSeconds = function(){
  console.log(`Current seconds: ${new Date().getSeconds()}`);
}

