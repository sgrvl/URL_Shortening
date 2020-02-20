var url = document.getElementById('url');
var submit = document.getElementById('submit');
var alert = document.getElementsByClassName('alert-text')[0];
var form = document.querySelector('form');


function valid() {
    url.addEventListener('invalid',function(e){
        e.preventDefault();
        url.classList.add('url-border');
        alert.style.display = 'block';
    });

    url.addEventListener('valid',function(){
        console.log('valid');
    });
}