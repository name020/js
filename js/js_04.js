window.onload=function(ev){
	// 选项卡
	var allList=$("tab_header").getElementsByTagName("li");
    var allDom=$("tab_content").getElementsByTagName("ul");

    for (var i = 0; i < allList.length; i++) {
    	(function(i){
    		allList[i].onmouseover=function(ev){
    			for (var j = 0; j < allList.length; j++) {
    				allList[j].className="";
    				allDom[j].style.display="none";
    			}
    			this.className="selected";
    			console.log(i);
    			allDom[i].style.display="block";
    			}
    	}(i))
    }

	function $(id){
      return  typeof id=='string'?document.getElementById(id):null;
	}
	// 发表评论
	$("btn").addEventListener("click",function(ev){
		var comment=$("my_textarea").value;
		if (comment.length==0) {
            alert("不能为空");
            return;
		}
        var commentList=document.createElement("li");
        commentList.innerHTML=comment+'<a href="javascript:;" >删除</a>';

        $("commentList").insertBefore(commentList,$("commentList").children[0]);
        comment=null;
        console.log(comment);
        var del=$("commentList").getElementsByTagName("a");
        for (var i = 0; i <del.length; i++) {
        del[i].addEventListener("click",function(ev){
        	this.parentNode.remove();
        })
        }

	})
}