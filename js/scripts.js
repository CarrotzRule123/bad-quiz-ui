$(function(){
    
    var ans = ""
    $('.random').hide();
    $('.ok').hide();

    $("button.answer").on('click',function () {
        $('.random').show();
        $('.ok').show();
        alert("Oops! You're not allowed to use the quiz buttons. Use the random button instead.")
    });

    function setCss(element){
        $(element).css({
            "text-shadow":"0 3px 2px rgba(0,0,0,0.4)",
            "webkitTransform":"scale(1.1)",
            "MozTransform":"scale(1.1)",
            "OTransform":"scale(1.1)",
        });
    }

    $("button.random").on('click',function () {
        var count=1
        var id = setInterval(function(){
            $("button.btn").css({
                "webkitTransform":"scale(1.0)",
                "MozTransform":"scale(1.0)",
                "OTransform":"scale(1.0)",
            });
            if(count==5){
                count=1
            }
            if(count==1){
                setCss("#one")
                ans="one"
            }else if(count==2){
                setCss("#two")
                ans="two"
            }else if(count==3){
                setCss("#three")
                ans="three"
            }else{
                setCss("#four")
                ans="four"
            }
            count=count+1
        }, 200);
        setTimeout(function(){ 
            clearInterval(id)
        }, Math.floor(Math.random() * 1001 ) + 2500 );
    });

    $("button.ok").on('click',function () {
        if(ans=="three"){
            alert("Oops! This option is unavailable.")
            $("#three").fadeOut()
        }else if(ans==""){
            alert("Oops! You didn't select an option.")
        }else{
            alert("Sorry. Your answer is incorrect. Please try again.")
        }
    });

    $("button.skip").on('click',function () {
        alert("Woops! No skipping!")
        $(".skip").fadeOut()
    });

    $("button.exit").on('click',function () {
        alert("Woops! You can't exit either!")
        $(".exit").fadeOut()
    });

    $("button.start").on('click',function () {
        window.location="quiz.html"
    });
});	