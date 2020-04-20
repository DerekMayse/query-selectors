// //doer not a maker function
// function applyGoatmode(){
//     //select body element
    
// const bodyElement = document.querySelector("body")
// console.log(bodyElement)
// //apply a class of ".goat-mode" to the body element
// bodyElement.classList.add("goat-mode")

// const listItems = document.querySelectorAll(".listItems")
// bodyElement.classList.add ("orage-background")

// for(let i = 0;){}
// }

// applyGoatmode();

// Use JavaScript to obtain a reference to the first section with the class of article_header and change its text with the textContent property to "Welcome to the {insert your name here} blog"
// Use JavaScript to obtain a reference to all article__header elements and change their classList property value to article__header important.
// Obtain a reference the element with a class of dashed and remove it.
// Obtain a reference the element with a class of article_footer and add the class of goldenrod it.

// function changeText(){
//     const articleText = document.querySelector(".article__header")
//      articleText.textContent = "Welcome to the {insert your name here} blog"
// }

// changeText()

    // const articleAll = document.querySelectorAll(".article__header")
    // for (let i = 0; i < articleAll.length; i++ ){
    //     articleAll[i].classList.add("important")
    // }



    // document.querySelector(".dashed").classList.remove("dashed")

    // document.querySelector(".article__footer").classList.add("goldenrod")




    //           Building Dom Components

    // Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.

    const students = [
        {
            name: "Chris Miller",
            subject: "History",
            info: "Failed last exam",
            score: 59
        },
        {
            name: "Courtney Seward",
            subject: "History",
            info: "Has completed all homework",
            score: 91
        },
        {
            name: "Garrett Ward",
            subject: "History",
            info: "Wonderful at helping other students",
            score: 88
        },
        {
            name: "John Dulaney",
            subject: "History",
            info: "Has never missed a class or exam",
            score: 92
        },
        {
            name: "Greg Lawrence",
            subject: "History",
            info: "Sub-par performance all around",
            score: 64
        },
        {
            name: "Leah Duvic",
            subject: "History",
            info: "Wonderful student",
            score: 97
        },
        {
            name: "Jesse Page",
            subject: "History",
            info: "Smokes too much. Distracting.",
            score: 76
        },
        {
            name: "Kevin Haggerty",
            subject: "History",
            info: "Falls asleep in class",
            score: 79
        },
        {
            name: "Max Wolf",
            subject: "History",
            info: "Talks too much",
            score: 83
        },
        {
            name: "Lissa Goforth",
            subject: "History",
            info: "Asks pointless, unrelated questions",
            score: 78
        },
        {
            name: "Tyler Bowman",
            subject: "History",
            info: "When was the last time he attended class?",
            score: 48
        },
        {
            name: "Ray Medrano",
            subject: "History",
            info: "Needs to contribute to in-class discussions",
            score: 95
        }
    ]

// Maker function
// function printStudentToDOM(studentName, subject, info, score) {
//     return `
//           <article>
//               <h3>${studentName}</h3>
//               <p>${subject}</p>
//               <p>${info}</p>
//               <p>${score}</p>
//               <p>Languages: HTML, CSS, JavaScript</p>
//           </article>`;
//   }
  
//   const printStudentToDOM = (name, subject, info) => {
//       // body of function
//   }
  
  
//   for (let i = 0; i < students.length; i++) {
//     let htmlString = printStudentToDOM(
//       students[i].name,
//       students[i].subject,
//       students[i].info,
//       students[i].score
//     );
//     console.log(htmlString);
//     document.querySelector(".student-container").innerHTML += htmlString;
//   }



//     function createStudentComponent(name, subject, info, headingClassName  ){
//         return `
//         <div class="student">
//             <h1 class="xx-large passing">${headingClassName} ${name}</h1>
//             <section class="bordered dashed section--padded">${subject}</section>
//             <aside class="pushRight">${info}</aside>
//         </div>
//         `
//     }

//     // Iterate the array of students, and apply the correct style to the h1 depending on the score of the student being below 60, or above it.
// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = 

//      else {
//         studentComponent = 
        

    
// } 


// If a student is passing, then the structure should look like the following.

// {<div class="student">
//     <h1 class="xx-large passing">Student Name</h1>
//     <section class="bordered dashed section--padded">Subject</section>
//     <aside class="pushRight">Additional information</aside>
// </div>}  

// Ten of the students are currently passing the course, and two students are not. You want passing, and non-passing, student information to be styled differently. You want passing students' names to be green, and non-passing students to be orange.

// How might you refactor the function body again to use the score property of each student object to change the output of the function?

// const createStudentComponent = (name, subject, info, headingClassName) => {
//     return  `
//     <div class="student">
//         <h1 class="xx-large ${headingClassName}">${name}</h1>
//         <section class="bordered dashed section--padded">${subject}</section>
//         <aside class="pushRight">${info}</aside>
//     </div>`
// }

// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "passing")
//     } else {
//         studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "failing")
//     }
//     console.log(studentComponent)
//     document.querySelector("#container").innerHTML += studentComponent;
// }


// Instead of defining four arguments for the createStudentComponent function, and then passing the individual properties when it is invoked, refactor the function to accept the entire object as a single argument.

// Then refactor your string interpolation code to use the object properties.



// const createStudentComponent = (object) => {
//     return  `
//     <div class="student">
//         <h1 class="xx-large ${headingClassName}">${object.name}</h1>
//         <section class="bordered dashed section--padded">${object.subject}</section>
//         <aside class="pushRight">${object.info}</aside>
//     </div>`
// }

// for (let i = 0; i < students.length; i++) {
//     let studentComponent = ""
//     if (students[i].score >= 60) {
//         studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "passing")
//     } else {
//         studentComponent = createStudentComponent(students[i].name, students[i].subject, students[i].info, "failing")
//     }
//     console.log(studentComponent)
//     document.querySelector("#container").innerHTML += studentComponent;
// }

// Barry's Code - goes into the HTML file 

const createStudentComponent = (object) => {
    return `
        <div class="student">
        <h1 class="xx-large">${students.name}</h1>
            <section class= "bordered dashed section--padded">${students.subject}</section>
            <aside class= "pushRight">${students.info}</aside>
        </div>
    `
}
for (let i = 0; i < students.length; i++) {
    document.querySelector("#container").innerHTML += createStudentComponent(students[i])
    let studentComponent = document.querySelectorAll(".xx-large")
    if (students[i].score >= 60) {
        studentComponent[i].classList.add("passing")
    } else {
        studentComponent[i].classList.add("failing")
    }  
}

// Write functions that build the sub-components of the larger student component.

// h1
// section
// aside
// Invoke those functions inside the createStudentComponent function to build the parent <div>.

const createStudentComponent = (student) => `
    <div id="student">
        ${h1(student.name)}
        ${section(student.subject)}
        ${aside(student.info)}
    </div>
`