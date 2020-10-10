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
  
    // 类的操作
    var boxBtn=document.getElementById("boxBtn");
    var boxDiv=document.getElementById("boxDiv");
    boxBtn.onclick=function(ev){
    	addClass(boxDiv,"temp1");
    	// removeClass(boxDiv,"temp1");
    	// updateClass(boxDiv,"temp1");
    }

    // 二级菜单
    // collapsed menuspan折叠
     var menu=document.getElementById("my_menu")
     var menuBtn=menu.getElementsByTagName("span");
     var menuDiv=menu.getElementsByTagName("ul");
     
     for (var i = 0; i < menuBtn.length; i++) {
     	//初始化二级菜单（折叠)
     	updateClass(menuBtn[i].nextElementSibling,"collapsed");
     	//
     	var openDiv=menuBtn[0].nextElementSibling;
     	(function(i){
        menuBtn[i].onclick=function(){
        
        	//切换菜单
        	toggleClass(menuBtn[i].nextElementSibling,"collapsed");
        	//判断已开菜单是否当前&&已开菜单不包含
        	if (openDiv!=menuBtn[i].nextElementSibling&&!hasClass(openDiv,'collapsed')) {
        		toggleClass(openDiv,"collapsed");
        	}
             openDiv=menuBtn[i].nextElementSibling;
        }
     	}(i));

     }
}