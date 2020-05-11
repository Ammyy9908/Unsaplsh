let loggedUser = () =>{
      document.getElementById('name').addEventListener('click',()=>{
            let name= document.getElementById('uname').value;
            
            if(name.length)
            {
                  if(name.length<6)
            {
            alert('Please Provide Name Greater than 6 letters!');
            }
            else if(name.length>=6)
            {
            localStorage.setItem('ifFirst',true);
            localStorage.setItem('name',name);
            localStorage.setItem('image','img/fallback.jpg');
            window.location.href='index.html';
            
            }
            }
            else{
                  alert('Please provide someting in Name Field!');
            }
            });
}


//check here also is already user logged in or not

if(localStorage.getItem('isFirst'))
{
      window.location.href="index.html";
}
else{
      loggedUser();
}