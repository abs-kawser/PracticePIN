document.getElementById('generate-id').addEventListener('click',function(){
 var RandomNumber= Math.floor(Math.random() *8000+ 2000);
 document.getElementById('form-id-one').value=RandomNumber;
})

 
function display(number) {
   var FromID= document.getElementById('form-id-two').value;
   var totalNum=FromID.length;
   if (totalNum<4) {
   FromID=FromID+ number;
   document.getElementById('form-id-two').value=FromID 
   }
   
}
  // display(5) value pass 
 
 function OneCut() {
  var OneCut=document.getElementById('form-id-two').value;
  OneCut=OneCut.slice(0,-1);
  document.getElementById('form-id-two').value=OneCut;
 }

 function AllCut() {
  document.getElementById('form-id-two').value=''
 }



//  Right and Wrong Message displayed
 function submitBtn() {
   var NumberPadOne= document.getElementById('form-id-one').value
   var NumberPadTwo= document.getElementById('form-id-two').value
 
 
   //alert message show
 if (NumberPadOne== '' ||NumberPadTwo=='') {
     if (NumberPadOne== '') {
   alert('Generate Pin Number First. Click "Generate Pin" Button To Generate Pin Number.');
     }
     else {
      alert('Enter the 4 digit code by using the Number Pad.');
 }
    return;
 }

// Right message show
 if (NumberPadOne ==NumberPadTwo ) 
 {
      var Right= document.getElementById('right')
      Right.style.display='block'
      document.getElementById('rong').style.display = 'none';
 }
// wrong message show
else{
   var Rong=document.getElementById('rong')
   Rong.style.display='block'
   document.getElementById('right').style.display='none';

}
// number of trying message show
 var TryTime = document.getElementById('Trying-limit');
   TryTime.style.display ="block";    
 var convertNumber=parseFloat(TryTime.innerHTML);
 var totalNumber =convertNumber-1;
 TryTime.innerHTML=totalNumber+'try left';
  
 
 if (totalNumber == 0){
   let throwMessage  = "Your chance is over !"
   TryTime.innerHTML = throwMessage;
   
   } 
}     
