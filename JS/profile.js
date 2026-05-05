$(document).ready(function() {

    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("loggedInUser");

    const nameElement = $(".text h1");
    const infoParagraphs = $(".text p");

    // Protect page
    if (!email) {
        window.location.href = "login.html";
        return;
    }

    // Display user
    if (name && nameElement.length) {
        nameElement.text(name);
    }

    if (email && infoParagraphs.length > 0) {
        infoParagraphs.eq(0).text(email);
    }

    // Logout
    $("#logoutBtn").click(function () {
        localStorage.removeItem("loggedInUser");
        alert("Logged out successfully!");
        window.location.href = "login.html";
    });

});