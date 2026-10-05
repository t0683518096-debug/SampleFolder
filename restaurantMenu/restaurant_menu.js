const breakfastMenu = ['Pancakes', 'Eggs Benedict', 'Oatmeal', 'Frittata'];
const mainCourseMenu = ['Steak', 'Pasta', 'Burger', 'Salmon'];
const dessertMenu = ['Cake', 'Ice Cream', 'Pudding', 'Fruit Salad'];

// <---------- création du menu du petit dejeuner ------------>
const breakfastMenuItemsHTML = breakfastMenu.map((item, index) => `<p>Item ${index + 1}: ${item}</p>`).join('');

// insertion dans la page web
document.getElementById('breakfastMenuItems').innerHTML = breakfastMenuItemsHTML;

// <--------- creation du menu principal ------------>
 let mainCourseItem = '';
mainCourseMenu.forEach((item, index) => {
mainCourseItem += `<p>Article ${index + 1}: ${item}</p>`;});
// insertion dans la page web
document.getElementById('maincourseMenuItems').innerHTML = mainCourseItem;

// <---------- creation du menu des desserts ------------->
let dessertItem = '';
for (let i = 0; i < dessertMenu.length; i++) {
    dessertItem += `<p>Article ${i + 1}: ${dessertMenu[i]}</p>`;}
// Insertion dans la page web
document.getElementById('dessertMenuItems').innerHTML = dessertItem;"
