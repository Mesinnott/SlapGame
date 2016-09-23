// var health = 100;
// var slap = 5;
// var punch = 10;
// var kick = 20;
// var hadouken = 35

function Player (name, action1, action2, action3, special, health){
    this.name = name;
    this.action1 = 5;
    this.action2 = 10;
    this.action3 = 15;
    this.special = 30;
    this.health = 100;
}

var p1 = new Player('player 1', 'slap', 'punch', 'kick', 'hadouken', 100)

function onSlap(){
  p1.health -= p1.action1
  update()
  return p1.health
}

function onPunch(){
  p1.health -= p1.action2
  update()
  return p1.health
}

function onKick(){
    p1.health-= p1.action3
    update()
    return p1.health
    }

function onHadouken(){
    p1.health -= p1.special
    update()
    return p1.health
}

function reset(){
    p1.health = 100
    update()
}

function update(){
  var healthElem = document.getElementById('health')
  if(p1.health<=0){
      p1.health = 0
      document.getElementById('player-panel').classList.add('panel-danger')
  }else{
      document.getElementById('player-panel').classList.remove('panel-danger') 
  }
  healthElem.innerHTML = p1.health
}
