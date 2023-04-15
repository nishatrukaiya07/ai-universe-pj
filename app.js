let allData =[]
const loadData = async() =>{
  const url =`https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  allData = data.data.tools;
  displayData(data.data.tools);
}

const displayData = tools =>{
// console.log(tools);
const toolsContainer = document.getElementById('tools-container');
tools = tools.slice(0,6);
tools.forEach(tool =>{
  // console.log(tool);
  const toolDiv = document.createElement('div');
  toolDiv.classList.add('col');
  toolDiv.innerHTML=`
  <div class="card h-100  rounded">
    <img src="${tool.image}" class="card-img-top p-3 " alt="...">
    <div class="card-body bg-body ">
      <h5 class="card-title">Features</h5>
      <ol>
      <li>Natural language processing</li>
      <li> Contextual understanding</li>
      <li>Text generation</li>
      </ol>
    </div>
    <hr class="mx-4">
    <div class="card-footer border-0 bg-body">
       <h5 class="card-title">${tool.name}</h5>
      <div class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-calendar-days m-0 p-0 "></i>
          <p class="m-0 p-0">11/01/2022</p>
        </div>
        <div class = "bg-danger-subtle opacity-50  text-danger px-3 py-3 rounded-5 mb-4">
          <i class ="fas fa-arrow-right " onclick = "fetchShowDetails('${tool.id}')"data-bs-toggle="modal" data-bs-target="#toolDetailsModal"></i>
        </div>
     </div>
    </div>
  </div>
  `
toolsContainer.appendChild(toolDiv);
})

}

const fetchShowDetails = id => {
  let url = `https://openapi.programming-hero.com/api/ai/tool/${id}`
  fetch(url)
  .then(res=>res.json()) 
  .then(data=>seeMoreDetails(data.data));
}

const seeMoreDetails = tool =>{
  // console.log(url)
  const toolDetails =document.getElementById('tool-details');
  toolDetails.innerHTML = `
  <div class="row g-4">
  <div class="col">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title"> ${tool.description}</h5>
        <div class ="d-flex justify-content-between">
          <p>${tool.pricing[0].price} ${tool.pricing[0].plan}</p>
          <p>${tool.pricing[1].price} ${tool.pricing[1].plan}</p>
          <p>${tool.pricing[2].price} ${tool.pricing[2].plan}</p>
        </div>
          <div>
             <div>
               <h5>Features</h5>
                  <ul  class ="text-secondary">
                    <li>${tool.features.feature_name}</li>
                    <li>${tool.features.feature_name}</li>
                    <li>${tool.features.feature_name}</li>
                 </ul>
             </div>
             <div>
               <h5>Integrations</h5>
                 <ul  class ="text-secondary">
                    <li>${tool.integrations[0]}</li>
                    <li>${tool.integrations[1]}</li>
                    <li>${tool.integrations[2]}</li>
                </ul>
             </div>
          </div>
      </div>
    </div>
  </div>
  <div class="col">
    <div class="card">
      <img class="img-fluid" src="${tool.image_link[0]}" class="card-img-top" alt="...">
      <div class="card-body">
        <h5 class="card-title">${tool.input_output_examples[0].input}</h5>
        <p class="card-text">${tool.input_output_examples[0].output}</p>
      </div>
    </div>
  </div>
</div>
  `
}

loadData();

// <div class ="d-flex justify-content-between">
//   <div class ="border">
//   <h5> </h5>
  
//   <div class = "d-flex justify-content-between px-4 mb-4">
//   <div>
  
//   </div>
//   <div>
  
//   </div>
//   </div>
//   </div>
//   <div class ="border container">
//   <img class="img-fluid" src="${tool.image_link[0]}" alt="...">
//   </div>
//   </div>