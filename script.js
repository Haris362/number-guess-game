// Container where input and buttons present
const container = document.createElement("div");
document.body.appendChild(container);
container.classList.add("container")
// Hint description
const description = document.createElement("p");
container.appendChild(description);
description.textContent = "Hint:Enter the number less than 101"
description.classList.add("description")
//Input div
const inputDiv = document.createElement("div");
container.appendChild(inputDiv);
inputDiv.classList.add("input-div")
// Input where you can enter the number
const input = document.createElement("input");
input.placeholder = `Enter the number`
inputDiv.appendChild(input)
input.classList.add("input")
// Enter button
const button = document.createElement("button");
button.textContent = "Enter";
inputDiv.appendChild(button)
button.classList.add("enter-Button")

// Hint
const hintDiv = document.createElement("div");
container.appendChild(hintDiv)
hintDiv.classList.add("hintDiv")
// Hint Icon
const hintIcon =  document.createElement("i");
hintDiv.appendChild(hintIcon)
hintIcon.className = `bxr bx-light-bulb-on`
hintIcon.id = "hintIcon"
hintIcon.addEventListener("click",function(){
    const number = document.createElement("span");
    hintDiv.appendChild(number)
    number.textContent = `Number is :`+ ` `+ fixedNum
})

// Random number created
const randomNum = Math.random()*100;
const fixedNum = randomNum.toFixed(0)

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


function  messageFunction(){
const value = input.value;
    if(value == ""){
    alert("⚠️ Please enter a number before pressing Enter.")
    
    }

    else if (value == fixedNum){    
        // Message container
        container.appendChild(tryAgain_Container);
        // Message
        tryAgain_Container.appendChild(message);
        message.textContent = "🎉 Congratulations! You guessed it right!"
        // Try button
        tryAgain_Container.appendChild(tryButton);
        tryButton.textContent = "Next"
        
        input.style.display = `none`
        button.style.display = `none`
        description.style.display = `none`
        hintDiv.style.display = `none`
        container.style.flexDirection = `row`
    }
    else if (value !== fixedNum){
        // Message container
        container.appendChild(tryAgain_Container);
        // Message
        tryAgain_Container.appendChild(message);
        message.textContent = "❌ Incorrect! Try again.."
        // Try button
        tryAgain_Container.appendChild(tryButton);
        tryButton.textContent = "Try Again"
        
        input.style.display = `none`
        button.style.display = `none`
        description.style.display = `none`
        hintDiv.style.display = `none`
        container.style.flexDirection = `row`
    }
    input.value = ""
}
button.onclick = messageFunction;
// Running code on enter button click
input.addEventListener("keydown",function(e){
    const value = input.value;
    if (e.key === "Enter"){
        messageFunction()
    }
})