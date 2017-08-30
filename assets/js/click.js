$(function(){
		$(".yuan").on('click',function(){
			var img = $(this).children().attr('src');
			if(img == './image/yuan.png'){
				var qq = './image/yes.png';
			}else{
				var qq = './image/yuan.png';
			}

			$(this).children().attr('src',qq);
				console.log(img);//$("#img2").css('display')
			
		})
	})