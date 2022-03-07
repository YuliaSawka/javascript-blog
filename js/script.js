
'use strict';

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles';

function generateTitleLinks(){

const articleList = document.querySelectorAll('.posts .post')
console.log(articleList)

let titleLinksHtml = '';

for(let article of articleList){
    const articleTitle = article.querySelector(optTitleSelector).innerHTML;
    const articleId = article.id;
    const listTitleElement = '<li><a href="#' + articleId + '"><span>' + articleTitle + '</span></a></li>';

    titleLinksHtml = titleLinksHtml + listTitleElement

}


const listTitleContainer = document.querySelector(optTitleListSelector)

listTitleContainer.innerHTML = titleLinksHtml;


}
generateTitleLinks();


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

 const clickedLink = event.target.parentElement;

 function querySelector(herf){
    console.log('herf');
}


  /* [DONE] remove class 'active' from all article links  */

  const activeArticleLinks = document.querySelectorAll('.list.titles a.active');

  for(let activeArticleLink of activeArticleLinks){
    activeArticleLink.classList.remove('active');
  }

//   /* [DONE] add class 'active' to the clicked link */

clickedLink.classList.add('active')


//   /* [DONE] remove class 'active' from all articles */

  const activeArticles = document.querySelectorAll('.posts .post.active');

for(let activeArticle of activeArticles){
   activeArticle.classList.remove('active');
 }

//   [DONE] * get 'href' attribute from the clicked link */


     console.log('Link was clicked!');
     const articleIdSelector = clickedLink.getAttribute('href');
     const article = document.querySelector(articleIdSelector);

     article.classList.add('active')













}