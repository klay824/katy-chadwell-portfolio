import ron from "../assets/images/rons-grub-hub.png";
import emp from "../assets/images/employee-directory.png";
import budget from "../assets/images/budget-tracker.png";
import books from "../assets/images/google-books-search.png";
import movie from "../assets/images/ultimate-movie.png";


const works = [
    {
        "id": 1,
        "title": "Ron's Grub Hub",
        "description": "A restaurant locator built using HTML, CSS, JavaScript.",
        "repo": "https://github.com/klay824/rons-grub-hub",
        "deployed": "https://klay824.github.io/project-1/",
        "img": ron,
        "alt": "Ron's Grub Hub"
    },
    {
        "id": 2,
        "title": "Employee Directory",
        "description": "A React app that allows users to view, search, and filter their employees.",
        "repo": "https://github.com/klay824/employee-directory",
        "deployed": "https://klay824.github.io/employee-directory/",
        "img": emp,
        "alt": "Employee Directory"
    },
    {
        "id": 3,
        "title": "Budget Tracker",
        "description": "A progressive web app to enter deposits and expenses. Built using MongoDB, Mongoose.",
        "repo": "https://github.com/klay824/budget-tracker",
        "deployed": "https://enigmatic-citadel-00070.herokuapp.com/",
        "img": budget,
        "alt": "Budget Tracker"
    },
    {
        "id": 4,
        "title": "Google Books Search",
        "description": "A MERN stack app to search for and save books. Built with MongoDB, Express, React, and Node.",
        "repo": "https://github.com/klay824/fitness-tracker",
        "deployed": "https://aqueous-forest-70014.herokuapp.com/",
        "img": books,
        "alt": "Fitness Tracker"
    },
    {
        "id": 5,
        "title": "The Ultimate Movie List",
        "description": "A personal movie database. Built with Node, Express, MySQL.",
        "repo": "https://github.com/klay824/the-ultimate-movie-list",
        "deployed": "https://glacial-hollows-98883.herokuapp.com/",
        "img": movie,
        "alt": "Ultimate Movie List"
    }
]

export default works;