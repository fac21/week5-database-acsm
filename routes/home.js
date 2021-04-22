const db = require("../database/connection.js");

function home(request, response) {
  db.query("SELECT * FROM fac_members").then((result) => {
    const users = result.rows;

    const userList = users.map((user) => `<option value='${user.full_name}'>${user.full_name}</option>`).join("");
    
    response.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel='stylesheet' href='styles.css'>
      <link rel="preconnect" href="https://fonts.gstatic.com">
      <link href="https://fonts.googleapis.com/css2?family=Reem+Kufi&display=swap" rel="stylesheet">
      <title>With Compliments</title>
    </head>
    <body>


      <h1>With Compliments</h1>
      <img src='hands.svg'>
      <form action="/" method="POST">

      <label for="facMembers">Choose someone to compliment</label>
        <select name="facMembers" id="facMembers">

          ${userList}
        </select>
        <input class='button' type="submit">
      </form>
     
      <section>
      <form action="/createUser" method="POST">
          <label>Name</label>
          <input id="fullname" name="fullname">
          <label>Cohort name</label>
          <input id="cohort_name" name="cohort_name">
          <label>Image url</label>
          <input id="img_url" name="img_url">
          <label>FAC role</label>
          <input id="fac_role" name="fac_role"><br>
          <input class='button' type="submit">
      </form>
  </section>


    </body>
    </html>`);
  });
}

function post(request, response) {
  const name = request.body.facMembers;
  response.redirect(`facmembers/${name}`);
}


module.exports = { home, post };




  

