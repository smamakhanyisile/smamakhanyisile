function respondToInvitation(response) {
    if (response.toLowerCase() === "yes") {
        window.location.href = "accept_page.html"; // Redirect to accept page
    } else if (response.toLowerCase() === "no") {
        window.location.href = "reject_page.html"; // Redirect to reject page
    } else {
        alert("Invalid response");
    }
}
