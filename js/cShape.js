//====================
class cShape {
    constructor(){  //
        //input
        this.strokeWidth=0;
        this.fillColor="red";

        //output
        this.shapes=new Array;

    }

    draw(){
        for (let index = 0; index < this.shapes.length; index++) {
            //copy.push(qqq[index].clone());
            this.shapes[index].position.y += 300;
            this.shapes[index].fillColor = this.fillColor;
            this.shapes[index].strokeColor='red';
            this.shapes[index].strokeWidth = this.strokeWidth;
            this.shapes[index].fullySelected = false;
            
        }
    }

}

//==========================================================================
function itst(tempPath, tempArray) {
    var result = new cShape();//将Array 定义成一个新类
    //result.length = 0;
    for (let index = 0; index < tempArray.shapes.length; index++) {
        result.shapes.push(tempPath.myShape.intersect(tempArray.shapes[index], false))

    }
    result.draw();
    return result;
}

