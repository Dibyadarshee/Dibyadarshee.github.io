//selecting all required elements for gallery
const filterItem = document.querySelector(".items");
const filterImg = document.querySelector(".image");
const hideIds = ["navbarDropdown","linkid"];
window.onload = () => {      //once window loaded
  
  filterItem.onclick = (selectedItem) => { //when user clicked on filterItem div
    if(selectedItem.target.classList.contains("item")){
      filterItem.querySelector(".active").classList.remove(".active");   
      selectedItem.target.classList.add("active"); // add that active class on the user selected element or item
      let filterName = selectedItem.target.getAttribute("data-name"); //getting the data name value of the user selected item and storing in filtername variable 
      
      console.log(filterName);
    }
  }
  conditionalHide();
}
conditionalHide = () => 
{
  hideIds.forEach( (id) => document.getElementById(id).hidden = true );
}
