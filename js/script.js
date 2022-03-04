
'use strict';

function titleClickHandler(){
  const links = document.querySelectorAll('.titles a');
  console.log(links);
}

const links = document.querySelectorAll('.titles a');

for(let link of links){
  link.addEventListener('click', titleClickHandler);
}


function buttonClicked(buttonName){
  console.log(buttonName + ' został kliknięty');
}


function titleClickHandler(event){
  console.log('Link was clicked!');
  event.preventDefault();



  /* [DONE] remove class 'active' from all article links  */

  const activeArticles = document.querySelectorAll('.titles a.active');

  for(let activeArticle of activeactiveArticles){
    activeArticle.classList.remove('active');
  }

  /* [IN PROGRESS] add class 'active' to the clicked link */

  element.addClass('active')
  console.log('clickedElement:', clickedElement);
  const clickedElement = this;

  /* [DONE] remove class 'active' from all articles */

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




const optArticleSelector = '.post',
  optTitleSelector = '.post-title',
  optTitleListSelector = '.titles';

function generateTitleLinks(){

  /* remove contents of titleList */

  /* for each article */

    /* get the article id */

    /* find the title element */

    /* get the title from the title element */

    /* create HTML of the link */

    /* insert link into titleList */

}

generateTitleLinks(); }