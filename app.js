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
  console.log(tool);
  const toolDiv = document.createElement('div');
  toolDiv.classList.add('col');
  toolDiv.innerHTML=`
  <div class="card h-100">
    <img src="${tool.image}" class="card-img-top" alt="...">
    <div class="card-body ">
      <h5 class="card-title">Features</h5>
      <ol>
      <li>Natural language processing</li>
      <li> Contextual understanding</li>
      <li>Text generation</li>
      </ol>
    </div>
    <div class="card-footer border-0 bg-body">
       <h5 class="card-title">${tool.name}</h5>
      <div class="d-flex justify-content-between">
        <div class="d-flex gap-2 align-items-center">
          <i class="fa-solid fa-calendar-days m-0 p-0 "></i>
          <p class="m-0 p-0">11/01/2022</p>
        </div>
        <div class = "bg-danger-subtle px-3 py-3 rounded-5 text-danger mb-4">
          <i class ="fas fa-arrow-right"></i>
        </div>
     </div>
    </div>
  </div>
  `
toolsContainer.appendChild(toolDiv);
})

}


loadData();
