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

    let firstRow = table.insertRow(0);
    firstRow.insertCell(0).innerHTML = "<b>Title</b>";
    firstRow.insertCell(1).innerHTML = "<b>Date</b>";
    firstRow.insertCell(2).innerHTML = "<b>Summary</b>";

    firstRow.insertCell(3).innerHTML = "<b>Edit</b>";
    firstRow.insertCell(4).innerHTML = "<b>Delete</b>";

    firstRow.style.backgroundColor = "#FAE6AF";
    firstRow.style.fontSize = "1.25em";
    
    for (let i = 0; i < blogPosts.length; i++) {
        let row = table.insertRow(i + 1);
        row.insertCell(0).innerHTML = blogPosts[i].title;
        row.insertCell(1).innerHTML = blogPosts[i].date;
        row.insertCell(2).innerHTML = blogPosts[i].summary;
        row.insertCell(3).innerHTML = "<icon onclick='editPost(" + i + ")'> Edit </icon>";
        row.insertCell(4).innerHTML = "<icon onclick='deletePost(" + i + ")'> Delete </icon>";
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

function deletePost(i) {
    blogPosts.splice(i, 1);
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


