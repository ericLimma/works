export function langToggle() {
        const langToggle = document.querySelector('[data-button="lang-toggle"]');

        langToggle.addEventListener('click', () => {
                document.body.classList.toggle('lang-pt');
                document.body.classList.toggle('lang-en');
                console.log('langToggle');

        });
}
