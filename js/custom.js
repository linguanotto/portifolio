// navigation  menu js
function openNav() {
    document.getElementById("myNav").classList.toggle("menu_width");
    document
        .querySelector(".custom_menu-btn")
        .classList.toggle("menu_btn-style");

}

// display current year on footer
function getCurrentYear() {
    var currentDate = new Date();
    var currentYear = currentDate.getFullYear();
    document.querySelector("#displayYear").innerHTML = currentYear;
}

getCurrentYear();

// carousel indicator style
var liOne = $(".slider_section .carousel-indicators li.li_one");
var litwo = $(".slider_section .carousel-indicators li.li_two")
var ulAfter = $(".slider_section .carousel-indicators .ol_design")

$('#carouselExampleIndicators').on('slid.bs.carousel', function (event) {
    if (liOne.hasClass("active")) {
        // ulAfter.css("left", "calc(100% + ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(0% + ' + 35 + 'px)'
        })

    } else if (litwo.hasClass("active")) {
        // ulAfter.css("left", "calc(100% - ' + 35+ 'px)")
        ulAfter.css({
            'left': 'calc(100% - ' + 45 + 'px)'
        })
    }
});

function openPopup(contentId) {
  const contentMap = {
    popup1: "No projeto Scrum 2023/01, fui responsável por estruturar o backend, auxiliar no planejamento das sprints e promover a integração entre front-end e API.",
    popup2: "Projeto 2 - Coloque sua descrição aqui.",
    popup3: "Projeto 3 - Coloque sua descrição aqui."
  };

  const popupOverlay = document.getElementById("popup-overlay");
  const popupText = document.getElementById("popup-text");

  popupText.innerHTML = contentMap[contentId] || "Conteúdo não encontrado.";
  popupOverlay.classList.add("active");
}

function closePopup(event) {
  const overlay = document.getElementById("popup-overlay");
  if (event.target.id === "popup-overlay" || event.target.classList.contains("close-btn")) {
    overlay.classList.remove("active");
  }
}
