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
        <button class="btn btn-sm hover:[text-white] hover:bg-[#FF1F3D]">${cat.category}</button>
        `;
        // append the element ?
        categoriesContainer.append(categoryDiv);
    }
}




loadCategories()
loadVideo()