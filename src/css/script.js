document.addEventListener("DOMContentLoaded", () => {
    

    const users = [
        { id: 1, name: "Alice Johnson", email: "alice@example.com", role: "Admin" },
        { id: 2, name: "Bob Smith", email: "bob@example.com", role: "User" },
        { id: 3, name: "Charlie Brown", email: "charlie@example.com", role: "User" }
    ];

    const userTableBody = document.getElementById("userTableBody");
    users.forEach(user => {
        const row = `<tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
        </tr>`;
        userTableBody.innerHTML += row;
    });
});