//01 显示信息 20.10.16
class showInfo {
    constructor(){
        this.text3;
    }

    draw(ttt,tempX,tempY){
        this.text3 = new PointText(new Point(tempX, tempY));
        this.text3.justification = 'left';
        this.text3.fillColor = 'black';
        
        this.text3.content = ttt;
    }

}

//01.1 显示信息 20.10.17
class showInfo1 {
    constructor(ttt,tempX,tempY){
        this.text = ttt;
        this.x = tempX;
        this.y=tempY;
        this.text3;
    }

    draw(){
        this.text3 = new PointText(new Point(this.x, this.y));
        this.text3.justification = 'left';
        this.text3.fillColor = 'black';
        
        this.text3.content = this.text;
    }

}
//02点击鼠标时，显示鼠标点击序号==============================================
function drawMouseClickPoints() {
    var points = new Array;
    //var numbers = new Array; 
    var tool = new Tool();
    var currentNum = 0;
    //var path;

    function enter(event) {
        this.fillColor = 'red';
    }

    function leave(event) {
        this.fillColor = 'black';
    }

    // Define a mousedown and mousedrag handler
    tool.onMouseDown = function (event) {

        points.push(new Path.Circle(event.point, 15));
        currentNum++;
        showInfo(currentNum, event.point, "num");
        //numbers.push(currentNum);
        //this.yes++;

        for (i = 0; i < points.length; i++) {
            points[i].fillColor = 'black';
            points[i].onMouseEnter = enter;
            points[i].onMouseLeave = leave;
        }
    }
}

//03 二维点阵  函数==============================================
function myPoints(xBase, yBase, xNum, yNum, xLength, yLength) {
    class myPoints {
        constructor() {
            this.circles = new Array;
            this.thePoints = new Array;
        }
    }
    //var basePoint = new Point(0,0);
    /* var xBase = 30;
    var yBase = 20;
    var xNum = 2;
    var yNum = 20;
    var xLength = 10;
    var yLength = 15; */

    //var oo = new Shape.Circle(new Point(40, 40), 5);
    //oo.strokeColor = 'black';
    //circles.push();
    //circles[0].strokeColor = 'black';
    for (i = 0; i < xNum; i++) {
        for (j = 0; j < yNum; j++) {
            var tempPoint = new Point(i * xLength + xBase, j * yLength + yBase);
            thePoints.push(tempPoint);
            circles.push(new Path.Circle(tempPoint, 1));
            //=一个圆shape====================
        }
    }
    for (w = 0; w < circles.length; w++) {
        circles[w].fillColor = 'black';
    }
    return thePoints;
}

//04 Point2D 二维点阵 真正的类==============================================

class Points2D {
    constructor(x1, y1, x2, y2, x3, y3) {
        this.circles = new Array;
        this.thePoints = new Array;
        this.xBase = x1;
        this.yBase = y1;
        this.xNum = x2;
        this.yNum =y2;
        this.xLength = x3;
        this.yLength = y3;
        
    }

    draw(){
        for (let p = 0; p < this.xNum; p++) {
            for (let j = 0; j < this.yNum; j++) {
                var tempPoint = new Point(p * this.xLength + this.xBase, j * this.yLength + this.yBase);
                this.thePoints.push(tempPoint);
                this.circles.push(new Path.Circle(tempPoint, 1));
                //=一个圆shape====================
            }
        }
        for (let w = 0; w < this.circles.length; w++) {
            this.circles[w].fillColor = 'black';
        }
    }

} 

//05 一个最简单的类的范例=====================
class User {

    constructor(name) {
      this.name = name;
    }
  
    sayHi() {
      //alert(this.name);
    }
  
  }




//07 一对鼠标交互按钮 class形式   鼠标事件下无法访问this.parameter
class mouseButton {
    constructor() {
        this.parameter1 = 75;

        this.draw();
        this.button1 = new Path.Circle({
            center: new Point(140, 140),
            radius: 30,
            fillColor: 'red'
        });
        /* this.button1.onMouseDown = function (){
            //this.parameter1 = 15;
            alert("setNum");
        } */
        //this.setNum=this.setNum.bind(this);
        //this.button1.onMouseDown = this.setNum();
        
        //let funcUser = func.bind(user)
        //this.button1.onMouseDown = this.button1.onMouseDown.bind(this);

        this.button2.onMouseDown = function (event) {
            //this.fillColor = 'red';
            //counter -= 10;
            //this.parameter1++;
            
            alert("button99"); 
        }

    }
    
    setNum(){
        this.parameter1 = 15;
        alert("setNum");
    }

    draw() {
        
        
        this.button2 = new Path.Circle({
            center: new Point(140, 200),
            radius: 30,
            fillColor: 'blue'
        });
        
        
    }

}
//08 鼠标按钮 函数形式==============================
function mouseButton1() {
    

    //counter = 5;
    this.parameter1=44;

    draw();


    function draw() {
        let button1 = new Path.Circle({
            center: new Point(140, 140),
            radius: 30,
            fillColor: 'red'
        });
        
        let button2 = new Path.Circle({
            center: new Point(140, 200),
            radius: 30,
            fillColor: 'blue'
        });
        
        button1.onMouseDown = function () {
            //this.fillColor = 'red';
            //counter -= 10;
            parameter1-=11;
            //counter--;
            alert(parameter1);
            
        }

        button2.onMouseDown = function () {
            //this.fillColor = 'red';
            //counter -= 10;
            parameter1+=12;
            alert(parameter1);
            
            
        }
        
    }

    return parameter1;

}






