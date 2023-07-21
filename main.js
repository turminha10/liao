function startClassification() {
    navigator.mediaDevices.getUserMedia({audio: true});
    classifier = ml5.soundClassifier('https://storage.googleapis.com/tm-model/wIIXMlvL4/model.json', modelReady);
}

function modelReady()
{
    classifier.classify(gotResuts);
}

var dog = 0;
var cat = 0;

function gotResuts(error, results)
{
if(error)
{
    console.error(error);
} else {
    console.log(results);
    random_number_r = Math.floor(Math.random() * 255) + 1;
    random_number_g = Math.floor(Math.random() * 255) + 1;
    random_number_b = Math.floor(Math.random() * 255) + 1;

    document.getElementById("result_label").innerHTML = 'som detectado é de um:  '+ results[0].label;
    document.getElementById("result_count").innerHTML = 'Cachorro detectado:  '+dog+  'gato detectado'+cat;
    document.getElementById("result_label").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
    document.getElementById("result_count").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";

    img = document.getElementById('animal_image'); 

    if (results[0].label == "latido")
    {
        img.src = 'bark.gif';
        dog = dog+1;
    } else if (results[0].label == "miado")
    {
        img.src = 'meow.gif';
        cat = cat+1;
    } else{
        img.src = 'listen.gif';  
    }
} 
}