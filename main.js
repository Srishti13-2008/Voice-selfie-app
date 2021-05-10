var SpeechRecognition=window.webkitSpeechRecognition;
var recognition=new SpeechRecognition();
var textbox=document.getElementById("textbox")
function start(){
    document.getElementById("textbox").innerHTML="";
    recognition.start();
   
}
recognition.onresult=function(event){
    console.log(event);
    var content=event.results[0][0].transcript;
    textbox.innerHTML=content;
    if(content=="take my selfie"){
        console.log("taking selfie");
        speak();
    }
}
function speak(){
    var synth=window.speechSynthesis
    speak_data=document.getElementById("textbox").value;
    var utterthis=new SpeechSynthesisUtterance(speech_data)
    synth.speak(utterthis)
    Webcam.attach(camera)
    setTimeout(function(){
        take_selfie()
        save ()
    },5000);
}
camera=document.getElementById("camera")
Webcam.set({
    width: 350,
    height: 250,
    image_format: 'jpeg',
    jpeg_quality: 90
});
function take_selfie(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="selfie_image" src="'+data_uri+'">'
    });
}
function save(){
    var link=document.getElementById("link")
    image=document.getElementById("selfie_image").src 
    link.href=image
    link.click();
}