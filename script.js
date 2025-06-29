// Container where input and buttons present
const container = document.createElement("div");
document.body.appendChild(container);
container.classList.add("container")
// Input where you can enter the number
const input = document.createElement("input");
input.placeholder = `Enter the number`
container.appendChild(input)
input.classList.add("input")
// Enter button
const button = document.createElement("button");
button.textContent = "Enter";
container.appendChild(button)
button.classList.add("enter-Button")

// Random number created
const randomNum = Math.random()*100;
const fixedNum = randomNum.toFixed(0)
console.log(fixedNum);

//Message div
const tryAgain_Container = document.createElement("div");
tryAgain_Container.classList.add("message-Container")
// Message
const message =  document.createElement("p");
message.classList.add("message")
// Try Again Button
const tryButton = document.createElement("button");
tryButton.classList.add("try-Button")
tryButton.addEventListener("click",function(){
    window.location.reload();
})

button.addEventListener("click",function(){
    const value = input.value;
    if (value == fixedNum){
        console.log("great");
        
        // Container of message 
        container.appendChild(tryAgain_Container);
        // Message
        tryAgain_Container.appendChild(message);
        message.textContent = "Congragulation"
        // Try button
        tryAgain_Container.appendChild(tryButton);
        tryButton.textContent = "Next"
        
    }
    else if (value !== fixedNum){
        console.log("NO NO");
        // Container of message 
        container.appendChild(tryAgain_Container);
        // Message
        tryAgain_Container.appendChild(message);
        message.textContent = "Sorry please try again."
        // Try button
        tryAgain_Container.appendChild(tryButton);
        tryButton.textContent = "Try Again"
    }
    input.value = ""
})

input.addEventListener("keydown",function(e){
    const value = input.value;
    if (e.key === "Enter"){
        if (value == fixedNum){
        console.log("great");
        
        // Container of message 
        container.appendChild(tryAgain_Container);
        // Message
        tryAgain_Container.appendChild(message);
        message.textContent = "Congragulation"
        // Try button
        tryAgain_Container.appendChild(tryButton);
        tryButton.textContent = "Next"
        }
        else if (value !== fixedNum){
            
            console.log("NO NO");
            // Container of message 
            container.appendChild(tryAgain_Container);
            // Message
            tryAgain_Container.appendChild(message);
            message.textContent = "Sorry please try again."
            // Try button
            tryAgain_Container.appendChild(tryButton);
            tryButton.textContent = "Try Again"
        }
        input.value = ""
        }
    })