
'use strict';

const optArticleSelector = '.post',
    optTitleSelector = '.post-title',
    optTitleListSelector = '.titles',
    optArticleTagsSelector = '.post-tags .list';
    optArticleAuthorSelector = '.post-author'

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

function generateTags(){
  let allTags = [

  ]

    const articleTags = article.querySelectorAll('.posts .post')
    console.log(articleTags)

    for(let article of articleTags){
      const articleTitle = article.querySelector(optArticleTagSelector).innerHTML;
      const articleId = article.id;
    }

    //start loop
      let html= ''

     // What GOIN ON HERE const articleTags = event.target.parentElement;

    /* [NEW] check if this link is NOT already in allTags */
    if(allTags.indexOf(linkHTML) == -1){
      /* [NEW] add generated code to allTags array */
      allTags.push(linkHTML);
    }

     const articleTagsArray = articleTags.split(' ');
     console.log(articleTagsArray)

      for(let tag of articleTagsArray){
        console.log(tag)
      }


   /* [NEW] find list of tags in right column */
   const tagList = document.querySelector(optTagsListSelector);

   /* [NEW] add html from allTags to tagList */
   tagList.innerHTML = allTags.join(' ');
  }


      const listArticleTags = '<li><a href="#' + tag + '"><span>' + articleTag + '</span></a></li>';



  generateTags();


    function tagClickHandler(event){
      console.log('Tag was clicked');
      event.preventDefault();

    const clickedElement = event.target.parentElement;
    console.log(clickedElement)

      function querySelectorAll ( 'a[href="' + href + '"]')



        const activeArticleTags = article.querySelectorAll('list.post-tags a.active')
        console.log(activeArticleTags)

        for(let activeArticleTag of activeArticleTags){
          activeArticleTag.classList.remove('active');

          function generateTitleLinks(customSelector = ''){
            const articles = document.querySelectorAll(optArticleSelector + customSelector);

        }

      }

    function addClickListenersToTags(){


      const tag = tag.querySelectorAll('.posts .post')
      console.log(tag)

      for(let link of links){
        const link = article.querySelector(optArticleTagSelector).innerHTML;

    }

    addClickListenersToTags();

   function generateAuthors(){



   }


   function generateAuthors(){

    const authorsList = document.querySelectorAll('.post-author')


    }
    generateAuthors();
   }

  function addClickListenersToAuthors(){

  }

  function authorClickHandler() {

  }