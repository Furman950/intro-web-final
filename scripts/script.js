$(document).ready(function() {

    $('#nav-placeholder').load("nav.html");
    $('#1, #2, #3').each(function() {
        var changeSize = false;
        $(this).click(function() {
            if(!changeSize) {
                $(this).animate({fontSize: "22px"}, 100);
                changeSize = true;
            }
            else {
                $(this).animate({fontSize: "16px"}, 100);
                changeSize = false;
            }
        });
    });
    //Slideshow code
    var image = document.getElementById("image");

    var imageArray = [/*Set images here*/];

    var imageIndex = 0;

    function changeImage() {
        image.setAttribute("src",imageArray[imageIndex]);
        imageIndex++;
        if (imageIndex >= imageArray.length) {
            imageIndex = 0;
        }
    }
    window.onload = function() {
        setInterval(changeImage, 2000);
    }

    //Bar graph
    var canvas = document.getElementById("myCanvas");
    var ctx = canvas.getContext("2d");
    var interval;
    var height1 = 550;
    var height2 = 550;
    var height3 = 550;



    function drawGraph() {
        interval = setInterval(function() {
            ctx.clearRect(0, 0, ctx.width, ctx.height);
            ctx.fillStyle = "rgb(237, 112, 59)";
            ctx.beginPath();

            ctx.moveTo(100, 550);
            ctx.lineTo(100, height1);
            ctx.lineTo(200, height1);
            ctx.lineTo(200, 550);
            ctx.fill();

            ctx.fillStyle = "rgb(102, 100, 99)";
            ctx.beginPath();
            ctx.moveTo(300, 500);
            ctx.lineTo(300, height2);
            ctx.lineTo(400, height2);
            ctx.lineTo(400, 500);
            ctx.fill();

            ctx.fillStyle = "rgb(102, 100, 99)";
            ctx.beginPath();
            ctx.moveTo(500, 550);
            ctx.lineTo(500, height3);
            ctx.lineTo(600, height3);
            ctx.lineTo(600, 550);
            ctx.fill();

            height1 -= 10;
            height2 -= 5;
            height3 -= 5;
            console.log(height1);
            console.log(height2);
            console.log(height3);

            if (height2 < 375) {
                height2 = 375;

                if (height3 < 200) {
                    height3 = 200;
                }

                if (height1 == 50) {

                    clearInterval(interval);
                }
            }
        }, 5);
    }
    drawGraph();

    //Adding hours
    $("#hours").fadeIn(1000);
    
    var hoursCanvas = document.getElementById("hours");
    var hoursCtx = hoursCanvas.getContext("2d");
    var height = 70;
    var hours = 250;

    hoursCtx.font = "20px Oxygen";


    while (true) {
        if (height == 570)
            break;
        
        hoursCtx.fillText(hours + " hours-", 150, height);
        height += 100;
        hours -= 50;
    }
    
    //Adding company names
    
    $("#company").fadeIn(1250);
    var companyCanvs = document.getElementById("company");
    var companyCtx = companyCanvs.getContext("2d");
    
    companyCtx.font = "20px Oxygen";
    companyCtx.fillText("Our company", 374, 50);
    companyCtx.fillText("Company x", 590, 50);
    companyCtx.fillText("Company y", 790, 50);
    
    























});