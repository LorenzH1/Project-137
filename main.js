video = "";
status = "";
object = "";
object = [];

function preload(){
    
}

function setup(){
    canvas = createCanvas(480, 380);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();
}

function draw(){
    image(video, 0, 0, 480, 380);

    if(status != ""){
        objectDetector.detect(video, gotResult);
        for (i=0; i < object.length; i++){
            document.getElementById("status").innerHTML = "Status: Object Detected";
            document.getElementById("number_of_objects").innerHTML = "Number of objects detected are: "+object.length;

            fill("#FF0000");
            percent = floor(object[i].confidence * 100);
            text(object[i].label + " " + percent + "%", object[i].x + 15, object[i].y + 15);
            noFill();
            stroke("#FF0000");
            rect(object[i].x, object[i].y, object[i].width, object[i].height);

            if (object = object[i].label){
                varaiable_name_holds_webcamLiveView.stop();
                objectDetector.detect(gotResult);
                document.getElementById("status").innerHtml = "Status: " + object + "has been found!";
                var synth = window.speechSynthesis;
                SpeechSynthesisUtterance("object mentioned found") = utterThis;
                synth.speak(utter_this);
            }
            else{
                document.getElementById("status").innerHTML = "Status: Object Mentioned Not Found";
            }

        }
    }
}

function gotResult(error, results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        object = results;
    }
}

function Start(){
    objectDetector = ml5.objectDetector('cocossd', modelLoaded);
    document.getElementById("status").innerHTML = "Status: Detecting Objects";
    object = document.getElementById("object_input").value;
}

function modelLoaded(){
    console.log("model loaded");
    status = true;
}