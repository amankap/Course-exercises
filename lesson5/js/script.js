`use strict`;

let menu = document.getElementsByClassName("menu")[0],
    menu_item = document.getElementsByClassName("menu-item");
    title = document.getElementById("title"),
    column = document.getElementsByClassName("column adv"),
    adv = document.getElementsByClassName('adv')[0],
    newItemLi = document.createElement("li"),
    promptforApple = document.getElementById("prompt");

    
    newItemLi.classList.add("menu-item");
    newItemLi.textContent = "Пятый элемент";
    menu.appendChild(newItemLi);
    
document.body.style.background = "url(img/apple_true.jpg) center no-repeat";
title.textContent = "Мы продаем только подлинную технику Apple";  
menu.insertBefore(menu_item[2], menu_item[1]);
adv.remove();
  
 let question = prompt("Ваше отношение к Apple ?");
 promptforApple.textContent = question;
   
   

