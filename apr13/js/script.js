

var items = document.querySelector('#items');
var photos = document.querySelectorAll('li');



var itemArray = [
    {
        img: "http://unsplash.it/256/256?image=100" , 
        alt:"Is it working?",
        title: "Unsplash photo" , 
        cost: 100,
        desc: "another image that im selling"
    },
    {
        img: "http://unsplash.it/256/256?image=200" , 
        alt:"Is it working?",
        title: "Unique Photo" , 
        cost: 50,
        desc: "This image is amazing"
    },
    {
        img: "http://unsplash.it/256/256?image=300" , 
        alt:"Is it working?",
        title: "Another Unsplash photo" , 
        cost: 1000,
        desc: "another image that im selling"
    },
    {
        img: "http://unsplash.it/256/256?image=160" , 
        alt:"Is it working?",
        title: "Unsplash photo" , 
        cost: 500,
        desc: "another image that im selling"
    },
    {
        img: "http://unsplash.it/256/256?image=400" , 
        alt:"Is it working?",
        title: "Unsplash photo" , 
        cost: 89,
        desc: "another image that im selling"
    },
    {
        img: "http://unsplash.it/256/256?image=500" , 
        alt:"Is it working?",
        title: "Unsplash photo" , 
        cost: 73,
        desc: "another image that im selling"
    },





];

function displayItems (arr){
    for(var i = 0; i < arr.length; i++){

        // console.log(arr[i].alt);
       
        var item = `
        <li data-sku="00${i}">
                        <input type="checkbox">
                        <img src = "${arr[i].img}" src="http://unsplash.it/256/256" alt="${arr[i].alt}">
                        <h3>${arr[i].title}</h3>
                        <p>${arr[i].cost}</p>
                        <p>${arr[i].desc}</p>
                    </li>
        `;
        items.innerHTML += item;
    }
   
}

displayItems(itemArray);

function addListener (arr){
    for(var i = 0; i < arr.length ; i++){
        arr[i].addEventListener('click', function(evt){
           
            this.classList.toggle('selected');
            // this.firstElementChild.checked = true;
            (this.firstElementChild.checked) ?  
            this.firstElementChild.checked = false :
            this.firstElementChild.checked = true;
            // console.log(this.dataset.sku);
            // selectedArray.push(arr[this.dataset.sku]);
            // selectedArray.push(arr.slice(this.dataset.sku));
            console.log(Array.from(arr).slice(this.dataset.sku));
            console.log(selectedArray);
        });
        // console.log(this.firstElementChild.checked);
    }
     
}



addListener(items.children);