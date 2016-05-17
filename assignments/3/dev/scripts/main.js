document.getElementById('menuButton').onclick = function() { 
    var Menu = document.getElementById('Menu');
    if (Menu.style.display != 'block') {
        Menu.style.display = 'block';
    }
    else {
        Menu.style.display = 'none';
    }


    var head = document.getElementsByTagName('head')[0];
    var style = document.createElement('style');
    style.id = 'newStyle';
    head.appendChild(style);
};


var items = document.querySelectorAll('.filter-sections div');
animate(items);

each('.filter-links li a', function(el) {
    el.addEventListener('click', function(e) {
        e.preventDefault();
        filterLinks(el);
    });
});


function filterLinks(element) {

    var el = element.textContent,
   
        linksTolowerCase = el.toLowerCase();
  
    if (el === 'All') {
   
        each('.view', function(e) {
            e.classList.remove('view');
        });
    
        animate(items);
    } else {
   
        each('.view', function(e) {
            e.classList.remove('view');
        });
    }

    animate(document.querySelectorAll('.' + linksTolowerCase));
}

function each(el, callback) {
    var allDivs = document.querySelectorAll(el),
        alltoArr = Array.prototype.slice.call(allDivs);
    Array.prototype.forEach.call(alltoArr, function(selector) {
        if (callback) return callback(selector);
    });
}

function animate(item) {
    (function show(counter) {
        setTimeout(function() {
            item[counter].classList.add('view');
            counter++;
            if (counter > item.length) show(counter);
        },50);
    })(1);
}


window.onload = function () {
    'use strict';

    var modal = document.createElement('div');
    modal.id = 'backlayer';
    document.body.appendChild(modal);

    var modaltwo = document.createElement('div');
    modaltwo.id = 'frontlayer';
    modaltwo.textContent = 'What does Post-Internet Art mean to you?';
    document.body.appendChild(modaltwo);

    var button = document.getElementsByTagName('div')['footer'];
    button.addEventListener('click',showModal,false);
    modal.addEventListener('click',closeModal,false);

    function showModal(){
        modal.style.display = 'block';
        modaltwo.style.display = 'block';

    }

    function closeModal(){
        modal.style.display = 'none';
        modaltwo.style.display = 'none';
    }

    window.onkeydown = function(e){
        if(e.keyCode == 27){
            closeModal();
        }
    };
};




