var trash = document.getElementsByClassName("trash");
var update = document.getElementsByClassName("update");
var updatePostBtn = document.querySelector('#updatebtn')

updatePostBtn.addEventListener('click', submitUpdatedPost)

function submitUpdatedPost(){

 let idPost = document.querySelector('#yourid').value;
 console.log('idpost: ',idPost)
 let title = document.querySelector('#modal-title').value;
 console.log("this is my title: ",title)
 let img = document.querySelector('#modal-image').value;
 console.log("this is my image: ",img)
 let content = document.querySelector('#modal-description').value;
 console.log("this is my content: ",content)

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
    .then(function (response) {
      console.log("successfully fetched")
      // window.location.reload()
    })
    .catch((err) => {
          console.log(`error ${err}`);
    });
}

Array.from(update).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log('my update button works')
    const idPost = this.parentNode.parentNode.id //960568464584
    // console.log('idpost: ',idPost)
    const img = this.parentNode.parentNode.childNodes[1].src
    // console.log("this is my image: ",img)
    const title = this.parentNode.childNodes[1].innerText
    // console.log("this is my title: ",title)
    const content = this.parentNode.childNodes[3].innerText
    // console.log("this is my content: ",content)

      // Given a form with no id I want to add an id that is the post's id in my mongoDB database "_id"
    document.querySelector('#yourid').value = idPost;
    document.querySelector('#modal-title').value = title;
    document.querySelector('#modal-image').value = img;
    document.querySelector('#modal-description').value = content; 
  });

});


Array.from(trash).forEach(function(element) {
  element.addEventListener('click', function(){
    console.log("inside trash callback function")
    const idPost = this.parentNode.parentNode.id
    console.log(element )
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




