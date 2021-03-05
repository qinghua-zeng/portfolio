//09 一对方形按钮=========
//20.10.17 增加了显示按钮信息的文字
class mouseButton2 {
    constructor(x, y, content) {
        this.x = 5;//主要参数


        this.base = new Point(x, y);
        this.h = 20;
        this.w = 50;
        this.x1 = this.base.x;
        this.x2 = this.base.x + this.w;
        this.y1 = this.base.y;
        this.y2 = this.base.y + this.h;
        this.y3 = this.base.y + this.h + this.h;

        this.text = new showInfo();
        this.content = content;



    }
    draw(event) {
        this.button1 = new Path.Rectangle(this.base, new Size(this.w, this.h));
        this.button1.fillColor = 'yellow';

        this.button2 = new Path.Rectangle(new Point(this.base.x, this.base.y + this.h), new Size(this.w, this.h));
        this.button2.fillColor = 'red';

        if (event.point.x > this.x1 && event.point.x < this.x2 && event.point.y > this.y1 && event.point.y < this.y2) {
            this.x += 1;

        }
        if (event.point.x > this.x1 && event.point.x < this.x2 && event.point.y > this.y2 && event.point.y < this.y3) {
            this.x -= 1;
            //alert(this.x);
        }

        //显示button 信息
        this.text.draw(this.content, this.x1 + 5, this.y1);

    }
}
