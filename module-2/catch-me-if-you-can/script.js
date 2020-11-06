// 1a) Write a function that returns the sum of two numbers. Throw an error if either argument is not of the data type number:

function sum(x, y){
  //check data types first and throw error
  try {
      if (isNaN(x) || isNaN(y))
        throw Error ("this function can only accept numbers")
  } catch (error) {
      console.log(error)
  }
  return x + y;
}

console.log(sum(1,2));
sum("1","2fred");
// 1b) Call the sum function inside a try block using "1" and "2" as arguments. Use console.log within a catch block to inform the user of the error.

// 2a) Given a user object, write a function called login that takes a username and password as parameters. Throw an error if either of them don't match. Otherwise, log to the console a message saying "login successful!"

var user = {username: "sam", password: "123abc"};
function login(username, password){
    try {
        if (user.username !== username || user.password !== password)
            throw Error ("Sorry, either your username or password does not match")
    } catch (error) {
        return error
    }
    return "login successful"
}

console.log(login("george",  "123abc"))
console.log(login("sam",  "123abc"))
console.log(login("abc123",  "pass"))
console.log(login("sam",  "1123abc"))
// 2b) Call the login function within a try block. In one instance use the correct credentials, and in another use incorrect ones. Make sure you see the appropriate message!