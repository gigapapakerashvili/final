let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=1');

xhr.onreadystatechange = function() {

    if (xhr.readyState !== 4) return;

    if (xhr.status === 200) {


        img = JSON.parse(xhr.responseText).data[3].avatar;

        name = JSON.parse(xhr.responseText).data[3].first_name;

        document.getElementById('img').src = img;


        document.getElementById('name').innerHTML = name;


    }
    else {

    }
};


xhr.send();