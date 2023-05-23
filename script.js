const container = document.getElementById('grid');
let btn = document.getElementById("btn");
btn.addEventListener("click", function popup() {
  let size = parseInt(prompt("How large would you like the grid to be? i.e. if you want 16x16 you would say 16, if you want 20x20 say 20: "));
  makeDivs(size * size);
  container.style.gridTemplateColumns = `repeat(${size}, auto)`;
});




function makeDivs(numDivs) {
  for (let i = 0; i < numDivs; i++){
    let cells = document.createElement('div');
    cells.classList.add("div");
    container.appendChild(cells);
    cells.addEventListener('mouseover', function() {
      cells.classList.add("changeColor");
    });  
  }
}


