function home(request, response) {
  response.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1">
      <link rel='stylesheet' src='styles.css'>
      <title>Document</title>
      
    </head>
    <body>
      <h1>Hello</h1>
    </body>
    </html>`
)};

module.exports = { home };