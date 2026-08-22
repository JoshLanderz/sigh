
const mostRecentProjectBtn = document.getElementById("most-recent-project-btn");

const featuredProjectsContainer = document.querySelector(".featured-projects-element-container");

mostRecentProjectBtn.addEventListener("click", function() {
    // Step 1: Start fading out
    featuredProjectsContainer.classList.add("fade-out");
    
    // Step 2: Wait 300ms (matches CSS transition time) for fade out to finish
    setTimeout(() => {
        // Step 3: Change layout and start fading back in
        featuredProjectsContainer.classList.add("reversed");
        featuredProjectsContainer.classList.remove("fade-out");
    }, 300);
});


document.getElementById("copyright-year").textContent = new Date().getFullYear();


	// const obj = document.querySelectorAll('.p1');
    
    // for(i=0; i < obj.length; i++) {
    // 	obj[i].style.fontSize = "2rem";
    //     obj[i].style.color = "blue";
    //     obj[i].style.fontWeight = "bold";
    // }
    
    // const listUL = document.querySelector('ul');
    // const li = document.createElement('li');
	
    // listUL.appendChild(li .p1);    
    
    // li.textContent = "Arsenal";