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

const displayVideos = (videos) => {
    const videoContainer = document.getElementById("video-container");

    videos.forEach((video) => {
        const videoCard = document.createElement("div")
        videoCard.innerHTML = `
       
        <div class="card bg-base-100  shadow-sm">
  <figure>
    <img
      src="${video.thumbnail}" />
  </figure>
  <div class="card-body">
    <h2 class="card-title">${video.title}</h2>
    <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
    <div class="card-actions justify-end">
      <button class="btn btn-primary">Buy Now</button>
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
        <button class="btn btn-sm hover:[text-white] hover:bg-[#FF1F3D]">${cat.category}</button>
        `;
        // append the element ?
        categoriesContainer.append(categoryDiv);
    }
}




loadCategories()
loadVideo()