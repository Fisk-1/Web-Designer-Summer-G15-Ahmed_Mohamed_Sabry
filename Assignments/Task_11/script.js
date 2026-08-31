var users = [
    {
        name: "Ahmed",
        id: 1,
        balance: 5000
    },
    {
        name: "Ali",
        id: 2,
        balance: 3000
    }
];


// Add User

function addUser(user) {

    var index = users.findIndex((item) => item.id === user.id);

    if (index === -1) {
        users.push(user);
        console.log("User added successfully");
    } else {
        console.log("User already exists");
    }

}


// Edit User Balance By Id

function editUserBalanceById(id, newBalance) {

    var index = users.findIndex((item) => item.id === id);

    if (index !== -1) {
        users[index].balance = newBalance;
        console.log("Balance updated successfully");
    } else {
        console.log("User not found");
    }

}


// Transfer Balance

function transferBalance(fromID, toID, balance) {

    var fromIndex = users.findIndex((item) => item.id === fromID);

    var toIndex = users.findIndex((item) => item.id === toID);


    if (fromIndex === -1 || toIndex === -1) {

        console.log("User not found");

    } else if (users[fromIndex].balance < balance) {

        console.log("Not enough balance");

    } else {

        users[fromIndex].balance -= balance;

        users[toIndex].balance += balance;

        console.log("Transfer completed successfully");

    }

}


// Delete User By Id

function deleteUserById(id) {

    var index = users.findIndex((item) => item.id === id);

    if (index !== -1) {

        users.splice(index, 1);

        console.log("User deleted successfully");

    } else {

        console.log("User not found");

    }

}


// Tests

addUser({
    name: "Omar",
    id: 3,
    balance: 2000
});

editUserBalanceById(1, 6000);

transferBalance(1, 2, 1000);

deleteUserById(3);

console.log(users);