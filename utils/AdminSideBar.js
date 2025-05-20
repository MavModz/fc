

export function activateMenu(id,t,isbtn=false) {
    document.getElementById('title1').innerHTML=t
    document.getElementById('title2').innerHTML=t
    if(isbtn && document.getElementById('backbtn1')){
        document.getElementById('backbtn1').style.display='block';
    }else if(document.getElementById('backbtn1')){
        document.getElementById('backbtn1').style.display='none';
    }
    if(isbtn && document.getElementById('backbtn2')){
        document.getElementById('backbtn2').style.display='block';
    }else if(document.getElementById('backbtn2')){
        document.getElementById('backbtn2').style.display='none';
    }
    var elements = document.querySelectorAll('.active-submenu, .active-page');
    elements.forEach(function(element) {
        element.classList.remove('active-submenu', 'active-page');
    });
    document.getElementById(id).classList.add('active-page');
}


export function activateSubmenu(elementId,t,isbtn=false) {
    document.getElementById('title1').innerHTML=t
    document.getElementById('title2').innerHTML=t
    if(isbtn && document.getElementById('backbtn1')){
        document.getElementById('backbtn1').style.display='block';  
    }
    else if(document.getElementById('backbtn1')){
        document.getElementById('backbtn1').style.display='none';
    }
    if(isbtn && document.getElementById('backbtn2')){
        document.getElementById('backbtn2').style.display='block';  
    }
    else if(document.getElementById('backbtn2')){
        document.getElementById('backbtn2').style.display='none';
    }
    var elements = document.querySelectorAll('.active-submenu, .active-page');
    elements.forEach(function(element) {
        element.classList.remove('active-submenu', 'active-page');
    });
    var element = document.getElementById(elementId);
    element.classList.add('active-submenu');
    var parentElement = element.parentElement;
    while (parentElement && !parentElement.classList.contains('men')) {
        parentElement = parentElement.parentElement;
    }
    parentElement.classList.add('active-page');
}

