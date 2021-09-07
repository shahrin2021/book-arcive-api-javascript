
// button handelar 
document.getElementById('button').addEventListener('click',function(){
    inputValue()
})

//  get input data 
const searchInput = document.getElementById('search-input');

const inputValue = () =>{
    const searchText = searchInput.value; 
    if(searchText === ""){
        const error = document.getElementById('error')
        const h4 = document.createElement('h4');
        h4.innerText=`No Result Found`
       error.appendChild(h4)
      
    } else{
        lodeData(searchText);
       
    }
    searchInput.value= "";
   
}

//  call the api data

const lodeData = async searchText =>{
    const url = `https://openlibrary.org/search.json?q=${searchText}`;
    const res = await fetch(url);
    const data= await res.json();
    displayData(data)
}


const style= [ 'text-center', 'shadow','py-3', 'bg-secondary','text-white'];

// diasplay data 
const displayData = data =>{
    const countBook= document.getElementById('countBook');
    countBook.textContent="";
    const dataField= document.getElementById('dataField');
    dataField.textContent="";
    const infos = data.docs;
    const countDiv = document.createElement('div');
    countDiv.classList.add(...style) 
    countDiv.innerHTML=`
    <h3> Your Total Result : ${data.numFound} </h3>
    
    `;
    countBook.appendChild(countDiv);
    infos.forEach(information =>{
        const div = document.createElement('div');
        div.classList.add('col');

        div.innerHTML=`
    
        <div class="card">
        <div class="card-body">
        <img src="https://covers.openlibrary.org/b/id/${information.cover_i}-M.jpg" class="card-img-top" alt="...">
          <h5 class="card-title"> Book-Title:${information.title}</h5>
          <small class="card-title"> Author-Name:${information.author_name}</small>
          <h6 class="card-title"> Publish Year :${information.first_publish_year}</h6>
          <p class="card-text">Publish date ${information.publish_date[1]}</p>
        </div>
      </div>
        ` ; 
        dataField.appendChild(div);
        
    })
   
}

