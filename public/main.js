var trash = document.getElementsByClassName("trash");


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