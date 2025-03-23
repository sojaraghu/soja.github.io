document.addEventListener("DOMContentLoaded", () => {
    setTimeout(() => {
        let inputBox = document.querySelector(".embeddedMessagingInputFooterTextArea");
        if (inputBox) {
            inputBox.style.display = "none";
            console.log("Chat input hidden!");
        } else {
            console.log("Chat input NOT found!");
        }
    }, 3000);
});
