function menu() {
        const menuBtn = document.getElementById('menu-icon');
        const menu = document.getElementById('menu-vertical')

        menuBtn.addEventListener('click', () => {
                menu.classList.toggle('active')
                menuBtn.classList.toggle('active')
        })
}
menu()