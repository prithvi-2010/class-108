function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    Classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/aHhqAQpyd/model.json',modelLoaded);

}

function modelLoaded(){
    Classifier.classify(gotResults);
}

function gotResults(error,results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        r=Math.floor(Math.random()* 255)+1;
        g=Math.floor(Math.random()* 255)+1;
        b=Math.floor(Math.random()* 255)+1;
        
        document.getElementById("result_label").innerHTML = 'i can hear - '+ results[0].label;
        document.getElementById("result_confidence").innerHTML = 'Accuracy - '+ (results[0].confidence*100).toFixed(2)+" %";
        document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
        document.getElementById("result_confidence").style.color="rgb("+r+","+g+","+b+")";

        img= document.getElementById("alien1");
        img1= document.getElementById("alien2");
        img2= document.getElementById("alien3");
        img3= document.getElementById("alien4");

        if(results[0].label== "clap") 
        {
            img.src = 'aliens-01.gif';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if(results[0].label== "snap") 
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.gif';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.png';
        } else if(results[0].label== "bell") 
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.gif';
            img3.src = 'aliens-04.png';
        }else
        {
            img.src = 'aliens-01.png';
            img1.src = 'aliens-02.png';
            img2.src = 'aliens-03.png';
            img3.src = 'aliens-04.gif';
        }  
    }
}