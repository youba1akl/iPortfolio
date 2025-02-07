const tab_profition = ["web developer","web designer","freelancer"];
const profition = document.getElementById("profition");

let index =0;
let i=0;

function afficher(){
    if (index >= tab_profition.length){
        index=0;
    }
        if(i<tab_profition[index].length){
            profition.textContent +=tab_profition[index].charAt(i);
            i++;
            setTimeout(afficher,100);
        }else {
            i= 0;
            index++;
            setTimeout(() => {
                profition.textContent = "";
                afficher();
            }, 1000);
        }
}
document.addEventListener("DOMContentLoaded", afficher);

function updateTime() {
    const date = new Date();
    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const min = String(date.getMinutes()).padStart(2, '0');
    const sec = String(date.getSeconds()).padStart(2, '0');

    const heur = document.getElementById("heur");
    const annee = document.getElementById("annee");

    annee.textContent = `${day}/${month}/${year}`;
    heur.textContent = `${hour}:${min}`;
}

document.addEventListener("DOMContentLoaded", () => {
    updateTime();
    setInterval(updateTime, 1000);
});

//scroll lien 
document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".link-profile a");

    function changeActiveLink() {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").substring(1) === currentSection) {
                link.classList.add("active");
            }
        });
    }

    window.addEventListener("scroll", changeActiveLink);
});
