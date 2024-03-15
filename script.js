const displayData = (userName = "", email = "", password = "", eventDescription = "") => {
	// Create a new row in table
	const newRow = document.createElement("tr");

	// Create and append table cells with input values
	const usernameCell = document.createElement("td");
	usernameCell.textContent = userName;
	newRow.appendChild(usernameCell);

	const emailCell = document.createElement("td");
	emailCell.textContent = email;
	newRow.appendChild(emailCell);

	const passwordCell = document.createElement("td");
	passwordCell.textContent = password;
	newRow.appendChild(passwordCell);

	const eventNameCell = document.createElement("td");
	eventNameCell.textContent = eventDescription;
	newRow.appendChild(eventNameCell);

	// Append new row totable
	document.getElementById("table_data").appendChild(newRow);
};
const userData = JSON.parse(localStorage.getItem("userData")) || [];
for (let i = 0; i < userData.length; i++) {
	const { userName, email, password, eventDescription } = userData[i];
	displayData(userName, email, password, eventDescription);
}

function register(event) {
	event.preventDefault();

	// Retrieve input values
	const userName = document.getElementById("username").value;
	const email = document.getElementById("email").value;
	const password = document.getElementById("password").value;
	const eventDescription = document.getElementById("eventDescription").value;

	const registeredUser = {
		userName,
		email,
		password,
		eventDescription,
	};
	userData.push(registeredUser);
	//saving data to local storage
	localStorage.setItem("userData", JSON.stringify(userData));
	displayData(userName, email, password, eventDescription);
}

const allclear = () => {
	localStorage.clear();
	location.reload();
};
