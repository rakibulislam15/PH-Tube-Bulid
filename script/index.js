

function removeActiveClass(){
  const activeButtons = document.getElementsByClassName("active")
  for(let btn of activeButtons){
    btn.classList.remove("active")
  }
}

function loadCategories() {
  // fetch 
  fetch("https://openapi.programming-hero.com/api/phero-tube/categories")

    .then((res) => res.json())
    .then((data) => displayCategories(data.categories))


}

function loadVideo() {
  fetch("https://openapi.programming-hero.com/api/phero-tube/videos")
    .then((Response) => Response.json())
    .then((data) => displayVideos(data.videos))
}

// call id in defferent button like music, comedy etc 
const categoryVideo = (id) => {

  const url = `https://openapi.programming-hero.com/api/phero-tube/category/${id}`
  console.log(url);

  fetch(url)
    .then((res) => res.json())
    .then((data) => {

      removeActiveClass();
      const clickButton = document.getElementById(`btn-${id}`)
      clickButton.classList.add("active")
      console.log(clickButton);
      displayVideos(data.category)
    })

}



const displayVideos = (videos) => {
  const videoContainer = document.getElementById("video-container");

  videoContainer.innerHTML = "";
  if (videos.length ===0) {
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
                        <img class="w-5 h-5" src="https://img.icons8.com/?size=48&id=98A4yZTt9abw&format=png" alt="">
                    </p>
                    <p class="text-sm text-gray-400">${video.others.views}views</p>
                </div>
            </div>
        </div>
        
        `
    videoContainer.append(videoCard);

  })
}



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




loadCategories()
