console.log("This is just to prove you can have your JavaScript separate from your HTML. For big and long javascripts, it might be useful to separate them");

window.onload = function() {
    document.getElementById("clock").innerHTML = currTime();
    console.log(currTime());


    //In javascript, to grab the last paragraph of our index.html, we would need to do this:
    var myPara = document.getElementById("lastBeginnerTutorial").getElementsByTagName("p")[4];
    console.log("paragraph 4 is: " + myPara.innerHTML);

    //jQuery statements start with a dollar sign
    var myPara2 = $("#lastBeginnerTutorial p:last-child");
    myPara2.addClass("jQueryTest");
    myPara2.delay(5000).fadeOut();
    myPara2.delay(5000).fadeIn();
    myPara2.css({ position: "relative", color: "red", backgroundColor: "black" });
    myPara2.animate({ left: "50px" });

};
