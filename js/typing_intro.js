
$(function(){
		$(".type_intro").typed({
			strings: ["Hi there!^1000<br>Welcome to my website.^1000", "I'm "],
        showCursor: false,
        typeSpeed: 0.6,
        backSpeed: 0.6,
      callback: function(){
        part2();
      },
		});
    function part2(){
      $(".type_intro2").typed({
          strings: ["a junior at Stony Brook University.^500", "a Computer Science major.^500", "a designer.^500", "a developer.^500", "an engineer.^500", "Justin Chiu."],
          showCursor: false,
          typeSpeed: 0.8,
            backSpeed: 0.6,
      });

    }
});
