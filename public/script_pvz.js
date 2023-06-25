const signupBtn = document.getElementById("signup-form");

signupBtn.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    const user = {
        name,
        email,
        password,
        accessToken: generateAccessToken()
    };

    const msg = document.getElementById('msg');

    if (user.name === "" || user.email === "" || user.password === "") {
        msg.innerHTML = "Error: All the fields are mandatory";
        msg.style.display = "block";
        msg.style.color = "red";
        msg.style.fontSize = "1rem";
        return;
    } else if (user.password !== confirmPassword) {
        msg.innerHTML = "Password and Confirm password not matched.";
        msg.style.display = "block";
        msg.style.color = "red";
        msg.style.fontSize = "1rem";
        return;
    } else {
        msg.innerHTML = "Signup successful!";
        msg.style.display = "block";
        msg.style.color = "green";
        msg.style.fontSize = "1rem";
    }
    localStorage.setItem("user", JSON.stringify(user));

    setTimeout(() => {
        window.location.href = "./public/profile_pvz.html";
    }, 1000);
});

function generateAccessToken() {
    const randomBytes = new Uint8Array(16);
    window.crypto.getRandomValues(randomBytes);
    const accessToken = btoa(String.fromCharCode.apply(null, randomBytes));
    return accessToken;
}

const profile = document.getElementById('profile');
profile.addEventListener('click', () => {
    const user = JSON.parse(localStorage.getItem('user')) || false;
    if (user) {
        window.location.href = "./public/profile_pvz.html";
    } else {
        window.location.href = "../index.html";
    }
});