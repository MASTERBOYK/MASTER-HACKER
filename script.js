document.getElementById('send-request-btn').addEventListener('click', function() {
    const unbanOption = document.getElementById('unban-option').value;
    const phoneNumber = document.getElementById('phone-number').value;
    const promptOption = document.getElementById('prompt-option').value;

    if (!phoneNumber) {
        alert('Please enter your phone number.');
        return;
    }

    let subject = "WhatsApp Account Unban Request";
    let body = "";

    if (unbanOption === 'normal') {
        subject += " - Normal Ban";
        body = "Hello WhatsApp Support Team,\n\nI am writing to request an unban for my account. My phone number is " + phoneNumber + ".\nI believe my account was mistakenly banned. I have reviewed the Terms of Service and will ensure compliance in the future.\n\nThank you for your time and consideration.\n\nSincerely,\n[Your Name]";
    } else if (unbanOption === 'permanent') {
        subject += " - Permanent Ban";
        body = "Hello WhatsApp Support Team,\n\nI am writing to appeal the permanent ban on my account with the phone number " + phoneNumber + ".\nI apologize for any violation that may have occurred. I have learned from my mistake and promise to follow all rules and guidelines in the future.\n\nI kindly request you to reconsider the ban and restore my account.\n\nSincerely,\n[Your Name]";
    }

    if (promptOption === 'apology') {
        // You can add different prompt variations here
        // For simplicity, we are using the main body as a prompt.
    }

    const mailtoLink = `mailto:support@whatsapp.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

    window.location.href = mailtoLink;
});
