var game = new Phaser.Game(800,600,Phaser.AUTO, '', {preload: preload, create: create, update: update});
var score = 0;
var lives = 3;

function preload(){
	game.load.image('sky','assets/sky.png');
	game.load.image('star','assets/star.png');
	game.load.image('platform','assets/platform.png');
	game.load.image('firstaid','assets/firstaid.png');
	game.load.image('diamond','assets/diamond.png');

	game.load.spritesheet('dude','assets/dude.png',32,48);
	game.load.spritesheet('baddie','assets/baddie.png',32,32);
}

function create(){
	game.physics.startSystem(Phaser.Physics.ARCADE);

	game.add.sprite(0,0,'sky');

	platforms=game.add.physicsGroup();
	platforms.enableBody = true;
	var ground = platforms.create(0,550,'platform');
	ground.scale.setTo(2,2);
	ground.body.immovable = true;
	ledge1 = platforms.create(400,400,'platform');
	ledge1.body.immovable = true

ledge2 = platforms.create(-100,250,'platform');
	ledge2.body.immovable = true;

	var style = {font: "bold 32px Arial", fill:"#fff"};
	scorelabel = game.add.text(200,360,"Score:", style);
	scoretext = game.add.text(200,400,score, style);
	
	livelabel = game.add.text(300,560,"Lives:", style);
	livetext = game.add.text(420,560,lives, style);

	livelabel.setShadow(3,3,'rgba(0,0,0,0.5)',2);
}

player = game.add.sprite(10,300,'dude');

player.animations.add('left',[0,1,2,3],10,true);
player.animations.add('right',[5,6,7,8],10,true);

player.body.gravity.y = 300;
player.body.bounce.y = 0.2;
player.body.collideWorldBounds = true;

enemy.body.gravity.y = 300;
enemy.body.bounce.y = 0.2;
enemy.body.collideWorldBounds = true;

enemy = game.add.sprite(10,300,'enemy');

enemy.animations.add('left',[0,1],10,true);
enemy.animations.add('right',[2,3],10,true);

stars = game.add.physicsGroup();
stars.enableBody = true;
for(var i = 0; i < 12	; i++){
	var star = stars.create( i*70 ,  0, 'star' )
	stae.body.gravity.y = 200;
	star.body.bounce.y = Math.random()*0.2 + 0.7


wKey = game.input.keyboard.addKey(Phaser.Keyboard.W);
dKey = game.input.keyboard.addKey(Phaser.Keyboard.D);
aKey = game.input.keyboard.addKey(Phaser.Keyboard.A);
}
function update(){
game.physics.arcade.collide(player, platforms);
game.physics.arcade.collide(stars, platforms);
game.physics.arcade.collide(enemy, platforms);


player.body.velocity.x = 0;


if(aKey.isDown)
player.body.velocity.x = -150;
player.animations.play("left");

} else if(dKey.isDown){
player.body.velocity.x = +150;
player.animations.play("right");
}
else {
	player.animations.stop();
	player.frame = 4;
}
if wKey.isDown && player.body.touching.down {
	player.body.velocity.y = -300;
}
