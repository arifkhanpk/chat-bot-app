const messages = document.getElementsByClassName("messageList")[0]
const userInput = document.getElementById("message");
const send = document.getElementById("send")


console.log(messages.innerHTML)

let messageList = [
    {
        id: "user",
        message: "Hello!"
    },
    {
        id: "bot",
        message: "Hi!"
    },
    {
        id: "user",
        message: "Salam"
    },
    {
        id: "bot",
        message: "Wa Alaikun As Salam"
    }
]

// render list of messages
for (let i = 0; i < messageList.length; i++) {
    messages.innerHTML += `<li class=${messageList[i].id} >  ${messageList[i].message}  </li>`
}


function sendMessage() {
    messages.innerHTML += `<li class="user">${userInput.value}</li>`;
    setTimeout(autoReply, 1000);
    userInput.value = "";
}

send.addEventListener("click", sendMessage);

// let count = 0;
// for (let i = 1; i <= 6; i++) {
//     // count = count + i
//     count += i
//     console.log(count, "count")
// }

function autoReply() {
    const dummyText = [
        {
            id: "bot",
            message: "Assalam-u-Alaikum"
        },
        {
            id: "bot",
            message: "kese ho ap"
        },
        {
            id: "bot",
            message: "jawab to do"
        },
        {
            id: "bot",
            message: "jaldi karo time nahi h"
        },
        {
            id: "bot",
            message: "Bye bye"
        }
    ]

    const newMessage = Math.round(Math.random() * dummyText.length)

    console.log(dummyText[newMessage], "newMessage")
    messages.innerHTML += `<li>  ${dummyText[newMessage].message}   </li>`;
}
