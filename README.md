# Auctm | Website for Auctm

Auctm website based on [Gatsby](https://www.gatsbyjs.org/), uses [Prismic](https://www.prismic.io/) as headless CMS.

### 👩‍💻 [Website](https://www.auctm.com)

## 🚀 Getting Started

1. **Create a Gatsby site.**
Download or clone the repo. Navigate into the downloaded/cloned repo directory. Install all the dependencies.
    ```sh
    cd auctm-website
    npm install
    ```

2. **Run Server**
Navigate into your new site's directory, install node modules, and start it up.
     ```sh
    cd auctm-website
    npm install
    gatsby develop
    ```
    Your site is now running at `http://localhost:8000`!

    _Note: You'll also see a second link: _`http://localhost:8000/___graphql`_. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://www.gatsbyjs.org/tutorial/part-five/#introducing-graphiql)._

#### `NOTE`
**Make sure to create two files in the root directory of the project**
`.env.development`
`.env.production`
**Ask your fellow developer for the content of the files.**

### Prerequisites(if you don't have node)
Download and install Node.js from nodejs.org/en/download/
After installation use 
`node -v` to check the node version installed
`npm -v` to check the npm version installed
**Note: If you don't get version then you probably messed up the installation. Please reinstall node.**

### ClickUp prepare-commit msg hook
Pre-script :- If you had already installed globally then you just need to run "git init" for this repo.

Else - 
1. We use ClickUp for task tracking and ClickUp provides integration with GitHub.
2. Why should we use it? (CU == ClickUp)
    - It gives us the ability to see which commit was made for which CU task and hence backtracking for future purposes.
    - Anyone will be able to see what all commits were made in which CU task in CU.
    - Example commit it creates - https://github.com/squadrun/squadrun/commit/d65d1a212febe2e49e7420eb24756b01dbb65e62
    - How it is visible in CU - https://app.clickup.com/t/2hn81j
3. Now, how to enable this? Go through - https://github.com/tarungarg546/clickup-git-hook
4. It is recommended to setup globally if you'll be working across multiple repos.
5. Start committing/pushing code like a ninja! :D ;)

## Available Scripts

In the project directory, you can run:

#### `gatsby develop`

Runs the app in the development mode.
Open [http://localhost:8000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

#### `gatsby build`

Builds the app for production to the `public` folder.
It creates statuc HTML pages for production which can then be served either from a server or static hosting.
Also does automatic chunking of code.

#### `gatsby clean`

Cleans cache, you might get stuck when you don't see your changes being updated. This script might come handy then.
