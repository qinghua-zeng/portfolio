//06 Point2D =======================
class Points2D1 {
    constructor() {
        //input
        this.xBase = 30;
        this.yBase = 30;
        this.xNum=2;
        this.yNum=2;
        this.xLength = 40;
        this.yLength = 40;
        
        //output
        this.circles = new Array;
        this.thePoints = new Array;
        
    }

    draw(){
        this.thePoints.length = 0;
        this.circles.length = 0;
        for (let p = 0; p < this.xNum; p++) {
            for (let j = 0; j < this.yNum; j++) {
                var tempPoint = new Point(p * this.xLength + this.xBase, j * this.yLength + this.yBase);
                this.thePoints.push(tempPoint);
                //this.circles.push(new Path.Circle(tempPoint, 1));//用在屏幕上显示的点，需要显示的时候取消注释
                //=一个圆shape====================
            }
        }
        for (let w = 0; w < this.circles.length; w++) {
            this.circles[w].fillColor = 'black';
        }
    }

} 

//06.1 Point2D boundin=======================
class PointsBoundIn {
    constructor() {
        //Input
        this.boundIn ={x:100,y:100,width:200,height:200};
        //this.xBase = 30;
        //this.yBase = 30;
        this.xNum=5;
        this.yNum=5;
        //this.xLength = 40;
        //this.yLength = 40;
        //Output
        this.circles = new Array;
        this.thePoints = new Array;
        
    }

    draw(){
        this.thePoints.length = 0;
        this.circles.length = 0;
        for (let p = 0; p <= this.xNum; p++) {
            for (let j = 0; j <= this.yNum; j++) {
                var tempPoint = new Point(p * this.boundIn.width/this.xNum + this.boundIn.x, j * this.boundIn.height/this.yNum + this.boundIn.y);
                this.thePoints.push(tempPoint);
                //this.circles.push(new Path.Circle(tempPoint, 1));//用在屏幕上显示的点，需要显示的时候取消注释
                //=一个圆shape====================
            }
        }
        for (let w = 0; w < this.circles.length; w++) {
            this.circles[w].fillColor = 'black';
        }
    }

} 