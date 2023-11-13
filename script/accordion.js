// accordion contacts-block
const contactsBlock = document.querySelector(".accordion");
const contactsTitle = document.querySelectorAll(".contacts__item h3");
const contactsContent = Array.from(document.querySelectorAll(".content"));
const rows = Array.from(document.querySelectorAll(".right-icon"));

contactsBlock.addEventListener("click", showContactsItem);

function showContactsItem(e) {
  contactsTitle.forEach((el, index) => {
    if (
      (e.target === el || e.target === rows[index]) &&
      contactsContent[index].classList.contains("hide")
    ) {
      contactsContent[index].classList.remove("hide");
      rows[index].style.transform = "rotate(270deg)";
    } else {
      contactsContent[index].classList.add("hide");
      rows[index].style.transform = "rotate(90deg)";
    }
  });
}
