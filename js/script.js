'use strict';
'use strict';

function titleClickHandler(){
  const links = document.querySelectorAll('.titles a');
  console.log(links);
}

const buttonTest = document.getElementById('button-test');

buttonTest.addEventListener('click', titleClickHandler);

'use strict';

function titleClickHandler(event){
  console.log('Link was clicked!');

  /* remove class 'active' from all article links  */
  const activeArticles = document.querySelectorAll('.titles a.active');

  for(let activeArticle of activeactiveArticles){
    activeArticle.classList.remove('active');
  }
  /* add class 'active' to the clicked link */

  /* remove class 'active' from all articles */
  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */

  /* find the correct article using the selector (value of 'href' attribute) */

  /* add class 'active' to the correct article */
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
console.log(event)}
