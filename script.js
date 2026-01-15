// Share Logic
function shareApp() {
    // This is the message that will appear in WhatsApp/Telegram
    const shareMessage = `🚀 Get the Ultimate Pro Experience with Mods Downloader Online!

⚡ Ultra-Fast Downloads
🛡️ Safe & Secure
💎 VIP Access for Free

Download App Here: `;

    // Check if the device supports native sharing (Mobile Phones)
    if (navigator.share) {
        navigator.share({
            title: 'Mods Downloader Online',
            text: shareMessage,
            url: window.location.href // Adds the clickable link at the end
        })
        .catch((error) => console.log('Error sharing', error));
    } else {
        // If the device does NOT support sharing (like some Desktop PCs)
        // It will show this alert instead of copying text.
        alert("Your browser does not support native sharing. Please copy the URL manually.");
    }
}
