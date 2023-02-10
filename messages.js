const sideMenu = document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler = document.querySelector(".theme-toggler")

//show sidebar
menuBtn.addEventListener('click', () => {
    sideMenu.style.display = 'block';
})
//close sidebar
closeBtn.addEventListener('click', () => {
    sideMenu.style.display = 'none';
})
document.que
//change the theme
themeToggler.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme-variables');
    themeToggler.querySelector('span:nth-child(1)').classList.toggle('active');
    themeToggler.querySelector('span:nth-child(2)').classList.toggle('active');
})

//fill the table with messages

Tische.forEach(tische => {
    const tr = document.createElement('tr');
        const trContent = `
                            <td>${tische.productName}</td>
                            <td>${tische.productNumber}</td>
                            <td>${tische.productTime}</td>
                            `;
    tr.innerHTML = trContent;
    document.querySelector('table tbody').appendChild(tr);
})

