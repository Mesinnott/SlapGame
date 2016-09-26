
var distance = 1
var fatigue = 1


var Player = function(name, small, medium, large, special, health){
    this.name = name;
    this.small = small;
    this.medium = medium;
    this.large = large;
    this.special = special;
    this.health = health;
}

var Item = function(name, attack, speed, defence, quantity, description){
    this.name =name;
    this.attack=attack;
    this.speed =speed;
    this.defence =defence;
    this.quantity=quantity;
    this.description=description;
}

var extraItems = [
    shield=new Item('Shield', 0, -8, 70, 1, "Thick, powerful shield"),
    grapes= new Item('Grapes', 0.3, 0, 0, 1, 'A bunch of purple grapes you found'),
    shoes= new Item('Shoes', 0.1, 10, 5, 1,  'A fresh pair of kicks to protect your feet'),
    gloves= new Item('Gloves', 0.1, 2, 0, 1,  "A pair of black leather gloves you found back in '94")
]
var target = new Player('target', 100, 100, 100, 100, 100)
var p1 = new Player('p1', 10, 1, 0, 0, 100)
 
var defenceMod =0;
var attackMod = 1;
var speedMod = 10;

Player.prototype.attackMod = function(){
    for(var i=0; i<extraItems.length; i++){
        attackMod += ((extraItems[i].attack) * (extraItems[i].quantity));
    }
        return attackMod;  
}

Player.prototype.defenceMod = function(){
    for(var i=0; i<extraItems.length; i++){
        defenceMod += ((extraItems[i].defence) * (extraItems[i].quantity));
    }
        return defenceMod;  
}

Player.prototype.speedMod = function(){
    for(var i=0; i<extraItems.length; i++){
        speedMod += ((extraItems[i].speed) * (extraItems[i].quantity));
    }
        return speedMod;  
}

var onAction= document.getElementById('action')
var bothHealth =[target.health, p1.health]

function startAnimation() {
    onAction.style.animation = "flash 2s linear 1";
}

Player.prototype.onSmall = function (){
    // debugger;
    target.health -= this.small*(this.attackMod())
    onAction.className='actionGo'
    action.innerHTML='Great Punch?!'
    fatigue -= 10
    distance = 1
    p1.health += p1.defenceMod()
    p1.health -= target.small
    myAvatar.className=''
    update()
    return [bothHealth]
}


Player.prototype.onMedium = function(){
    if (distance>50 && this.attackMod() >1.2){
    target.health-=(this.medium)*(this.attackMod())
    action.innerHTML='You threw grapes at the wolverine!'
} 
    if (distance<= 30){
        p1.health-=target.small
    }
    distance-=10
    myAvatar.className=''
    update()
    fatigue -=10
    return bothHealth
}
var myAvatar= document.getElementById('avatar')

Player.prototype.onLarge = function(){
    action.innerHTML='You ran away from the Wolverine'
    target.health-=this.large*(this.attackMod())
    distance += this.speedMod();
    fatigue -=5
    update()
    myAvatar.className='img-flip'
    return [bothHealth]
}

Player.prototype.onSpecial = function(){
    target.health-=this.special 
    action.innerHTML='You sprinted.  Nice idea.'
    distance += 3*this.speedMod();
    fatigue +=80
    myAvatar.className='img-flip'
    update()
    return [bothHealth]
}


function reset(){
    target.health = 100
    p1.health = 100
    fatigue=1 
    distance=10
    attackMod=1
    speedMod=10
    defenceMod=0
    myAvatar.className=''
    update()
}

function update(){
  var healthElem = document.getElementById('targetHealth') 
  var yourHealth = document.getElementById('p1Health')
  var newMessage = document.getElementById('message')
  if(p1.health<=0){
      p1.health = 0
      message.innerHTML='YOU DIED!'
      document.getElementById('player-panel').className='player panel-dead'
  }else if(p1.health<=40 && p1.health>0){
      message.innerHTML='Careful, Health is LOW!'
      document.getElementById('player-panel').className='player panel-danger'
  }else{
      document.getElementById('player-panel').className='player panel-healthy' 
}
if(target.health<=0){
    target.health=0
    message='YOU DEFEATED THE WOLVERINE! CONGRATS ON KILLING A RARE AND MAGNIFICENT CREATURE'
    document.getElementById('player-panel').className='player panel-victory'
}
   if (distance >=100){
    return newMessage.innerHTML='Nice running, you Escaped!'
    
}
attackMod = 1
defenceMod = 0
speedMod =10
console.log('distance: ' + distance)
console.log('fatigue: ' + fatigue)

if (fatigue >= 100){
    distance -= 60
    fatigue -=20
    p1.health -= 10
    NewMessage.innerHTML = 'You worked Too Hard and Got Tired';
    return yourHealth.innerHTML=' Your Health: ' + p1.health;
}
if(distance>50){
    document.getElementById('dummy').className='far-dummy'
    newMessage.innerHTML= 'You are getting away!'
}else{document.getElementById('dummy').className=''
    
}

yourHealth.innerHTML = 'Your Health: ' + p1.health;
  return healthElem.innerHTML = 'Enemy Health: ' + target.health;
}
