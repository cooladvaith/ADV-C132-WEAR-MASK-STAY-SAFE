prediction_1 = ""

Webcam.set({
    width: 350,
    height: 300,
    image_format: 'png',
    png_quality: 90
});

camera = document.getElementById("camera");

Webcam.attach('#camera');


function take_snapshot() {
    Webcam.snap(function (data_uri) {
        document.getElementById("result").innerHTML = '<img id="captured_image" src="' + data_uri + '"/>';
    });
}

console.log('ml5 version:https://teachablemachine.withgoogle.com/models/BtVb9cdvI/model.json', ml5.version);


function modelLoaded()
{
    console.log("Model Loaded");
}

function check()
{
    console.log("Model Loaded")

    else {

    }
} 

function gotResult(error,results)
{
    if
    {

    }
}
//create your model and store it in var classifier 

//define function modelLoaded

//define function check() 

//define function gotResult(error, results)