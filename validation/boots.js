var remember = document.getElementById("olke777");
var elementsToHide = document.querySelector('.col-12.memo');
var bt= document.getElementById('btnn');
var elementsToHide2 = document.querySelectorAll('.col-12.luko');
var appeal = document.getElementById("appeal_region");
var olke = document.getElementById("olke");
const textInputs = document.querySelectorAll('input[type="text"]');

var blockTextInputs = document.querySelectorAll('input[type="text"]');

const textareaa = document.querySelector('textarea[type="text"]');
var txta = document.getElementById("w3review");
var selectBoxes = document.querySelectorAll('select');

var inputValues = [];
var ifcity='';
var ch_k=false;   ////////////////input bool
var ch_k_2=false; /////////////for all select bool
var ch_k_3=false; //////////// seher from chekked bool
var ch_k_4=false; /////////// checked for man woman bool
var ch_k_5=false; /////////// checked for muraciet novu bool
var ch_k_6=false; ////textarea bool
remember.addEventListener("click", function() {
    if (remember.checked) {
    
        elementsToHide2.forEach(function(element) {
            element.style.display = 'none';
          });
            elementsToHide.style.display = "block";		
            blockTextInputs = Array.from(textInputs).filter(input => {
                const styles = window.getComputedStyle(input);
                return styles.getPropertyValue('display') === 'block';
              });
              
             // console.log(blockTextInputs);	
    } else {
        elementsToHide2.forEach(function(element) {
            element.style.display = 'block';
          });
       elementsToHide.style.display = "none";	
       blockTextInputs = document.querySelectorAll('input[type="text"]');
    }
});

bt.addEventListener("click", function() {
	check(txta);

    blockTextInputs.forEach(input => {
        check(input);
    });
	

    selectBoxes.forEach(slct => {
        check_slc(slct);
    });

        checkforinput();
        checkforselect();
        checkforcitis();
        checkRadios();
        checkRadios2();
        checktexarea();
        if (remember.checked) 
        {if(ch_k && ch_k_2 &&  ch_k_3 && ch_k_4 && ch_k_5 && ch_k_6)
            {
                ifcity=checkforcitis();
                createEmptyPage();
            }
        } else if(ch_k && ch_k_2 && ch_k_4 && ch_k_5 && ch_k_6)
        {
            createEmptyPage();
        }

   // createEmptyPage();
   // alert(ch_k+" "+ch_k_2+" "+ch_k_5+" "+ch_k_4)
});
 
        


function check(ads){
	if (ads.value === "") {
            ads.style.border = "1px solid red";   
        } else {         
            ads.style.border = ""; 
        }
};

function check_slc(adsl){
	if (adsl.selectedIndex==0) {
            adsl.style.border = "1px solid red";  

        } else {
            adsl.style.border = ""; 
        }
};


function checkRadios() {
    var man = document.getElementById("man");
    var woman = document.getElementById("woman");
    
    if (man.checked) {
        ch_k_4=true;
       return man.id;
       
    } else if (woman.checked) {
        ch_k_4=true;
        return woman.id;
    } else {
        alert('Please select an option (kisi ya qadin)');
         return null; 

    }
}

function checkRadios2() {
    var offer = document.getElementById("offer");
    var appli = document.getElementById("appli");
    var complaint = document.getElementById("complaint");

    if (offer.checked) {
        ch_k_5=true;
         return document.querySelector('label[for="offer"]').textContent;
    } else if (appli.checked) {
        ch_k_5=true;
         return document.querySelector('label[for="appli"]').textContent;
    } else if (complaint.checked) {
        ch_k_5=true;
        return document.querySelector('label[for="complaint"]').textContent;
        
    } else {
        alert('Please select an option (muracietin novu)');
        return null;
    } 
} 

function checkforinput(){
    while (inputValues.length) { 
        inputValues.pop(); 
    } ;
    for (const input of blockTextInputs) {

        if (input.value == "") {
            alert("Tam doldurulmayib");
            ch_k=false;
            break;         
        }else 
        {
           
            ch_k=true;
            inputValues.push(input.value); 
           
        }
    }
};

function checkforselect(){
    var sosial = document.getElementById("sosial");
    var citi = document.getElementById("citis");
     if(sosial.selectedIndex==0 )
    {ch_k_2=false;
        alert("Sosial durumu secin")
    }else if (citi.selectedIndex==0){
        ch_k_2=false;
        alert("Muraciet movzusunu secin")
    }else
    {
        ch_k_2=true;
        return sosial.value +" "+citi.value;       
    }    
};

function checkforcitis(){
if(remember.checked){
    if(appeal.selectedIndex==0){
        ch_k_3=false;
        alert("Seheri secin")
    }else
    {
        ch_k_3=true;
        return appeal.value;
    }
}
}

function checktexarea(){
    if(txta.value==''){
        alert("Muraciet formasini doludurun")
        ch_k_6=false;
    }else 
    {
        ch_k_6=true;
        return txta.value;
    }
    }

txta.addEventListener("keyup",function(){
     let fg = 500-txta.value.length;
     document.querySelector(".muraciet").textContent="Muraciet - "+fg+" simvol";
})


function createEmptyPage() {
  var olke='';
  var seher='';
   var txt = checktexarea();
   var slct = checkforselect();
   var radiob1 = checkRadios();
   var radiob2 = checkRadios2();
    const newWindow = window.open('', '_blank');
    inputValues.forEach(function(element) {
        console.log(element);
    });
    if(remember.checked)
    {
       olke="azerbaycan";
       seher=ifcity;
    };

    newWindow.document.write(`
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <title>Congratulations</title>
    </head>
    <body>
        <div id="contentDiv">
           <h1 style="color:green">Congratulations</h1>
                <script>
                var inputValues = ${JSON.stringify(inputValues)};
                inputValues.forEach(function(element) {
                    document.write("<p>" + element + "</p>");
                });
                </script> 
                <p>${olke}</p>
                <p>${seher}</p>
                <p>Selections: ${slct}</p>
                <p>Cins: ${radiob1}</p>
                <p>Muracietin novu: ${radiob2}</p>
                <p>Muraciet : ${txt}</p>

        </div>
    </body>
    </html>
`);
    newWindow.document.close();
}


function validateNumberInput(input) {
    input.value = input.value.replace(/\D/g, '');
}