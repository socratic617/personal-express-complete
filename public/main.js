var trash = document.getElementsByClassName("trash");
var update = document.getElementsByClassName("update");

var updatePostBtn = document.querySelector('#updatebtn')
updatePostBtn.addEventListener('click', submitUpdatedPost)

function submitUpdatedPost(){

 let idPost = document.querySelector('#yourid').value;
 let title = document.querySelector('#modal-title').value;
 let img = document.querySelector('#modal-image').value;
 let content = document.querySelector('#modal-description').value;

 fetch('blogs', {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: idPost,
        title: title,
        image: img,
        description: content
      })
    })
    .catch((err) => {
          console.log(`error ${err}`);
    });
}

Array.from(update).forEach(function(element) {
  element.addEventListener('click', function(){

    const idPost = this.parentNode.parentNode.id 
    const img = this.parentNode.parentNode.childNodes[1].src
    const title = this.parentNode.childNodes[1].innerText
    const content = this.parentNode.childNodes[3].innerText

      // Given a form with no id I want to add an id that is the post's id in my mongoDB database "_id"
    document.querySelector('#yourid').value = idPost;
    document.querySelector('#modal-title').value = title;
    document.querySelector('#modal-image').value = img;
    document.querySelector('#modal-description').value = content; 
  });

});


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){

    const idPost = this.parentNode.parentNode.id

    fetch('/blogs', {
      method: 'delete',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        id: idPost
      })
    }).then(function (response) {
      window.location.reload()
    })
  });
  
});




