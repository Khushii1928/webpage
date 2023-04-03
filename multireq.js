const home = () => {
    return "home page";
  }
  const about = () => {
    const html = `
    <!DOCTYPE html>
    <html>
      <head>
        <title>About Us</title>
        <style>
          body {
            background-color: #f2f2f2;
            font-family: Arial, sans-serif;
            line-height: 1.5;
          }
          h1 {
            font-size: 2rem;
            text-align: center;
            margin-top: 50px;
          }
          p {
            font-size: 1.2rem;
            margin: 20px;
            text-align: center;
            text-align: justify;
          }
          .image-container {
            display: flex;
            justify-content: center;
            margin: 50px 0;
          }
          img {
            max-width: 100%;
            max-height: 300px;
            object-fit: cover;
            border-radius: 10px;
            box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
          }
        </style>
      </head>
      <body>
        <h1>About Us</h1>
        <div class="image-container">
          <img src="https://railsware.com/blog/wp-content/uploads/2018/09/2400%D1%851260-rw-blog-node-js.png" alt="About Us Image">
        </div>
        <p>Welcome to our Node.js tutorial page! Here, we aim to provide you with all the resources you need to learn and master Node.js.

        Node.js is a powerful and versatile JavaScript runtime that allows developers to build server-side applications. It has gained widespread popularity due to its scalability, high performance, and the large community of developers who contribute to its ecosystem.
        
        Whether you are a beginner or an experienced developer, our Node.js tutorial page is designed to help you learn and explore Node.js in a structured and comprehensive way. We cover a wide range of topics, from basic concepts to advanced techniques, so you can build robust and scalable applications.
        
        Our tutorials are created by experienced developers who have real-world experience working with Node.js. They are written in a concise and easy-to-understand manner, making it easy for you to follow along and learn at your own pace.
        
        We also provide hands-on exercises and projects that allow you to practice what you have learned and apply it in real-world scenarios. This will help you gain practical experience and prepare you for building complex applications.
        
        Our Node.js tutorial page is constantly updated with new content, so you can stay up-to-date with the latest developments in the Node.js ecosystem. We also have a community forum where you can ask questions, share your experiences, and connect with other developers.
        
        So, whether you are a beginner or an experienced developer, we invite you to explore our Node.js tutorial page and learn how to build powerful and scalable server-side applications using Node.js.</p>
      </body>
    </html>
  `;
  return html;
};
  
  const contact = () => {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Contact Us</title>
          <style>
            body {
              background-color: #f2f2f2;
              font-family: Arial, sans-serif;
              line-height: 1.5;
            }
            form {
              max-width: 600px;
              margin: 0 auto;
              background-color: #fff;
              padding: 30px;
              border-radius: 10px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
            }
            h1 {
              font-size: 2rem;
              text-align: center;
              margin-bottom: 20px;
            }
            label {
              display: block;
              font-size: 1.1rem;
              margin-bottom: 5px;
            }
            input[type="text"],
            input[type="email"],
            textarea {
              width: 100%;
              padding: 10px;
              margin-bottom: 20px;
              border-radius: 5px;
              border: 1px solid #ccc;
            }
            textarea {
              height: 100px;
            }
            input[type="submit"] {
              background-color: #4CAF50;
              color: white;
              border: none;
              border-radius: 5px;
              padding: 10px;
              cursor: pointer;
            }
            input[type="submit"]:hover {
              background-color: #45a049;
            }
          </style>
        </head>
        <body>
          <h1>Contact Us</h1>
          <form action="/submit" method="POST">
            <label for="name">Name:</label>
            <input type="text" id="name" name="name" required>
            <label for="email">Email:</label>
            <input type="email" id="email" name="email" required>
            <label for="message">Message:</label>
            <textarea id="message" name="message" rows="5" required></textarea>
            <input type="submit" value="Submit">
          </form>
        </body>
      </html>
    `;
    return html;
  };
  
  const tutorial = () => {
    const html = `
      <!DOCTYPE html>
      <html>
        <head>
          <title>Node.js Tutorial</title>
          <style>
            body {
              background-color: #f2f2f2;
              font-family: Arial, sans-serif;
              line-height: 1.5;
            }
            h1 {
              font-size: 2rem;
              text-align: center;
              margin-top: 50px;
            }
            .section {
              max-width: 800px;
              margin: 0 auto;
              background-color: #fff;
              padding: 30px;
              border-radius: 10px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
              margin-bottom: 30px;
            }
            .section img {
              max-width: 100%;
              max-height: 300px;
              object-fit: cover;
              border-radius: 10px;
              box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
              margin-bottom: 30px;
            }
            p {
              font-size: 1.2rem;
              margin: 20px;
              text-align: justify;
            }
          </style>
        </head>
        <body>
          <h1>Node.js Tutorial</h1>
  
          <div class="section">
            <h2>What is Node.js?</h2>
            <img src="https://images.ctfassets.net/aq13lwl6616q/7cS8gBoWulxkWNWEm0FspJ/c7eb42dd82e27279307f8b9fc9b136fa/nodejs_cover_photo_smaller_size.png" alt="Node.js Image">
            <p>Node.js is a JavaScript runtime built on Chrome's V8 JavaScript engine. It allows developers to run JavaScript on the server-side, which opens up a whole new world of possibilities for building web applications.</p>
          </div>
  
          <div class="section">
            <h2>Why use Node.js?</h2>
            <img src="https://www.tekkiwebsolutions.com/wp-content/uploads/node-js.png" alt="Node.js Benefits Image">
            <p>There are many reasons to use Node.js for your next project, including:</p>
            <ul>
              <li>Scalability: Node.js is built to handle large-scale, high-traffic applications.</li>
              <li>Speed: Node.js is fast, thanks to its non-blocking I/O model and event-driven architecture.</li>
              <li>Community: Node.js has a large and active community of developers, which means there are many resources and tools available.</li>
            </ul>
          </div>
  
          <div class="section">
            <h2>How to Get Started with Node.js</h2>
            <img src="https://i.ytimg.com/vi/gG3pytAY2MY/maxresdefault.jpg" alt="Node.js Getting Started Image">
            <p>Getting started with Node.js is easy! Here are the basic steps:</p>
            <ol>
              <li>Install Node.js on your computer</li>
              <li>Open your command prompt or terminal and type "node" to start the Node.js REPL</li>
              <li>Write some JavaScript code!</li>
            </ol>
          </div>
  
        </body>
      </html>
    `;
    return html;
  };
  
  
  module.exports = {
    home,
    about,
    contact,
    tutorial
  };
  