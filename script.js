// RSVP Form Submission
document.getElementById('rsvp-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;

    alert(`Thank you for your RSVP, ${name}! A confirmation has been sent to ${email}.`);
});
