<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Assignment</title>
    <script>
        // Deydanh Hackett 3-30-2025

        // 1. Create a prompt that asks the user for their name.
        var username = prompt("What is your name?");

        // 2. Add a confirm statement asking the user permission to use their name on the webpage.
        var proceed = confirm("Can I use your name on this webpage?");

        // 3. Write a traditional if - else statement that checks the proceed variable.
        if (proceed) {
            // 4. If the user gives permission, log the message and the username.
            console.log("Yes, I can use your name on this page: " + username);
        } else {
            // 5. If the user denies permission, log the privacy message.
            console.log("No, you can not use my name on this web page. Privacy Please.");
        }

        // 6. Prompt the user for their age and store the result in a variable.
        var age = prompt("How old are you?");

        // 7. Create an alert box that greets the user and shows their age.
        alert("Hi " + username + "! You are " + age + " years old.");
    </script>
</head>
<body>
    <h1>Week 3 Project</h1>
    <p>This page demonstrates a simple interaction with JavaScript.</p>
</body>
</html>
