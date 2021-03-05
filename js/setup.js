paper.install(window);
// Keep global references to both tools, so the HTML
// links below can access them.

window.onload = function () {
    //00 所有预先设置部分
    setUp();
    //00 所有预先设置部分
    myDrawingSetup();
    //00 所有预先设置部分
    function setUp() {
        //01 创建画布
        paper.setup('myCanvas');//01 
        //02 创建我的鼠标事件,myMouseEvent 必须是全局变量
        myMouseEvent = new Tool();//02 
        //03 创建画布显示区域
        fx(0, 0, 600, 600);//03 
        //04 创建显示文字定义模块===================================

        //05

    }
    view.onFrame = draw;

    myMouseEvent.onMouseDown = mouseDown;

    //==============================================================================================
    //01 所有绘画内容的变量设定都在这
    function myDrawingSetup() {
        buttons = new Array;//加载鼠标按钮模块
        texts2 = new Array;//加载文字模块
        //=================================================================

        curve2 = new curve1();

        //鼠标按钮集合================================================
        buttons.push(new mouseButton2(550, 440, "0 cl X"));
        buttons.push(new mouseButton2(550, 500, "1 cl Size"));
        buttons.push(new mouseButton2(550, 560, "2 cl Y"));
        //===========================
        //pts = new Points2D1();
        pts2= new PointsBoundIn();
        //===========================
        //cl = new circle1(pts)
        cl2 = new circle2();
        rt1= new rect1();

        //文字显示集合
        texts2.push(new showInfo1("ppp", 20, 500));




        sp = new Path();
        sp.strokeColor = 'black';
        sp.fillColor = "black";

        //myPath = new Path();
        //==
    }


    //02 鼠标点击事件模块==//==================================================================================
    function mouseDown(event) {
        //01 第一步创建画布，显示
        canvasReset1 = new fx(0, 0, 600, 600);
        canvasReset1 = new fx(0, 0, 550, 600);

        curve2.draw(event);
        

        //02 鼠标按钮刷新，显示
        for (let i = 0; i < buttons.length; i++) {
            buttons[i].draw(event);
        }

        //03 point2D 
        //pts.xNum = buttons[0].x; //赋值模块
        //pts.yNum = buttons[2].x;
        pts2.boundIn=curve2.bound;
        pts2.xNum= buttons[0].x;
        pts2.yNum= buttons[2].x;
        //pts.draw();// 刷新显示模块
        pts2.draw();


        //04  圆
        
        
        //cl2.r = buttons[1].x;
        
        
        //cl2.pts1=pts2.thePoints;
        //cl2.draw();
        rt1.h=buttons[2].x;
        rt1.pts=pts2.thePoints;
        rt1.draw();
        
        //曲线部分
        
        //path布尔运算=====================
        var qqq=itst(curve2, rt1);

        //qqq.draw();






        //=============
        /* copy.length = 0;
        for (let index = 0; index < result.length; index++) {
            copy.push(result[index].clone());
            copy[index].position.y +=200;
            copy[index].fillColor = 'green';
            copy[index].fullySelected = false;
        } */

        //相交生成的图形
        //result = new Array();



        //qqq = itst(curve2, cl);
        


        //alert(qqq.shapes.length);
        //==========================================================================
        //copy = new Array();
        /* copy.length = 0;
        for (let index = 0; index < qqq.length; index++) {
            copy.push(qqq[index].clone());
            copy[index].position.y += 200;
            copy[index].fillColor = 'orange';
            copy[index].fullySelected = false;
        } */


        //==========================================================================

        //文字显示模块2

        texts2[0].text = "ll" + buttons[0].x+","+buttons[2].x+","+pts2.circles.length+","+rt1.pts.length; //赋值文字信息
        texts2[0].x = 20;
        texts2[0].y = 580;


        //文字刷新，显示
        for (let index = 0; index < texts2.length; index++) {
            texts2[index].draw();
        }




        //在这上面写代码=========================================
    }



    //let user = new User("qinghua zeng");
    //let jj = pts instanceof Points2D1;
    //alert('point2d:' + jj);
    //user.sayHi();
    //let lp=pts instanceof Object;

    //鼠标交互按钮显示=================================================================================================
    //==============================
    //==========================================================================================
    //==============================



    //鼠标按钮创建与绑定鼠标事件=============



    //02 实时刷新模块，所有需要实时刷新的内容都在这
    function draw(event) {

    }
    //在这上面写代码=================================================================
}