function getLoginPage(){
  let container2El = document.getElementById("container2");
  let divEl = document.createElement("div");
  divEl.classList.add("abc");
  container2El.appendChild(divEl);
let labelEmail = document.createElement("label");
labelEmail.classList.add("label");
labelEmail.textContent="Email";

let inputEmail = document.createElement("input");

inputEmail.setAttribute("type", "text");
inputEmail.placeholder="Enter your Email";
inputEmail.id="email";


let labelpwd = document.createElement("label");
labelpwd.classList.add("label2");
labelpwd.textContent="Password";

let inputPwd = document.createElement("input");

inputPwd.setAttribute("type", "password");
inputPwd.placeholder="Enter your Password";
inputPwd.id="password";

let LoginBtn = document.createElement("button");
LoginBtn.classList.add("button");
LoginBtn.textContent="Login";

LoginBtn.addEventListener("click", function(){
  let emailValue = inputEmail.value;
    let passwordValue = inputPwd.value;

 function getLogin(item){
    return item.email===emailValue && item.password===passwordValue;

 }
    let userData = data.find(getLogin);
    console.log(userData)

    
if(userData){
    alert("You are logged in Successfully");
    document.getElementById("container2").textContent="";
    document.getElementById("container2").style.backgroundColor="lightblue"
    document.getElementById("container1").style.backgroundColor="lightblue"


let LogoutBtn = document.createElement("button");
LogoutBtn.classList.add("login-button-signup");
LogoutBtn.textContent="Logout";

LogoutBtn.addEventListener("click", function() {
  document.getElementById("container2").textContent="";
  document.getElementById("container2").style.backgroundColor="orange"
  document.getElementById("container1").style.backgroundColor="orange"
  getLoginPage();
})


    



    let headingEl = document.createElement("h1");
    headingEl.textContent="Hi, You are Welcome Mr." + userData.name;
    let paragraphEl1 = document.createElement("p");
    paragraphEl1.textContent="Email Id :" + userData.email;

    let paragraphEl2 = document.createElement("p");
    paragraphEl2.textContent="Category : " + userData.username;

    


    document.getElementById('container2').appendChild(LogoutBtn);
    document.getElementById("container2").appendChild(headingEl);
    document.getElementById("container2").appendChild(paragraphEl1);
    document.getElementById("container2").appendChild(paragraphEl2);

  let line = document.createElement("hr");
  line.classList.add("line-style");
    document.getElementById("container2").appendChild(line);

     // let values=[];


function getDataValues(){
  let theData = localStorage.getItem(("work"));
  let parsing = JSON.parse(theData)
  if (parsed===null){
      return []
  }else{
      return parsing
  }
     
 }
 
 
 let values = getDataValues();
 console.log(values)

    if(userData.username==="student"){


      // function getDataValues(){
      //   let theData = localStorage.getItem(("work"));
      //   let parsed = JSON.parse(theData)
      //   if (parsed===null){
      //       return []
      //   }else{
      //       return parsed
      //   }
           
      //  }
       
       
      //  let values = getDataValues();
      //  console.log(values)

       for (let eachOne of values){
        let paragraphEl1 = document.createElement("p");
        paragraphEl1.textContent = eachOne;
        document.getElementById("container2").appendChild(paragraphEl1)
       

        
        

        

       }



    }else{
     
 
 const getAdd=(a,b)=>a+b;
 let adding = getAdd(7,5);
 values.push(adding)
 
 const getSub=(a,b)=>a-b;
 let substract = getSub(7,4);
 values.push(substract)
 
 const getMultiply=(a,b)=>a*b;
 let multiply = getMultiply(7,5);
 values.push(multiply)
 
 const getDiv=(a,b)=>a/b;
 let division = getDiv(7,2);
 values.push(Math.floor(division))
 
 localStorage.setItem("work", JSON.stringify(values))
 
 
    }

   



    
    







}else{
    alert("Please signup and register for login.")
}


})

let paragraphEl1 = document.createElement("p");
paragraphEl1.textContent="don't you have an account   ";
paragraphEl1.classList.add("para");

let signUpBtn = document.createElement("button");
signUpBtn.classList.add("button");
signUpBtn.textContent="Sign Up";
paragraphEl1.appendChild(signUpBtn);

signUpBtn.addEventListener("click", function() {

  document.getElementById("container2").textContent="";

  let LoginBtn = document.createElement("button");
LoginBtn.classList.add("login-button-signup");
LoginBtn.textContent="Login";

LoginBtn.addEventListener("click", function() {
  document.getElementById("container2").textContent="";
  document.getElementById("container2").style.backgroundColor="orange"
  document.getElementById("container1").style.backgroundColor="orange"
  getLoginPage();
  

})


    let labelEl1 = document.createElement("label")
    labelEl1.textContent="Name";
    labelEl1.classList.add("heading2");


    let labelEl2 = document.createElement("label")
    labelEl2.textContent="Email";
    labelEl2.classList.add("heading2");

    let labelEl3 = document.createElement("label")
    labelEl3.textContent="Password";
    labelEl3.classList.add("heading2");

    let labelEl4 = document.createElement("label")
    labelEl4.textContent="Date of Birth";
    labelEl4.classList.add("heading2");

    let labelEl5 = document.createElement("label")
    labelEl5.textContent="Message any";
    labelEl5.classList.add("heading2");




    let nameEl = document.createElement("input");
    nameEl.type="text"
    nameEl.placeholder="Enter Your Name";

    let emailEl = document.createElement("input");
    emailEl.type="text";
    emailEl.placeholder="Enter Your Email";

    let passwordEl = document.createElement("input");
    passwordEl.type="password";
    passwordEl.placeholder="Enter Your Password";

    let teacherRadio = document.createElement("input");
    teacherRadio.id = "teacher";
    teacherRadio.type="radio";
    teacherRadio.name="username";
    teacherRadio.value="teacher";


    let teacherLabel = document.createElement("label");
    teacherLabel.htmlFor="teacher";
    teacherLabel.textContent="Teacher";



    let studentRadio = document.createElement("input");
    studentRadio.id = "student";
    studentRadio.type="radio";
    studentRadio.name="username";
    studentRadio.value="student";
    
    let studentLabel = document.createElement("label");
    studentLabel.htmlFor="student";
    studentLabel.textContent="Student";

    // let dobEl = document.createElement("input");
    // dobEl.type="date";
    // dobEl.placeholder="Enter Your Date of Birth";

    // let msgEl = document.createElement("textarea");
    // msgEl.placeholder="Type any thing.";
    // msgEl.type="text";

    let buttonEl = document.createElement("button");
    buttonEl.textContent="Register";
    buttonEl.classList.add("button")
    buttonEl.setAttribute("textalign", "center");


    document.getElementById("container2").appendChild(LoginBtn);
    document.getElementById("container2").appendChild(labelEl1);
    document.getElementById("container2").appendChild(nameEl);

    document.getElementById("container2").appendChild(labelEl2);
    document.getElementById("container2").appendChild(emailEl);

    document.getElementById("container2").appendChild(labelEl3);
    document.getElementById("container2").appendChild(passwordEl);
    let inputcontainer = document.createElement("div")
    document.getElementById("container2").appendChild(inputcontainer);
    


    inputcontainer.appendChild(teacherRadio);
    inputcontainer.appendChild(teacherLabel);
    inputcontainer.appendChild(document.createElement("br"));
    inputcontainer.appendChild(studentRadio);
    inputcontainer.appendChild(studentLabel);




    

     document.getElementById("container2").appendChild(buttonEl);

     let user = {
      name:"",
      email:"",
      password:"",
      username:"",
  };

  nameEl.addEventListener("change", function(event) {
    user.name = event.target.value;
  });

  emailEl.addEventListener("change", function(event) {
    user.email = event.target.value;
  });

  passwordEl.addEventListener("change", function(event) {
    user.password = event.target.value;
  });

  teacherRadio.addEventListener("change", function(event) {
    user.username = event.target.value;
  });
  
  studentRadio.addEventListener("change", function(event) {
    user.username = event.target.value;
  });
  

     buttonEl.onclick=function(){
        let params = {
            name:nameEl.value,
            email:emailEl.value,           
        }
        console.log(params)
        

        let serviceId = "service_r2i8zza";
        let templateId = "template_rkyfv99";
        emailjs.send(serviceId, templateId, params)
        .then(function(res){
            alert("success " + res.status );
        })

        

        data.push(user)
        console.log(data)
        
       

        localStorage.setItem("userData", JSON.stringify(data))

        
     }


})

let spanEl = document.createElement("span");
spanEl.textContent="   here !";
paragraphEl1.appendChild(spanEl); 






  divEl.appendChild(labelEmail);
  divEl.appendChild(inputEmail);
  divEl.appendChild(labelpwd);
  divEl.appendChild(inputPwd);
  divEl.appendChild(LoginBtn);
  divEl.appendChild(paragraphEl1);
  

  
}

getLoginPage();


// let data = [];
function getDataFromLocalStorage(){
    let dataFromlocal = localStorage.getItem("userData")
    let parsed = JSON.parse(dataFromlocal);
    if(parsed===null){
        return []
    }else{
        return parsed
    }
}

let data = getDataFromLocalStorage();
console.log(data)


