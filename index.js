'use-strict'

const generateButton = document.getElementById('generateButton');
const id_name = document.getElementById('fullname');
const id_branch = document.getElementById('branch')
const id_department = document.getElementById('department')
const id_number = makeid(5);

generateButton.addEventListener('click',function(e){
  e.preventDefault();
  e.target.innerHTML = 'Generating..'
  e.target.disabeld = true;

  const id_name_Placeholder = document.getElementById('id_name')
const id_branch_Placeholder = document.getElementById('id_position')
const id_department_Placeholder = document.getElementById('id_branch');
const id_number_placeholder = document.getElementById('id_no');


id_name_Placeholder.textContent = id_name.value;
id_branch_Placeholder.textContent = id_branch.value;
id_department_Placeholder.textContent = id_department.value;
id_number_placeholder.textContent = "SMAN-"+id_number;

  html2canvas(document.querySelector('#capture')).then(canvas => {
    window.top = 0;
    var link = document.createElement('a');
  link.download = 'passport.png';
  link.href = canvas.toDataURL()
    link.click();

}).catch(e => {
  console.log(e)
})

})



function addImage(e) {
  
    var file    = document.querySelector('input[type=file]').files[0];
  var reader  = new FileReader();

  reader.onloadend = function () {
    console.log(reader.result)

    const imageContainer = document.querySelector('#passport-image-container');
    var image = document.createElement('img');
    image.src = reader.result;
    image.style.height = "100%";
    image.style.width = "100%";
    imageContainer.appendChild(image);

  }

    reader.readAsDataURL(file);
}

function makeid(length) {
   var result           = '';
   var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
   var charactersLength = characters.length;
   for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
   }
   return result;
}
