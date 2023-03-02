// blog.js

const addButton = document.getElementById("post-dialog");
const titleInput = document.getElementById("title");
const dateInput = document.getElementById("date");
const summaryInput = document.getElementById("summary");

const blogPosts = [
	{
		title: "Winter in San Diego",
		date: "2023-2-20",
		summary: "New winter storm hits San Diego..."
	},
	{
		title: "Wind Advisory",
		date: "2023-03-01",
		summary: "The areas under Wind Advisory in San Diego County are... "
	}
];

function showPosts() {   
    
    const table = document.getElementById("blog-table");
    table.innerHTML = "";

    for (let i = 0; i < blogPosts.length; i++) {
        let row = table.insertRow(i);
        row.insertCell(0).innerHTML = blogPosts[i].title;
        row.insertCell(1).innerHTML = blogPosts[i].date;
        row.insertCell(2).innerHTML = blogPosts[i].summary;
        row.insertCell(3).innerHTML = "<button onclick='editPost(" + i + ")'>Edit</button>";
        row.insertCell(4).innerHTML = "<button onclick='deletePost(" + i + ")'>Delete</button>";
    }

    closeDialog();

}

function add() {
    addButton.showModal();
}

function save() {

    if( titleInput.value == "" || dateInput.value == "" || summaryInput.value == ""){
        closeDialog();
    } else {
        const newPost = {
            title: titleInput.value,
            date: dateInput.value,
            summary: summaryInput.value
        };

        blogPosts.push(newPost);

        showPosts();

        titleInput.value = "";
        dateInput.value = "";
        summaryInput.value = "";
    }
}

showPosts();

function deletePost(index) {
    blogPosts.splice(index, 1);
    showPosts();
}
function editPost(i) {
    let post = blogPosts[i];
    titleInput.value = post.title;
    dateInput.value = post.date;
    summaryInput.value = post.summary;

    addButton.showModal();

    post.title = titleInput;
    post.date = dateInput;
    post.summary = summaryInput;

    blogPosts.splice(i, 1);
}

function closeDialog() {
    const dialog = document.querySelector('dialog[open]');
    dialog.close();
}

