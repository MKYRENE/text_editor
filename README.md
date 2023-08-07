# Progressive Web Applications (PWA) Challenge: Text Editor
"An impressive single-page, offline-enabled text editor with data persistence and redundancy, utilizing IndexedDB and deployed on Heroku."

Welcome to the Progressive Web Applications (PWA) Challenge: Text Editor project! This undertaking demonstrates your adeptness in the skills and concepts acquired throughout the course. The project showcases an exceptional implementation of a browser-based text editor, encompassing key features and functionality.

## Project Overview

In this challenge, your goal is to create a fully functional text editor that operates within the browser. The text editor will adhere to the Progressive Web App (PWA) criteria, ensuring optimal user experience, and it will incorporate robust data persistence techniques to provide redundancy even when browser support varies. Notably, the text editor will function seamlessly offline.

To achieve this, the project entails the following core tasks:

1. **Single-Page Application:** Develop a single-page application architecture for the text editor.
2. **PWA Compatibility:** Meet the criteria for a Progressive Web App, delivering a responsive and engaging user interface.
3. **Data Persistence:** Implement data persistence techniques using the IndexedDB database. Redundancy mechanisms will safeguard data integrity across different browser scenarios.
4. **Offline Functionality:** Enable the text editor to operate seamlessly offline, ensuring users can continue their work without an internet connection.
5. **Webpack Integration:** Bundle JavaScript files using Webpack to optimize performance and maintain functionality.
6. **Service Worker and Manifest:** Generate a service worker and manifest file to support PWA features such as offline access and installation.
7. **Next-Gen JavaScript:** Utilize modern JavaScript features while ensuring compatibility and smooth functionality.

## Getting Started

To embark on this project:

1. Clone the starter code repository to your local machine.
2. Set up your own repository using the starter code as a foundation (Do not fork the starter code repository!).
3. Review the provided user story and acceptance criteria to guide your development process.

## User Story

As a developer, you will:

- Create, edit, and save notes or code snippets using the text editor, with or without an internet connection. This functionality will enable reliable retrieval for future use.

## Acceptance Criteria

The project's success will be evaluated based on the following criteria:

- Upon opening the application in your preferred editor, a client-server folder structure should be visible.
- Running `npm run start` from the root directory should initiate the backend and serve the client successfully.
- Executing the text editor application from the terminal should demonstrate the bundling of JavaScript files using Webpack.
- After running Webpack plugins, an HTML file, service worker, and manifest file should be generated.
- The utilization of next-gen JavaScript should not compromise the text editor's browser functionality.
- Opening the text editor should immediately trigger the creation of a database storage in IndexedDB.
- Entering content and clicking off the DOM window should result in the preservation of content within the text editor through IndexedDB.
- Reopening the text editor after closure should retrieve the previously saved content from IndexedDB.
- Clicking the Install button should facilitate the downloading of the web application as an icon on the desktop.
- Loading the web application should register a service worker using Workbox.
- The registered service worker should pre-cache static assets upon loading, including subsequent pages and static resources.
- Deployment to Heroku should include proper build scripts tailored for a webpack application.

## Let's Get Started!

Embark on this exciting journey of building a feature-rich browser-based text editor with offline capabilities and data persistence. Your impressive creation will undoubtedly stand as a testament to your acquired skills and innovation. Happy coding!

## License

This project is licensed under the [MIT License](LICENSE).

For more information, please refer to the [Heroku Deployment Guide](#).
