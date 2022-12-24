
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


function login(){
    let emailValue = document.getElementById("email").value;
    let passwordValue = document.getElementById("password").value;

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

    let headingEl = document.createElement("h1");
    headingEl.textContent="Hi, You are Welcome Mr." + userData.name;
    let paragraphEl1 = document.createElement("p");
    paragraphEl1.textContent="Email Id :" + userData.email;

    let paragraphEl2 = document.createElement("p");
    paragraphEl2.textContent="Date of Birth : " + userData.dob;

    let paragraphEl3 = document.createElement("p");
    paragraphEl3.textContent="Your Message is : " + userData.message;

    document.getElementById("container2").appendChild(headingEl);
    document.getElementById("container2").appendChild(paragraphEl1);
    document.getElementById("container2").appendChild(paragraphEl2);
    document.getElementById("container2").appendChild(paragraphEl3);

    let puzzleBtn = document.createElement("button");
    puzzleBtn.textContent="Start the Super Puzzle"
    puzzleBtn.classList.add("button")
    
    document.getElementById("container2").appendChild(puzzleBtn);
    puzzleBtn.onclick=function(){
        function superPuzzle(arr) {
            let moves = [];
            let emptyRow, emptyCol;
          
            // find position of empty tile
            for (let i = 0; i < arr.length; i++) {
              for (let j = 0; j < arr[i].length; j++) {
                if (arr[i][j] === 0) {
                  emptyRow = i;
                  emptyCol = j;
                  break;
                }
              }
            }
          
            // iterate over the array and make moves
            for (let i = 0; i < arr.length; i++) {
              for (let j = 0; j < arr[i].length; j++) {
                // check if tile is in correct position
                if (arr[i][j] !== i * arr.length + j + 1) {
                  // check if empty tile is in a position to slide the tile
                  if (emptyRow === i && (emptyCol === j - 1 || emptyCol === j + 1)) {
                    moves.push(arr[i][j]);
                    emptyRow = i;
                    emptyCol = j;
                  } else if (emptyCol === j && (emptyRow === i - 1 || emptyRow === i + 1)) {
                    moves.push(arr[i][j]);
                    emptyRow = i;
                    emptyCol = j;
                  }
                }
              }
            }
          
            return moves;
          }

          
          let simpleExample = [    [ 1, 2, 3, 4],
              [ 5, 0, 6, 8],
              [ 9,10, 7,11],
              [13,14,15,12]
          ];
          
          console.log(superPuzzle(simpleExample)); // [6,7,11,12]
    }







}else{
    alert("Please signup and register for login.")
}



}

function register(){
    
    document.getElementById("container2").textContent="";

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

    let dobEl = document.createElement("input");
    dobEl.type="date";
    dobEl.placeholder="Enter Your Date of Birth";

    let msgEl = document.createElement("textarea");
    msgEl.placeholder="Type any thing.";
    msgEl.type="text";

    let buttonEl = document.createElement("button");
    buttonEl.textContent="Register";
    buttonEl.classList.add("button")
    buttonEl.setAttribute("textalign", "center");



    document.getElementById("container2").appendChild(labelEl1);
    document.getElementById("container2").appendChild(nameEl);

    document.getElementById("container2").appendChild(labelEl2);
    document.getElementById("container2").appendChild(emailEl);

    document.getElementById("container2").appendChild(labelEl3);
    document.getElementById("container2").appendChild(passwordEl);

    document.getElementById("container2").appendChild(labelEl4);
    document.getElementById("container2").appendChild(dobEl);

    document.getElementById("container2").appendChild(labelEl5);
    document.getElementById("container2").appendChild(msgEl);

     document.getElementById("container2").appendChild(buttonEl);

     buttonEl.onclick=function(){
        let params = {
            name:nameEl.value,
            email:emailEl.value,
            message:msgEl.value
        }
        console.log(params)
        

        let serviceId = "service_r2i8zza";
        let templateId = "template_rkyfv99";
        emailjs.send(serviceId, templateId, params)
        .then(function(res){
            alert("success " + res.status );
        })

        let user = {
            name:nameEl.value,
            email:emailEl.value,
            password:passwordEl.value,
            dob:dobEl.value,
            message:msgEl.value
        };
        data.push(user)
        console.log(data)
        nameEl.value="";
        emailEl.value="";
        passwordEl.value="";
        dobEl.value="";
        msgEl.value="";

        localStorage.setItem("userData", JSON.stringify(data))

        
     }
}
