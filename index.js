//variables
const img = document.querySelector(".img");
const btn = document.querySelector(".btn");
const screen1 = document.querySelector(".screen1");
const screen2 = document.querySelector(".screen2");
let rondomNumber = Math.round(Math.random() * 10);

//events
img.addEventListener("click", handleClick);
btn.addEventListener("click", handleButton);
//functions

function handleClick(e) {
  rondomNumber = Math.round(Math.random() * 10);
  if (e && screen2.classList.contains("hide")) {
    handleToggle();
    luck(rondomNumber);
  }
}
function luck(rondomNumber) {
  console.log(rondomNumber);
  switch (rondomNumber) {
    case 0:
      document.querySelector(".screen2 p").innerText =
        "Dentro de você, há uma luz muito forte! Acredite nela e deixe que ela ilumine o seu dia.";
      break;
    case 1:
      document.querySelector(".screen2 p").innerText =
        " Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.";
      break;
    case 2:
      document.querySelector(".screen2 p").innerText =
        " Eu acredito demais na sorte. E tenho constatado que, quanto mais duro eu trabalho, mais sorte eu tenho.";
      break;
    case 3:
      document.querySelector(".screen2 p").innerText =
        "A sorte não existe. Aquilo a que chamas sorte é o cuidado com os pormenores";
      break;
    case 4:
      document.querySelector(".screen2 p").innerText =
        "Homens fracos acreditam na sorte. Homens fortes acreditam em causa e efeito.";
      break;
    case 5:
      document.querySelector(".screen2 p").innerText =
        "Tente a sua sorte! A vida é feita de oportunidades. O homem que vai mais longe é quase sempre aquele que tem coragem de arriscar.";
      break;
    case 6:
      document.querySelector(".screen2 p").innerText =
        "Respire fundo e fique atento às surpresas deliciosas que a vida preparou para você!";
      break;
    case 7:
      document.querySelector(".screen2 p").innerText =
        "Nem todos os dias são bons, mas há algo bom em cada dia.";

      break;
    case 8:
      document.querySelector(".screen2 p").innerText =
        " Um passo de cada vez. Até meio passo serve. Siga firme, não há motivo para ter pressa.";
      break;
    case 9:
      document.querySelector(".screen2 p").innerText =
        "  Suba o primeiro degrau com fé. Não é necessário que você veja toda a escada, apenas dê o primeiro passo.";
      break;
    case 10:
      document.querySelector(".screen2 p").innerText =
        " Toda manhã você tem duas escolhas: continuar dormindo com seus sonhos ou acordar e persegui-los!.";

      break;
    default:
      break;
  }
}
function handleButton(e) {
  if (e && screen1.classList.contains("hide")) {
    handleToggle();
  }
}
function handleToggle() {
  screen1.classList.toggle("hide");
  screen2.classList.toggle("hide");
}
