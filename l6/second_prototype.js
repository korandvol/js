'use strict'
function Robot(name){
	this.name = name;
}

Robot.prototype.robot=function(work){
	this.work+=work;
	console.log('Я Robot – я просто працюю');
}

Robot.prototype.coffeeRobot=function(work){
	this.work+=work;
	console.log('Я CoffeRobot – я варю каву');
}

Robot.prototype.dancerRobot=function(work){
	this.work+=work;
	console.log('Я RobotDancer – я просто танцюю');
}

Robot.prototype.coockerRobot=function(work){
	this.work+=work;
	console.log('Я RobotCoocker – я просто готую');
}

var robot = new Robot();
robot.robot();
var coffeeRobot = new Robot();
coffeeRobot.coffeeRobot();
var dancerRobot = new Robot();
dancerRobot.dancerRobot();
var coockerRobot = new Robot();
coockerRobot.coockerRobot();
console.log('---------------------------------');
var robots = [robot, coffeeRobot, dancerRobot, coockerRobot];
for (var i = 0; i < robots.length; i++) {
	console.log(robot.robot(),coffeeRobot.coffeeRobot(),dancerRobot.dancerRobot(),coockerRobot.coockerRobot());
    
	return 1;
}