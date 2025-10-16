



// remove active button class 
function removeActiveClass() {
  const activeButtons = document.getElementsByClassName("active")
  for (let btn of activeButtons) {
    btn.classList.remove("active")
  }
}

// loaded  all categories info 
function loadCategories() {
  // fetch 
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))


}


// loaded video categorry 
function loadVideo(searchText ="") {
  fetch(`https://openapi.programming-hero.com/api/phero-tube/videos?title=${searchText}`)
    .then((Response) => Response.json())
    .then((data) => {
      document.getElementById("btn-all").classList.add("active")

      displayVideos(data.videos)
    })
}
// call id in defferent button like music, comedy etc 
const categoryVideo = (id) => {

  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {

      removeActiveClass();
      // no active class  
      const clickButton = document.getElementById(`btn-${id}`)
      clickButton.classList.add("active")



      displayVideos(data.category)
    })

}
// load Video Detalis 
const loadVideoDetalis = (videoId) => {
  console.log(videoId);

  const url = `https://openapi.programming-hero.com/api/phero-tube/video/${videoId}`
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayVideoDetails(data.video))
}
// load Video Detalis  display 
const displayVideoDetails = (video) => {
  document.getElementById("video_details").showModal();
  const detailsContainer = document.getElementById("details-container");

  detailsContainer.innerHTML = `
  <div class="card bg-base-100 image-full shadow-sm">
  <figure>
    <img src="${video.thumbnail}">
  </figure>
  <div class="card-body">
    <h2 class="card-title">Card Title</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    
  </div>
</div>
  `


}



// display show content 
const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML = "";
  if (videos.length === 0) {
    videoContainer.innerHTML = `
  <div class="col-span-full py-20 flex flex-col text-center items-center py-">
            <img class="w-[120px]" src="/png/Icon.png" alt="">
            <h2 class="text-2xl font-bold">Oop!! sorry there is no content here </h2>
        </div>
  `
    return;
  }
  videos.forEach((video) => {
    const videoCard = document.createElement("div")
    videoCard.innerHTML = `
       
      <div class="card bg-base-100 ">
            <figure class="relative">
                <img class="w-full h-[150px] object-cover" src="${video.thumbnail}" />
                <span class="absolute bottom-2 right-2 text-white bg-black px-2 text-sm rounded">3hrs 56 min ago</span>
            </figure>
            <div class=" flex gap-3 py-5 px-0">
                <div class="profile">
                    <div class="avatar">
                        <div class="ring-primary ring-offset-base-100 w-6  rounded-full ring-2 ring-offset-2">
                            <img src="${video.authors[0].profile_picture}" />
                        </div>
                    </div>
                </div>
                <div class="intro">
                    <h2 class="text-sm font-semibold">Building a Winning UX Strategy <br>
                        Using the Kano Model</h2>
                    <p class="flex  gap-1 text-gray-400 text-sm "> 
                    ${video.authors[0].profile_name}
                    ${video.authors[0].verified == true ? `
                      <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                      `: ``}
                 
                    </p>
                    <p class="text-sm text-gray-400">${video.others.views}views</p>
                </div>
            </div>
            <button onclick=loadVideoDetalis('${video.video_id}') class="btn btn-block">Show Details</button>
        </div>
        
        `
    videoContainer.append(videoCard);

  })
}


// display all button category Videos 
function displayCategories(categories) {

  // get the contaoner ?
  const categoriesContainer = document.getElementById("categories-container")

  // loop operator on arry ?
  for (let cat of categories) {
    console.log(cat);

    // create Element ?
    const categoryDiv = document.createElement("div");
    categoryDiv.innerHTML = `
        <button id="btn-${cat.category_id}" onclick="categoryVideo(${cat.category_id})" class="btn btn-sm hover:[text-white] hover:bg-[#FF1F3D]">${cat.category}</button>
        `;
    // append the element ?
    categoriesContainer.append(categoryDiv);
  }
}
// search input 

document.getElementById("search-input").addEventListener("keyup", (e) => {

  const input = e.target.value;
  loadVideo(input)


})

// call functions :-

loadCategories()
