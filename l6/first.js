'use strict'

function Work(){
	
	this.machine=function(){
		console.log('Я Robot – я просто працюю');
	}
	
	this.coffeeRobotMachine=function(){
		console.log('Я CoffeRobot – я варю каву');
	}
	
	this.dancerRobotMachine=function(){
		console.log('Я RobotDancer – я просто танцюю');
	}
	this.coockerRobotMachine=function(){
		console.log('Я RobotCoocker – я просто готую');
	}
}

var robot = new Work();
robot.machine();
var coffeeRobot = new Work();
coffeeRobot.coffeeRobotMachine();
var robotDancer = new Work();
robotDancer.dancerRobotMachine();
var coockerRobot = new Work();
coockerRobot.coockerRobotMachine();
console.log('-----------------------------------');
let robots = [robot, coffeeRobot, robotDancer, coockerRobot ];
for (var i = 0; i < robots.length; i++) {
	console.log(robot.machine(),coffeeRobot.coffeeRobotMachine(),robotDancer.dancerRobotMachine(), coockerRobot.coockerRobotMachine());
 return 1;
}

console.log('-----------------------------------');