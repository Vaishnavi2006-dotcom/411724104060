let input = document.getElementById("messageInput");
let addBtn = document.getElementById("addBtn");
let clearBtn = document.getElementById("clearBtn");
let count = document.getElementById("count");
let status = document.getElementById("status");
let messageBox = document.getElementById("messageBox");

let messages = [];

// Character Count
input.addEventListener("input", function () {

    count.textContent = input.value.length;

});

// Add Message
addBtn.addEventListener("click", function () {

    let text = input.value;

    let promise = new Promise(function(resolve, reject){

        if(text.length >= 3){
            resolve(text);
        }
        else{
            reject();
        }

    });

    promise.then(function(message){

        status.textContent = "Message Added Successfully";

        messages.push(message);

        displayMessages();

        input.value = "";
        count.textContent = 0;

    })

    .catch(function(){

        status.textContent = "Message must contain at least 3 characters";

    });

});


// Display Messages

function displayMessages(){

    messageBox.innerHTML = "";

    messages.forEach(function(msg,index){

        let p = document.createElement("p");

        p.textContent = msg;

        p.className = "message";

        messageBox.appendChild(p);

        setTimeout(function(){

            messages.splice(index,1);

            displayMessages();

            status.textContent = "Message Expired";

        },10000);

    });

}



// Clear All

clearBtn.addEventListener("click",function(){

    messages = [];

    messageBox.innerHTML = "";

    status.textContent = "All Messages Cleared";

});