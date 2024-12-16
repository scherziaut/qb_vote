window.addEventListener("message", function(event) {
    let data = event.data;

    if (data.action === "open") {
        document.body.style.display = "flex";
    }

    if (data.action === "close") {
        document.body.style.display = "none";
    }
});

function submitVote(partyNumber) {
    document.querySelectorAll('.circle').forEach(circle => {
        circle.classList.remove('selected');
    });

    const selectedCircle = document.querySelectorAll('.circle')[partyNumber - 1];
    selectedCircle.classList.add('selected');

    fetch(`https://${GetParentResourceName()}/submitVote`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ party: partyNumber })
    }).then(() => {
        console.log("Vote submitted successfully!");
    }).catch(err => console.error("Error submitting vote:", err));
}
