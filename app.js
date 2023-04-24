let allData =[]
const loadData = async(dataLimit) =>{
  const url =`https://openapi.programming-hero.com/api/ai/tools`
  const res = await fetch(url);
  const data = await res.json();
  allData = data.data.tools;
  displayData(data.data.tools ,dataLimit);
  toggleSpinner(false);
}

const displayData = (tools ,dataLimit) =>{
// console.log(tools);
const toolsContainer = document.getElementById('tools-container');
if(dataLimit && tools.length>6){
  tools = tools.slice(0,6);
}
tools.forEach(tool =>{
  // console.log(tool);
  const toolDiv = document.createElement('div');
  toolDiv.classList.add('col');
  toolDiv.innerHTML=`
  <div class="card h-100 px-3 py-3 bg-white">
    <img class="img-fluid rounded-4 mb-3" src="${tool.image}" class="card-img-top p-3 " alt="...">
    <div class="card-body bg-body ">
      <h5 class="card-title fw-bolder">Features</h5>
      <ol class="text-secondary">
      <li>Natural language processing</li>
      <li> Contextual understanding</li>
      <li>Text generation</li>
      </ol>
    </div>
    <hr class="mx-4">
    <div class="card-footer border-0 bg-body">
       <h5 class="card-title fw-bolder">${tool.name}</h5>
      <div class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-calendar-days text-secondary m-0 p-0 "></i>
          <p class="m-0 p-0 text-secondary">11/01/2022</p>
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
  
  <div class="row g-2 d-flex justify-content-between mx-5 my-5 ">
  <div class="col-sm-6 mb-3 mb-sm-0">
    <div class="card h-100 bg-danger-subtle" style="width: 487px;">
      <div class="card-body px-5 py-5">
        <h5 class="card-title py-2 fw-bolder "> ${tool.description}</h5>
        <div class ="d-flex justify-content-between ">
          <p class ="text-success text-center bg-white mx-2 my-3 px-3 py-3 rounded-3">${tool.pricing[0].price} ${tool.pricing[0].plan}</p>
          <p class ="text-warning text-center bg-white mx-2 my-3 px-3 py-3 rounded-3">${tool.pricing[1].price} ${tool.pricing[1].plan}</p>
          <p class ="text-danger  text-center bg-white mx-2 my-3 px-3 py-3 rounded-3">${tool.pricing[2].price} ${tool.pricing[2].plan}</p>
        </div>
          <div class = "d-flex justify-content-between mt-5">
             <div>
               <h5 class="fw-bolder">Features</h5>
                  <ul  class ="text-secondary">
                    <li>${tool.features["1"].feature_name}</li>
                    <li>${tool.features["2"].feature_name}</li>
                    <li>${tool.features["3"].feature_name}</li>
                 </ul>
             </div>
             <div>
               <h5  class="fw-bolder">Integrations</h5>
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
    <div class="card h-100 px-5 py-5"  style="width: 487px;">
      <img class="img-fluid rounded-3 mb-3" src="${tool.image_link[0]}" class="card-img-top" alt="...">
      <span class="badge text-bg-danger position-absolute top-0 end-0 mx-5 my-5 px-2 py-2">94% accuracy</span>
      <div class="card-body">
        <h5 class="card-title fw-bolder">${tool.input_output_examples[0].input}</h5>
        <p class="card-text text-secondary mt-4">${tool.input_output_examples[0].output}</p>
      </div>
    </div>
  </div>
</div>
  `
}
const toggleSpinner = isLoading => {
  const loaderSection = document.getElementById('loader');
  if(isLoading){
    loaderSection.classList.remove('d-none')
  }
  else {
    loaderSection.classList.add('d-none')
  }
}

const processSearch =(dataLimit)=>{
  loadData(dataLimit);
}

document.getElementById('btn-see-more').addEventListener('click',function(){
  processSearch();
})

loadData();
