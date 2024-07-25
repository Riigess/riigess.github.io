
//TODO: Convert the below code to proper JavaScript DOM objects instead of text-based HTML
function createLabel(labelFor, labelName) {
    var toReturn = "";
    toReturn += "<label class=\"sr-only\" for=\"" + labelFor + "\">" + labelName + "</label><br />";
    return toReturn;
}

function createOptions(options) {
    var createdOptions = [];
    for(let i = 0; i < options.length; i++) {
        let optionName = options[i]
        let optionNameLower = optionName.toLowerCase();
        if(!optionNameLower.includes("twitter")) {
            createdOptions.push("<option value=\"" + optionNameLower + "\" id=\"" + optionNameLower + "\">" + optionName + "</option>");
        } else {
            createdOptions.push("<option value=\"twitter\" id=\"twitter\">" + optionName + "</option>");
        }
    }
    console.log("Created options: " + createdOptions);
    return createdOptions.join("");
}

function createTextField(varName, defaultText) {
    var toReturn = "<input type=\"text\" class=\"form-control input-lg\" id=\"";
    if(!varName.includes("twitter")) {
        toReturn += varName.toLowerCase();
    } else {
        toReturn += twitter;
    }
    toReturn += "\" placeholder=\"" + defaultText + "\"><br />";
    return toReturn;
}

function addSubmitButton() {
    var toReturn = "<div class=\"submit-align\">";
    toReturn += "<button class=\"submit-button\" type=\"submit\" onclick=\"onSubmit()\">Submit</button>";
    toReturn += "</div><br />";
    return toReturn;
}

function updateSelect() {
    var supportForm = document.getElementById("support-form");
    var selection = document.getElementById("support-reason");
    let selectedIdx = selection.selectedIndex;
    let selectedText = selection.options[selectedIdx].text;
    let options = Array.from(selection.options);
    let selectedOption = options.find(item => item.text === selectedText);
    
    let endSelectIdx = supportForm.innerHTML.indexOf("</select>");
    let endSelectCount = "</select>".length;
    let endSelectHTML = supportForm.innerHTML.substring(endSelectIdx + endSelectCount);
    console.log(endSelectHTML);

    supportForm.innerHTML = supportForm.innerHTML.substring(0, endSelectIdx + endSelectCount);
    var toAdd = "<br />";

    if(selectedIdx == 1 || selectedIdx == 2) {
        //Get Opt-in or Opt-out from which service(s)
        //TextField for username(s)
        toAdd += createLabel("dr-platform", "Platform");
        toAdd += "<select name=\"dr-platform\" id=\"dr-platform\">"
        toAdd += createOptions(["Discord", "Mastodon", "Twitch", "X (formerly known as Twitter)", "YouTube"]);
        toAdd += "</select><br />";
        toAdd += createLabel("username", "Username");
        toAdd += createTextField("username", "Riigess");
    } else {
        //For the Support or Media Inquiry;
        //  - Subject
        //  - Contact
        //  - "Thanks for reaching out! We'll be in contact with you via support@riigess.com" on Submit
        toAdd += createLabel("subject", "Subject");
        toAdd += createTextField("subject", "Some Subject Text");
        toAdd += createLabel("message", "Message");
        toAdd += createTextField("message", "Some message you would like to send us");
    }
    toAdd += addSubmitButton();
    console.log(toAdd.length);
    supportForm.innerHTML += toAdd;
    document.getElementById("support-reason").value = selectedOption.value; //Sets "Reason for Support" after updating innerHTML
}

//Borrowed from https://stackoverflow.com/questions/64387549/wait-for-settimeout-to-complete-then-proceed-to-execute-rest-of-the-code
async function wait(seconds) {
    return new Promise(resolve => {
        setTimeout(resolve, seconds * 1000);
        //This is an async coroutine, will have to wait for it to complete before continuing
    });
}

//Code mostly pulled from https://github.com/riigess/MaxMeds
//  and https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
async function postSupportRequest(name, email, reason, fieldA, fieldB) {
    await fetch("https://api.riigess.com/support/submission", {
        method: "POST",
        mode: 'cors',
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            "name": name,
            "email": email,
            "reason": reason,
            "selectionA": fieldA,
            "selectionB": fieldB
        })
    }).catch((error)=>{console.log(error.message)});
}

async function forwardToHome() {
    var supportForm = document.getElementById("support-form");
    supportForm.innerHTML = "<div class\"horizontal-center form-group\">Thank you for reaching out! We'll get back to you soon!</div><br />";
    window.location.href = "index.html";
}

async function onSubmit() {
    //TODO: POST call to API to send JSON data to https://api.riigess.com/support
    let name = document.getElementById("name-input").value;
    let email = document.getElementById("email-input").value;
    let reason = document.getElementById("support-reason").value;
    let selectionA = document.getElementById("subject").value;
    let selectionB = document.getElementById("message").value;
    await postSupportRequest(name, email, reason, selectionA, selectionB);
    await wait(5);
    await forwardToHome();
}

document.addEventListener("keydown", (event) => {
    if(event.code === "Enter") {
        onSubmit();
    }
});
