function transformToExpandedMessage({ avatarUrl, username, message }) {
    const glass = document.querySelector('.notif-glass');
    const avatar = document.querySelector('.notif-avatar');
    const avatarWrapper = document.querySelector('.notif-avatar-wrapper');
    const usernameEl = document.querySelector('.notif-username');
    const messageEl = document.querySelector('.notif-text2');
    const notifText = document.querySelector('.notif-text');
    const notifIcon = document.querySelector('.notif-icon');

    glass.classList.remove('zoomed');

    void glass.offsetWidth;

    // Remplir les contenus
    avatar.src = avatarUrl;
    usernameEl.textContent = username;
    messageEl.textContent = message;

    // Masquer le "Nouveau message"
    notifText.classList.add('hidden');
    notifIcon.classList.add('hidden');

    // Afficher la pp + pseudo + message
    avatarWrapper.classList.remove('hidden');
    usernameEl.classList.remove('hidden');
    messageEl.classList.remove('hidden');
    setTimeout(() => {
        glass.classList.add('zoomed');
    }, 30);

    setTimeout(() => {
        notifText.classList.remove('hidden');
        notifIcon.classList.remove('hidden');
        avatarWrapper.classList.add('hidden');
        usernameEl.classList.add('hidden');
        messageEl.classList.add('hidden');
        glass.classList.remove('zoomed');
    }, 5000);
}


transformToExpandedMessage({
    avatarUrl: 'https://static-cdn.jtvnw.net/jtv_user_pictures/c65f1e69-61b3-4519-9bf9-67f56412bf45-profile_image-70x70.png',
    username: 'JeanMichelTchat',
    message: 'MerciMerciMerciMerciMerciMerciMerciMerciMerci dovarkDOG Kappa LUL.'
});
