window.onload=function(ev){
	/*定时器 */
	var boxLeft=document.getElementById("boxLeft");
	var boxRight=document.getElementById("boxRight");
	var box2=document.getElementById("box2");
	var box3Left=document.getElementById("box3Left");
	var box3=document.getElementById("box3");

	boxLeft.onclick=function(){
		move(box2,"left",800,18);
	}
	boxRight.onclick=function(){
		move(box2,"left",200,18);
	}
	box3Left.onclick=function(){
		move(box3,"width",200,18,function(){
			move(box3,"height",200,18,function(){
		});
		});
	}
    /*参数
    *obj：执行动画的对象
    *attr:执行属性
    *target目标位置
    *speed:速度
    *callback:回调函数
    */
    // var timer;
    function move(obj,attr,target,speed,callback){
    	clearInterval(obj.timer);
    	var i;
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
    			callback && callback();
    		}
    	},100);
    }
   

    // 图片轮播2
    var outer=document.getElementById("outer");
    var imgList=document.getElementById("imgList");
    var navDiv=document.getElementById("navDiv");
    // 图片列表宽=outer的宽*图片个数
    imgList.style.width=parseInt(getComputedStyle(outer,null).width)*imgList.children.length+"px";
    // 标签位置=outer/2-navDiv/2
    navDiv.style.left=(outer.offsetWidth-navDiv.offsetWidth)/2+"px";
    // navDiv.style.left=(parseInt(getComputedStyle(outer,null).width)-parseInt(getComputedStyle(navDiv,null).width))/2+"px";
    //点击a标签，图片切换 
    var a=navDiv.getElementsByTagName("a");
    for (var i = 0; i <a.length; i++) {
    	(function(i){
    		a[i].onclick=function(ev) {
    			clearInterval(timer);
    			setA(i);
    			move(imgList,"left",-i*outer.offsetWidth,20,function(){
    				autoChange();
    			});
    			
    		}
    	}(i))
    }
   
    //自动切换图片
    var timer;
    var index=0
    function autoChange(){
    timer= setInterval(function(){
     	index++;
     	if (index>imgList.children.length-1) {
     		index=0;	
     		imgList.style.left=0;
       	}
       	move(imgList,"left",-index*outer.offsetWidth,20,function(){
       		setA(index);
       	});
     },3000);
    }
    // a标签点击复位
    function setA(index){
    	for (var i = 0; i <a.length; i++) {
    	a[i].style.backgroundColor="";
    	}
    	a[index].style.backgroundColor="black";
    }
    autoChange();
}