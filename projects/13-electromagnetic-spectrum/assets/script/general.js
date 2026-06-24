const buttons = document.querySelectorAll(".header__nav_ul_li");
const halo1 = document.querySelector(".header");
const halo2 = document.querySelector(".header");
const circle1 = document.querySelector(".about__banner_circle1");
const circle2 = document.querySelector(".about__banner_circle2");
const description = document.querySelector(".about__banner_description");
const bloc = document.querySelector(".about__banner");
const bgSubtile = document.querySelector(".about__content_subtitle");
const colSubtile = document.querySelector(".about__content_subtitle");
const title = document.querySelector(".about__content_title");
const text1 = document.getElementsByClassName("about__content_text")[0];
const text2 = document.getElementsByClassName("about__content_text")[1];
const cta = document.querySelector(".about__content_wrapper_cta");
const play = document.querySelector(".video__card_play");
const playAnimate = document.querySelector(".video__card_play");
const copyLink = document.querySelector(".footer__bottom_copyright_link");
const decoration = document.querySelector(".footer__bottom_list");
const backTop = document.querySelector(".backTop");
const defaultCircle1 = circle1.getAttribute("src");
const defaultCircle2 = circle2.getAttribute("src");
const defaultDescription = description.getAttribute("src");
const defaultBgSubtile = bgSubtile.style.backgroundColor;
const defaultColSubtile = colSubtile.style.color;
const defaultTitle = title.textContent;
const defaultText1 = text1.textContent;
const defaultText2 = text2.textContent;
const defaultCta = cta.style.backgroundColor;
const defaultPlay = play.style.backgroundColor;
const defaultCopyLink = copyLink.style.color;
const defaultBackTop = backTop.style.backgroundColor;
function resetSection() {
  halo1.style.setProperty("--color-before-background", "rgba(127, 0, 0, .2)");
  halo2.style.setProperty("--color-after-background", "rgba(127, 0, 0, .2)");
  circle1.setAttribute("src", defaultCircle1);
  circle2.setAttribute("src", defaultCircle2);
  description.setAttribute("src", defaultDescription);
  bloc.style.setProperty("--color-after-background", "rgba(127, 0, 0, 1)");
  bgSubtile.style.backgroundColor = defaultBgSubtile;
  colSubtile.style.color = defaultColSubtile;
  title.textContent = defaultTitle;
  text1.textContent = defaultText1;
  text2.textContent = defaultText2;
  cta.style.backgroundColor = defaultCta;
  play.style.backgroundColor = defaultPlay;
  playAnimate.style.setProperty("--color-kreyframes", "rgba(127, 0, 0, 1)");
  copyLink.style.color = defaultCopyLink;
  decoration.style.setProperty("--color-before-background", "rgba(127, 0, 0, 1)");
  backTop.style.backgroundColor = defaultBackTop;
  buttons.forEach(button => {
    button.classList.remove("header__nav_ul_li_a_active");
  });
}
function displayContent(contentType) {
  resetSection();
  switch (contentType) {
    case "micro-ondes":
      halo1.style.setProperty("--color-before-background", "rgba(255, 102, 0, .2)");
      halo2.style.setProperty("--color-after-background", "rgba(255, 102, 0, .2)");
      circle1.setAttribute("src", "assets/images/about-circle-one-micro-ondes.png");
      circle2.setAttribute("src", "assets/images/about-circle-two-micro-ondes.png");
      description.setAttribute("src", "assets/images/about-descri-micro-ondes.png");
      bloc.style.setProperty("--color-after-background", "rgba(255, 102, 0, 1)");
      bgSubtile.style.backgroundColor = "rgba(255, 102, 0, .2)";
      colSubtile.style.color = "rgba(255, 102, 0, 1)";
      title.textContent = "Les micro-ondes";
      text1.textContent = "Les micro-ondes sont utilisées pour la transmission de données à haut débit, telles que les réseaux sans fil, ainsi que pour les fours à micro-ondes.";
      text2.textContent = "Les micro-ondes, qui ont une fréquence comprise entre 300 MHz et 300 GHz et sont utilisées pour la communication sans fil à courte portée, la cuisson et le chauffage.";
      cta.style.backgroundColor = "rgba(255, 102, 0, 1)";
      play.style.backgroundColor = "rgba(255, 102, 0, 1)";
      playAnimate.style.setProperty("--color-kreyframes", "rgba(255, 102, 0, 1)");
      copyLink.style.color = "rgba(255, 102, 0, 1)";
      decoration.style.setProperty("--color-before-background", "rgba(255, 102, 0, 1)");
      backTop.style.backgroundColor = "rgba(255, 102, 0, 1)";
      break;
    case "infrarouge":
      halo1.style.setProperty("--color-before-background", "rgba(255, 215, 0, .2)");
      halo2.style.setProperty("--color-after-background", "rgba(255, 215, 0, .2)");
      circle1.setAttribute("src", "assets/images/about-circle-one-infrarouge.png");
      circle2.setAttribute("src", "assets/images/about-circle-two-infrarouge.png");
      description.setAttribute("src", "assets/images/about-descri-infrarouge.png");
      bloc.style.setProperty("--color-after-background", "rgba(255, 215, 0, 1)");
      bgSubtile.style.backgroundColor = "rgba(255, 215, 0, .2)";
      colSubtile.style.color = "rgba(255, 215, 0, 1)";
      title.textContent = "L'infrarouge";
      text1.textContent = "Les ondes infrarouges sont utilisées pour la détection de la chaleur, telles que les caméras thermiques. Elles peuvent également être utilisées pour la télécommande sans fil.";
      text2.textContent = "L'infrarouge, qui a une fréquence comprise entre 300 GHz et 400 THz et est utilisé pour la détection de chaleur, la télémétrie, la communication sans fil à courte portée et la télécommande.";
      cta.style.backgroundColor = "rgba(255, 215, 0, 1)";
      play.style.backgroundColor = "rgba(255, 215, 0, 1)";
      playAnimate.style.setProperty("--color-kreyframes", "rgba(255, 215, 0, 1)");
      copyLink.style.color = "rgba(255, 215, 0, 1)";
      decoration.style.setProperty("--color-before-background", "rgba(255, 215, 0, 1)");
      backTop.style.backgroundColor = "rgba(255, 215, 0, 1)";
      break;
    case "lumiere-visible":
      halo1.style.setProperty("--color-before-background", "rgba(0, 255, 0, .2)");
      halo2.style.setProperty("--color-after-background", "rgba(0, 255, 0, .2)");
      circle1.setAttribute("src", "assets/images/about-circle-one-lumiere-visible.png");
      circle2.setAttribute("src", "assets/images/about-circle-two-lumiere-visible.png");
      description.setAttribute("src", "assets/images/about-descri-lumiere-visible.png");
      bloc.style.setProperty("--color-after-background", "rgba(0, 255, 0, 1)");
      bgSubtile.style.backgroundColor = "rgba(0, 255, 0, .2)";
      colSubtile.style.color = "rgba(0, 255, 0, 1)";
      title.textContent = "La lumière visible";
      text1.textContent = "Le lumière visible ou domaine du visible, regroupe les couleurs que nous pouvons voir avec nos yeux, telles que le rouge, le vert et le bleu.";
      text2.textContent = "La lumière visible, qui a une fréquence comprise entre 400 THz et 800 THz et est utilisée pour la vision, l'éclairage et la communication optique.";
      cta.style.backgroundColor = "rgba(0, 255, 0, 1)";
      play.style.backgroundColor = "rgba(0, 255, 0, 1)";
      playAnimate.style.setProperty("--color-kreyframes", "rgba(0, 255, 0, 1)");
      copyLink.style.color = "rgba(0, 255, 0, 1)";
      decoration.style.setProperty("--color-before-background", "rgba(0, 255, 0, 1)");
      backTop.style.backgroundColor = "rgba(0, 255, 0, 1)";
      break;
    case "ultraviolets":
      halo1.style.setProperty("--color-before-background", "rgba(75, 0, 130, .2)");
      halo2.style.setProperty("--color-after-background", "rgba(75, 0, 130, .2)");
      circle1.setAttribute("src", "assets/images/about-circle-one-ultraviolets.png");
      circle2.setAttribute("src", "assets/images/about-circle-two-ultraviolets.png");
      description.setAttribute("src", "assets/images/about-descri-ultraviolets.png");
      bloc.style.setProperty("--color-after-background", "rgba(139, 0, 255, 1)");
      bgSubtile.style.backgroundColor = "rgba(139, 0, 255, .2)";
      colSubtile.style.color = "rgba(139, 0, 255, 1)";
      title.textContent = "Les ultraviolets";
      text1.textContent = "Les ondes ultraviolettes sont utilisées pour la désinfection et la purification de l'eau, ainsi que pour la bronzage artificiel en cabine.";
      text2.textContent = "L'ultraviolet, qui a une fréquence comprise entre 800 THz et 30 PHz et est utilisé pour la stérilisation, la détection de la fluorescence et les applications médicales.";
      cta.style.backgroundColor = "rgba(139, 0, 255, 1)";
      play.style.backgroundColor = "rgba(139, 0, 255, 1)";
      playAnimate.style.setProperty("--color-kreyframes", "rgba(139, 0, 255, 1)");
      copyLink.style.color = "rgba(139, 0, 255, 1)";
      decoration.style.setProperty("--color-before-background", "rgba(139, 0, 255, 1)");
      backTop.style.backgroundColor = "rgba(139, 0, 255, 1)";
      break;
    case "rayons-x":
      halo1.style.setProperty("--color-before-background", "rgba(0, 0, 255, .2)");
      halo2.style.setProperty("--color-after-background", "rgba(0, 0, 255, .2)");
      circle1.setAttribute("src", "assets/images/about-circle-one-rayons-x.png");
      circle2.setAttribute("src", "assets/images/about-circle-two-rayons-x.png");
      description.setAttribute("src", "assets/images/about-descri-rayons-x.png");
      bloc.style.setProperty("--color-after-background", "rgba(0, 0, 255, 1)");
      bgSubtile.style.backgroundColor = "rgba(0, 0, 255, .2)";
      colSubtile.style.color = "rgba(0, 0, 255, 1)";
      title.textContent = "Les rayons X";
      text1.textContent = "Les rayons X sont utilisés pour l'imagerie médicale, telles que les radios et les scanners. Ils peuvent également être utilisés pour l'inspection des bagages à l'aéroport.";
      text2.textContent = "Les rayons X, qui ont une fréquence comprise entre 30 PHz et 30 EHz et sont utilisés pour la radiographie, la tomographie et le traitement du cancer.";
      cta.style.backgroundColor = "rgba(0, 0, 255, 1)";
      play.style.backgroundColor = "rgba(0, 0, 255, 1)";
      playAnimate.style.setProperty("--color-kreyframes", "rgba(0, 0, 255, 1)");
      copyLink.style.color = "rgba(0, 0, 255, 1)";
      decoration.style.setProperty("--color-before-background", "rgba(0, 0, 255, 1)");
      backTop.style.backgroundColor = "rgba(0, 0, 255, 1)";
      break;
    case "rayons-gamma":
      halo1.style.setProperty("--color-before-background", "rgba(0, 0, 0, .2)");
      halo2.style.setProperty("--color-after-background", "rgba(0, 0, 0, .2)");
      circle1.setAttribute("src", "assets/images/about-circle-one-rayons-gamma.png");
      circle2.setAttribute("src", "assets/images/about-circle-two-rayons-gamma.png");
      description.setAttribute("src", "assets/images/about-descri-rayons-gamma.png");
      bloc.style.setProperty("--color-after-background", "rgba(0, 0, 0, 1)");
      bgSubtile.style.backgroundColor = "rgba(0, 0, 0, .2)";
      colSubtile.style.color = "rgba(0, 0, 0, 1)";
      title.textContent = "Les rayons Gamma";
      text1.textContent = "Les rayons gamma sont des ondes électromagnétiques de haute fréquence et très énergétiques qui ont des utilisations médicales pour la tomographie, la stérilisation et le traitement du cancer. Ils sont également utilisés pour l'inspection de la qualité des soudures dans l'industrie.";
      text2.textContent = "Les rayons gamma, qui ont une fréquence supérieure à 30 EHz et sont utilisés pour la tomographie, la stérilisation et le traitement du cancer.";
      cta.style.backgroundColor = "rgba(0, 0, 0, 1)";
      play.style.backgroundColor = "rgba(0, 0, 0, 1)";
      playAnimate.style.setProperty("--color-kreyframes", "rgba(0, 0, 0, 1)");
      copyLink.style.color = "rgba(0, 0, 0, 1)";
      decoration.style.setProperty("--color-before-background", "rgba(0, 0, 0, 1)");
      backTop.style.backgroundColor = "rgba(20, 20, 20, 1)";
      break;
    default:
      console.log("Ondes-radio");
  }
}
buttons[0].classList.add("header__nav_ul_li_a_active");
buttons.forEach(button => {
  button.addEventListener("click", function () {
    const contentType = button.getAttribute("data-type");
    displayContent(contentType);
    button.classList.add("header__nav_ul_li_a_active");
  });
});
const allLinks = document.getElementsByTagName("a");
for (let i = 0; i < allLinks.length; i++) {
  if (allLinks[i].classList.contains("backTop")) {
    continue;
  }
  allLinks[i].addEventListener("click", function (event) {
    event.preventDefault();
  });
}