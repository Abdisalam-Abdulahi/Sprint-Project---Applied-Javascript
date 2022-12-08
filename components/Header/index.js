// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">February, 28, 2021</span>
//    <h1>Gabi Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .headerContainer component

// Use this object for the component you created.

const newDate = new Date();
const headerContent = [
    {
        date: newDate.toDateString(),
        title: "Gabi Times",
        temp: "98°"
    }
];

function headerMaker(dataObj){
    const header = document.createElement("div")
    header.classList.add("header")
    const date = document.createElement("span")
    date.classList.add("date")
    date.textContent = dataObj[0].date
    const h1 = document.createElement("h1")
    h1.textContent = dataObj[0].title
    const temp = document.createElement("span")
    temp.classList.add("temp")
    temp.textContent = dataObj[0].temp
    header.appendChild(date)
    header.appendChild(h1)
    header.appendChild(temp)
    return header
}
 const headerResult = headerMaker(headerContent)
 const headerContainer = document.querySelector(".header-container")
 headerContainer.appendChild(headerResult)
