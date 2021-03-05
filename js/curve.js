//10 贝塞尔=========
class curve1 {
    constructor() {
        this.myShape = new Path();
        //有效区域
        this.x1=0;
        this.x2=550;
        this.y1=0;
        this.y2=600;
        this.ifIn;
        //矩形边框
        this.bound;
        

    }
    draw(event) {
        this.ifInside(event.point);
        if(this.ifIn==true){
            this.myShape.add(event.point);
            this.myShape.closed = true;
            this.myShape.smooth();
            this.myShape.fillColor = 'black';
            this.myShape.strokeWidth = 2;
            //this.myShape.strokeColor="black";
            this.myShape.fullySelected = true;
            //var bound=this.myShape.bounds;
            this.bound=this.myShape.bounds;//曲线的矩形边框
            //bound.fillColor("red");
        }
        

        
    }
    
    ifInside(point){
        if(point.x>this.x1 && point.x<this.x2 && point.y>this.y1 && point.y<this.y2){
            this.ifIn=true;
        
        }else{
            this.ifIn=false;
        }
    }


}