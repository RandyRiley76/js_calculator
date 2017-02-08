var runningEquation = ['0'];
var runningElement = 0;
var curNumber = "0";
var symbolLast = false;
var largeDisplay = document.getElementById("mainText") ;
var smallDisplay = document.getElementById('smallText');
//document.getElementById("demo").innerHTML = "Paragraph changed!";
function numPressed(num){
  if(symbolLast == true){
    symbolLast = false;
    runningElement++;
    runningEquation[runningElement]= "0";
    curNumber = "0";
  }
  if(curNumber=="0"){
    curNumber = num;
  }else{
    curNumber += String(num);
  }
  if(runningEquation[runningElement] =="0"){
    largeDisplay.innerHTML = curNumber;
    runningEquation[runningElement] = num;
    smallDisplay.innerHTML = runningEquation.join('');
    //make sure it can fit on the screen
  }else if(String(runningEquation[runningElement]).length < 9){
    largeDisplay.innerHTML = curNumber;
    console.log(runningEquation[runningElement].length);
    runningEquation[runningElement] += String(num);
    smallDisplay.innerHTML = runningEquation.join('');
  }

}
function decimal(){
  if(String(curNumber).indexOf('.') == -1){
   if(curNumber=="0"){
     numPressed("0.");
    }else{
      numPressed(".");
    }
  }
}
function clearElement(){
 if (runningElement==0){
    runningEquation[0]="0";
    largeDisplay.innerHTML = "0";
    smallDisplay.innerHTML = "0";
    curNumber = "0";
  }else{
    symbolLast = !symbolLast;
    runningEquation.pop();
    runningElement--;
    largeDisplay.innerHTML = runningEquation[runningElement];
    curNumber = runningEquation[runningElement];
    smallDisplay.innerHTML = runningEquation.join('');
  }
}
function mathPressed(pressed){
  if(symbolLast != true){
    largeDisplay.innerHTML = pressed;
    runningElement++;
    runningEquation[runningElement]= pressed;
    symbolLast = true;
    curNumber ="0";
    console.log(runningEquation);
  }
}
function equals(){
  var theAnswer = eval(runningEquation.join(''));
  theAnswer = (Math.floor(( theAnswer )*1000))/1000;
  if(String(theAnswer).length<9){
    largeDisplay.innerHTML = theAnswer;
    smallDisplay.innerHTML = theAnswer;
    runningEquation[0] = theAnswer;
    runningElement=0;
    curNumber=theAnswer;
  }else{
    allClear();
    largeDisplay.innerHTML = "TO LARGE";
    smallDisplay.innerHTML = "MAXIMUM NUMBER EXCEEDED";

  }
}
function allClear(){
  largeDisplay.innerHTML = "0";
  curNumber = "0";
  smallDisplay.innerHTML = "0";
  runningEquation = ["0"];
  runningElement=0;
}
