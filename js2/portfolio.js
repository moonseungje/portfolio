$(document).ready(function(){
	
	//이벤트 썸네일이미지 마우스오버
	$("#event> div> div").hover(
		function(){
			$(this).addClass("ho");			
		} , 
		function(){
			$(this).removeClass("ho");
		}
	);
	//이벤트 썸네일이미지 클릭
	/*$(".portfolio-items> div").click(function(){
		const x = $(this).children("img").attr("src");		
		const y = x.substr(-4);// ".jpg" 또는 ".png"...	
		const z = x.slice(0,-4);//예_ "images/event-1"부분
		const zz = z + "_big" + y;
		$("#popup img").attr("src" , zz);
		const txt = $(this).children("img").attr("alt");				
		$("#popup img").attr("alt", txt);  //alt속성값 부여
		$("#popup h3").text( txt ); //h3안 콘텐츠 텍스트 부여
		$("#popup").fadeIn();
		$("body").css("overflow","hidden");
		$("nav").css("background","none");
	});
	//팝업 큰이미지 닫기
	$("#popup img").click(function(){
		$("#popup").fadeOut();
		$("body").css("overflow","auto");
	});*/
	
	
	$(".portfolio-items> div").click(function(){
		$("nav").removeClass("act");
	});
	
	$("#black button").click(function(){
		$("nav").addClass("act");
	});
	

	
	
	//상단 메뉴 부드럽게 이동
	$("nav a, #top a").click(function(){
		//큰화면에서만, 부드럽게 스크롤이동
		if( $(window).width() > 768 ){
			$("html,body").stop().animate({scrollTop : $(this.hash).offset().top });
		}
		//상단 메뉴 - 활성화 유지 (색변경)
		/*if( $("nav a") ){
			$(this).addClass("active").siblings().removeClass("active");
		}*/
	});
	
	//상단 한글자씩 나오는 기능 (타자치는 효과)
	const typing = "안녕하세요. \n문승제의 포트폴리오입니다."
	console.log(typing);
	//$("h1").html( typing[4]  );  "요"
	let i = 0; 
	let txt = "";
	function type(){
		if( i < typing.length ){			
			txt += typing[i];
			document.getElementById("typing").innerText = txt;
			i++;
			setTimeout( type, 150 );
		}
	}
	type();
	
	//휴대폰에서는 상단 배경색 보임
	if( $(window).width()<= 600 ){
		$("nav").addClass("act");
		
	} else{	//휴대폰 아닐때
		//화면 스크롤시 상단 배경색 생김
		$(window).scroll(function(){
			if( $(window).scrollTop() > 100 ){
				
				
					$("nav").addClass("act");
				
			} else {
				$("nav").removeClass("act");
			}
		});
	}
	
	//((모바일이 아닌 화면))스크롤을 내릴때마다 작품이 하나씩 보임
	if( $(window).width()> 600 ){
		$(window).scroll(function(){
			
			if( $(window).scrollTop()>600 ){            
        $(".w1").stop().animate({width:"70%"});
        $(".w2").stop().delay(600).animate({width:"60%"});
        $(".w3").stop().delay(1000).animate({width:"80%"});
        $(".w4").stop().delay(1400).animate({width:"80%"});
        $(".w5").stop().delay(1800).animate({width:"70%"});
				$(".w6").stop().delay(2200).animate({width:"50%"});
        } 
			
			
			if( $(window).scrollTop()>0){
				$("nav a").eq(0).addClass("active").siblings().removeClass("active");
			}
			if( $(window).scrollTop()>800){
				$(".menu").eq(1).addClass("act").siblings().removeClass("act");
			}
			if( $(window).scrollTop()>1500 ){
				$("#portfolio2> section").eq(0).addClass("act");
			}
			if( $(window).scrollTop()>2300 ){
				$("#portfolio2> section").eq(1).addClass("act");
			}
			if( $(window).scrollTop()>3200 ){
				$("#portfolio2> section").eq(2).addClass("act");
			}
			if( $(window).scrollTop()>4000 ){
				$("#portfolio2> section").eq(3).addClass("act");
			}
			if( $(window).scrollTop()>4800 ){
				$("#portfolio2> section").eq(4).addClass("act");
			}
		});	
			
	}	else{
					$(window).scroll(function(){
					//console.log($("#pro").position().top   );
					const pro = $("#pro").position().top;
					if( $(window).scrollTop()>pro){
					$(".w1").stop().animate({width:"70%"});
					$(".w2").stop().delay(600).animate({width:"60%"});
					$(".w3").stop().delay(1000).animate({width:"80%"});
					$(".w4").stop().delay(1400).animate({width:"80%"});
					$(".w5").stop().delay(1800).animate({width:"70%"});
					$(".w6").stop().delay(2200).animate({width:"50%"});
				}
				});
		}
	
		//((모바일이 아닌 화면))스크롤을 내리는 정도에따라 메뉴의 색변경
		if( $(window).width()> 600 ){
			$(window).scroll(function(){
				const eventtop = $("#portfolio").position().top;
				const contacttop = $("#contact").position().top;
				if( $(window).scrollTop()>0){
					$("nav a").eq(0).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop()>800){
					$("nav a").eq(1).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop()>1600 ){
					$("nav a").eq(2).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop()>eventtop-300 ){
					$("nav a").eq(3).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop()>contacttop-500 ){
					$("nav a").eq(4).addClass("active").siblings().removeClass("active");
				}
			});		
		} else {
			$(window).scroll(function(){
				const eventtop = $("#portfolio").position().top;
				const contacttop = $("#contact").position().top;
				if( $(window).scrollTop()>0){
					$("nav a").eq(0).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop()>700){
					$("nav a").eq(1).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop()>1600 ){
					$("nav a").eq(2).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop()>eventtop-300 ){
					$("nav a").eq(3).addClass("active").siblings().removeClass("active");
				}
				if( $(window).scrollTop()>contacttop-300 ){
					$("nav a").eq(4).addClass("active").siblings().removeClass("active");
				}
			});
		}
		
		
		

		
		




		
		
		
		
		
		
		
		
		
		
		
		
		
		
		
		

	
});//끝









