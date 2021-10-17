function startdance(){
    navigator.mediaDevices.getUserMedia({
        audio:true
    })  
    classifier=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/PZkXnU1Wg/model.json",modelReady)
  };
  
  function modelReady(){
      classifier.classify(gotResults);
      console.log("inside model ready")
  }
  
  function gotResults(error,results){
  if(error){console.error(error)}
  else{
    console.log(results) 
    random_r=Math.floor(Math.random()*255)+1;
    random_b=Math.floor(Math.random()*255)+1;
    random_g=Math.floor(Math.random()*255)+1;
    document.getElementById("result_lbl").innerHTML="I can hear- "+results[0].label;
    document.getElementById("result_confidence").innerHTML="accuracy- "+(results[0].confidence*100).toFixed(2)+"%";
    document.getElementById("result_lbl").style.color="rgb("+random_r+","+random_g+","+random_b+")";
    document.getElementById("result_confidence").style.color="rgb("+random_r+","+random_g+","+random_b+")";
  
    img1=document.getElementById("alien1")
    img2=document.getElementById("alien2")
    img3=document.getElementById("alien3")
    img4=document.getElementById("alien4")
  
    if(results[0].label=="chicken clucking"){
      img1.src="chicken.gif";
      img2.src="ggh.gif";
      img3.src="pig.gif";
      img4.src="AW3820029_00.gif";
    }
    else if(results[0].label=="pig"){
      img1.src="chicken.gif";
      img2.src="ggh.gif";
      img3.src="pig.gif";
      img4.src="AW3820029_00.gif";
    }
  
    else if(results[0].label=="eagle"){
      img1.src="chicken.gif";
      img2.src="ggh.gif";
      img3.src="pig.gif";
      img4.src="AW3820029_00.gif";
    }
  
    else{
      img1.src="chicken.gif";
      img2.src="ggh.gif";
      img3.src="pig.gif";
      img4.src="AW3820029_00.gif";
    }
    
  }
  }