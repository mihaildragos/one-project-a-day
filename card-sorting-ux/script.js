const categoriesWrapper = document.querySelector('.right');
const addCategory = document.querySelector('.add');
var ceva;

function start() {
  let categoryNames = document.querySelectorAll('h3.cat-name');
  categoryNames.forEach(name => {
    name.addEventListener('dblclick', function (e) {
      if(e.target.parentNode.children[1].textContent === "Double Click to rename this category"){
        e.target.parentNode.children[1].remove();
      }
      var val=this.innerHTML.trim();
      var input=document.createElement("input");
      input.value=val;
      input.onblur=function(){
        var val=this.value;
        this.parentNode.innerHTML=val;
      }
      this.innerHTML="";
      this.appendChild(input);
      input.focus();
    })
  });
  
  let closeCategory = document.querySelectorAll('.cat-close');

  closeCategory.forEach(cat => {
    cat.addEventListener('click', (e) => {
      let node = e.target.parentNode;
      let itemsInside = node.children[2].children;

      if(itemsInside.length > 0){
        let colLeft = document.querySelector('.left');
        for(let i=0; i <= itemsInside.length + 1; i++) {
          itemsInside = node.children[2].children;
          colLeft.appendChild(itemsInside[0]);
          console.log('appended');
        }
        colLeft.appendChild(itemsInside[0]);
      }
      console.log(categoriesWrapper);
      categoriesWrapper.removeChild(node);
    });
  });

  sortable('.left, .cat-content', {
    items: '.item',
    acceptFrom: '.cat-content, .left ',
    // dropTargetContainerClass: 'is-drop-target',
    forcePlaceholderSize: true,
    placeholderClass: 'ph-border'
  });
}

addCategory.addEventListener('click', (e) => {
  let categoryNode = document.querySelector('.sample').cloneNode(true);
  let newNode = categoryNode;
  categoriesWrapper.appendChild(newNode);
  let hiddenCat = document.querySelectorAll('.sample');
  hiddenCat[1].classList.remove('sample');
  categoriesWrapper.appendChild(addCategory);
  start();
});

start();


