const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/R.png") {
        myImage.setAttribute("src", "images/Google-Chrome-Logo-2008-2011.png");
        myImage.setAttribute("width", "130%");
        myImage.setAttribute("height",  "130%");
    } else {
        myImage.setAttribute("src", "images/R.png");
        myImage.setAttribute("width", "90%");
        myImage.setAttribute("height", "90%");
    }
};

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = "Mozilla is cool, " + storedName;
}

myButton.onclick = () => {
    setUserName();
};

function setUserName() {
    const myName = prompt("あなたの名前を入力してください。");
    localStorage.setItem("name", myName);
    myHeading.textContent = "Mozilla is cool, " + myName;
}