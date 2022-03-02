
'use strict';

function titleClickHandler(){
  const links = document.querySelectorAll('.titles a');
  console.log(links);
}

const buttonTest = document.getElementById('button-test');

buttonTest.addEventListener('click', titleClickHandler);


function titleClickHandler(event){
  console.log('Link was clicked!');
  event.preventDefault();

  /* remove class 'active' from all article links  */
  const activeArticles = document.querySelectorAll('.titles a.active');

  for(let activeArticle of activeactiveArticles){
    activeArticle.classList.remove('active');
  }
  /* add class 'active' to the clicked link */
  console.log('clickedElement:', clickedElement);
  const clickedElement = this;

  /* remove class 'active' from all articles */

  const activeLinks = document.querySelectorAll('.titles a.active');

for(let activeLink of activeLinks){
  activeLink.classList.remove('active');
}

  /* get 'href' attribute from the clicked link */


  function articleSelector(event){
    console.log('Link was clicked!');


  /* find the correct article using the selector (value of 'href' attribute) */

  function targetArticle(querySelector){

  }
  /* add class 'active' to the correct article */

  function targetArticle(querySelector){

}

}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
} }
