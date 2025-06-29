// Container where input and buttons present
const container = document.createElement("div");
document.body.appendChild(container);
// Input where you can enter the number
const input = document.createElement("input");
input.placeholder = `Enter the number`
container.appendChild(input)
// Enter button
const button = document.createElement("button");
button.textContent = "Enter";
container.appendChild(button)

// Random number created
const randomNum = Math.random()*100;
const fixedNum = randomNum.toFixed(0)
console.log(fixedNum);

//Message div
const tryAgain_Container = document.createElement("div");
// Message
const message =  document.createElement("p");
// Try Again Button
const tryButton = document.createElement("button");

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

const value = input.value;
input.addEventListener("keydown",function(e){
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