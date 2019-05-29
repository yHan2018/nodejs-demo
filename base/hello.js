// exports.hello = function (){
//   console.log('hello world')
// }


function Hello () {
  var name;
  this.setName=function(name){
    this.name = name
  }

  this.say = function(){
    console.log('my name is ' + this.name);
  }
}

module.exports=Hello;