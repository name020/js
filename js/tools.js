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


  /*
    向某个元素中添加class属性值
    obj：要添加class属性的元素
    cn  :要添加的class值
    */

    function addClass(obj,cn){
    	if (!hasClass(obj,cn)) {
    		obj.className+=" "+cn;  
    	}	
    }
    // 删
    function removeClass(obj,cn){
    	obj.classList.remove(cn);
    }
    // 改
    function updateClass(obj,cn){
    	obj.className=cn;  
    }
    //切换
    function toggleClass(obj,cn){
    	if (hasClass(obj,cn)) {
    		removeClass(obj,cn);
    	}else{
            addClass(obj,cn);
        }	
    }
    // 判断是否重复
    function hasClass(obj,cn){
    	var reg=new RegExp("\\b"+cn+"\\b");
    	return reg.test(obj.className);
    	
    }