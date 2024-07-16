const projects = [
    {
      name:"AppointmentManager",
      language: "Java, MySQL",
      desc: "As yet another University project, this was another JavaFX-based application that remotely managed and maintained appointments across three separate regional langauges and interacted with a MySQL database back-end.",
      github: "/appointment-manager"
    },
    {
      name:"Capstone",
      language: "Python",
      desc: "Utilizing machine learning, the objective of my capstone was to provide some sort of data analysis that leads to predictions. In my case, I used the AAPL stock ticker and trained my algorithm on historical stock values over time to predict future values.",
      github: "/capstone"
    },
    {
      name:"Facial-Recognition",
      language: "C++",
      desc: "Learning cmake and OpenCV with C++, this project was a deeper dive into what C++ can do overall using publicly-available resources and implementing a third-party library to build a brief application that can detect faces during runtime.",
      github: "/facial-recognition"
    },
    {
      name:"InventoryManager",
      language: "Java",
      desc: "Coming from a school project, this was a JavaFX-based application that locally managed and maintained an inventory based on user input.",
      github: "/inventory-manager"
    },
    {
      name: "Piro",
      language: "ASM, C++",
      desc: "An open sourced Raspberry Pi Kernel and Operating System",
      github: "/Piro"
    },
    {
      name:"TicTacToe",
      language: "C++",
      desc: "This project serves as a first of several C++ projects in an effort to learn about C++ compilers and object-oriented programming with the language. Tic Tac Toe is a game to find 3 in a row in a 3x3 grid, and I decided to rebuild an object-oriented rendition of the game making the board, game pieces, and gameplay each their own programming objects.",
      github: "/tictactoe"
    },
    {
      name:"TravelingSalesman",
      language: "Python",
      desc: "Based on the original traveling salesman problem, this was a University project focused on traveling around a set area delivering packages to various organizations in a timely manner.",
      github: "/travelingsalesman"
    },
  ]
  github_url = "https://github.com/riigess"

  projects.forEach(function(proj) {
    const projCont = document.getElementById("projects-container");
  
    const newRow = document.createElement("div");
    newRow.classList.add("row");
    
    const newColA = document.createElement("div");
    newColA.classList.add("col-md-4");
    newColA.classList.add("col-12");
    
    const newImg = document.createElement("img");
    newImg.src = "https://cdn.emk.dev/templates/featured-image.png";
    newImg.style.width = "100%";
    
    const newColB = document.createElement("div");
    newColB.classList.add("col-md-8");
    newColB.classList.add("col-12");

    const newAnch = document.createElement("a");
    newAnch.href = "https://github.com/riigess" + proj.github;
    newAnch.classList.add("btn");
    newAnch.classList.add("btn-primary");
    newAnch.id = "btn-git";
    newAnch.innerText = "View on GitHub";

    const newLangLine = document.createElement("h3");
    newLangLine.classList.add("heading");
    newLangLine.classList.add("post-category");
    newLangLine.id = "prog-lang";
    newLangLine.innerText = proj.language;

    const projNameLine = document.createElement("h1");
    projNameLine.classList.add("post-title");
    projNameLine.innerText = proj.name;

    const projDescLine = document.createElement("p");
    projDescLine.classList.add("post-excerpt");
    projDescLine.innerText = proj.desc;

    console.log(proj.name + " | " + proj.desc);
    
    newColA.appendChild(newImg);
    newRow.appendChild(newColA);
    newColB.appendChild(newLangLine);
    newColB.appendChild(projNameLine);
    newColB.appendChild(projDescLine);
    newColB.appendChild(newAnch);
    newRow.appendChild(newColB);

    const bre = document.createElement("br");
    projCont.appendChild(bre);
    projCont.appendChild(newRow);
  });