
/* don't use (.value) here */
let user_object = document.querySelectorAll(".details-container > input")

/* signup function */
document.getElementById("signup-button").addEventListener("click", (event) => {
    event.preventDefault()

    /* this is my initial code and its not working */
    let flag = document.createElement("div")

    for (let i = 0; i < user_object.length; i++) {
        if (user_object[i] === undefined || user_object[i] === "") {
            flag.className = "error-message"
            flag = "Error: All the fields are mandatory"

            document.getElementById("green-red").appendChild(flag)
        } else if (i == user_object.length - 1) {
            flag.className = "success-message"
            flag = "Successfully Signed Up!"
        }
    }
    // console.log(user_object);
})
