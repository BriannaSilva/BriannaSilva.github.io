const openMenu = () => {
    document.getElementById('backdrop').className = 'backdrop active';
    document.getElementById('menu').className = 'active';
}
const closeMenu = () => {
    document.getElementById('backdrop').className = 'backdrop';
    document.getElementById('menu').className = '';
}

document.getElementById('mainbox').onclick = e => {
    e.preventDefault();
    openMenu();
}

document.getElementById("close").onclick = e => {
    closeMenu();
}

document.getElementById("backdrop").onclick = e => {
    closeMenu();
}