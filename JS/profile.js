// validation in user profile
$(document).ready(function() {
    const name = localStorage.getItem("userName");
    const email = localStorage.getItem("loggedInUser");
    const infoParagraphs = $(".text p");
    // if there is no email then go to login page
    if (!email) {
        window.location.href = "login.html";
        return;
    }
    // if name and nameElement exist then put the name insdie the element
    if (email && infoParagraphs.length > 0) {
        infoParagraphs.eq(0).text(email);
    }
    // Logout from the logout button or Btn for short
    $("#logoutBtn").click(function () {
        localStorage.removeItem("loggedInUser");
        console.alert("Logged out successfully!");
        window.location.href = "login.html";
    });
});