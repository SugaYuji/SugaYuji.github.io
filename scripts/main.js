const myHeading = document.querySelector("h1");
const myImage = document.querySelector("img");
let myButton = document.querySelector("button");

myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");

    if (mySrc === "images/R.png") {
        myImage.setAttribute("src", "images/Google-Chrome-Logo-2008-2011.png");
    } else {
        myImage.setAttribute("src", "images/R.png");
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