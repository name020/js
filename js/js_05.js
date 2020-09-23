window.onload=function(ev){
	/*定时器 */
	var boxLeft=document.getElementById("boxLeft");
	var boxRight=document.getElementById("boxRight");
	var box2=document.getElementById("box2");
	var box3Left=document.getElementById("box3Left");
	var box3=document.getElementById("box3");

	boxLeft.onclick=function(){
		move(box2,800,18);
	}
	boxRight.onclick=function(){
		move(box2,200,18);
	}
	box3Left.onclick=function(){
		move(box3,"width",200,18);
	}
    /*参数
    *obj：执行动画的对象
    *attr:执行属性
    *target目标位置
    *speed:速度
    */
    // var timer;
    function move(obj,attr,target,speed){
    	clearInterval(obj.timer);
    	var i;
    	console.log(parseInt(getComputedStyle(obj,null).left));
    	if (parseInt(getComputedStyle(obj,null)[attr])>target) {
    		
    		speed=-speed;
    	}
    	
    	obj.timer=setInterval(function(){
    		i=parseInt(getComputedStyle(obj,null)[attr])+speed;
    		if (speed>0&&i>target||speed<0&&i<target) {
    			i=target;
    		}
    		obj.style[attr]=i+"px";
    		if (i===target) {
    			clearInterval(obj.timer);
	    	}
	    },100);
    }
}