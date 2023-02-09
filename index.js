const input = document.getElementById('image')

let url;


image.addEventListener('change', (e) => {
    const fileUrl = e.target.files[0]
    console.log(fileUrl)

    const fr = new FileReader()
    let value;
    fr.addEventListener('load', () => {
        url = fr.result
        // localStorage.setItem('recent-image', url)
        // console.log(url)
       value = url
    })

    fr.readAsDataURL(fileUrl)
    
    value = URL.createObjectURL(fileUrl)
    console.log(value)
    fetch(url)
      .then(res => res.blob())
      .then(blob => {
        const file = new File([blob], e.target.files[0].name,{ type: "image/png" })
        console.log(file)
      })
})

// image.addEventListener('change', (e) => {
//     var file = e.target.files[0];
//     var reader = new FileReader();
//     reader.onloadend = function() {
//     console.log('Encoded Base 64 File String:', reader.result);
    
//     /******************* for Binary ***********************/
//     var data=(reader.result).split(',')[1];
//      var binaryBlob = atob(data);
//      console.log('Encoded Binary File String:', binaryBlob);
//      }
//   reader.readAsDataURL(file);
//   console.log()
// })


// function uploadFile(inputElement) {
//   var file = inputElement.files[0];
//   var reader = new FileReader();
//   reader.onloadend = function() {
//     console.log('Encoded Base 64 File String:', reader.result);
    
//     /******************* for Binary ***********************/
//     var data=(reader.result).split(',')[1];
//      var binaryBlob = atob(data);
//      console.log('Encoded Binary File String:', binaryBlob);
//   }
//   reader.readAsDataURL(file);
// }



