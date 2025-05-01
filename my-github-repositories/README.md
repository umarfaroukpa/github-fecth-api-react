# GitHub Repository Portfolio

A modern React application for displaying and managing GitHub repositories. This application allows users to browse their GitHub repositories, view detailed information about specific repositories, and manage them with create, update, and delete functionality.

![GitHub Repository Portfolio App](https://api.placeholder.com/1200/630)

## Features

- **Browse Repositories**: View your GitHub repositories with clean, detailed cards
- **Search Functionality**: Filter repositories by name to quickly find what you're looking for
- **Pagination**: Navigate through your complete list of repositories
- **Detailed View**: Explore comprehensive information about each repository
- **Repository Management**: Create new repositories and update or delete existing ones
- **Modern UI**: Enjoy a responsive, dark-themed interface optimized for all screen sizes

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or later)
- npm (v6.0.0 or later) or yarn (v1.22.0 or later)
- A GitHub account

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/umarfaroukpa/github-fecth-api-react
   cd github-repo-portfolio
   ```

2. Install dependencies
   ```bash
   npm install
   # or
   yarn install
   ```

3. Create a `.env` file in the root directory with your GitHub Personal Access Token (Optional, for increased API rate limits)
   ```
   REACT_APP_GITHUB_TOKEN=your_personal_access_token
   ```

4. Start the development server
   ```bash
   npm start
   # or
   yarn start
   ```

5. Open your browser and navigate to `http://localhost:3000`

## Usage

### Viewing Repositories

The home page displays a list of your GitHub repositories. Each repository card shows:
- Repository name
- Description
- Primary language
- Star count

### Searching Repositories

Use the search bar at the top of the repository list to filter repositories by name.

### Pagination

Navigate through your repositories using the pagination controls at the bottom of the list.

### Repository Details

Click on any repository card to view detailed information, including:
- Full description
- Repository owner
- Primary language
- Stars, forks, issues, and watchers counts
- Links to GitHub and homepage (if available)
- Creation and last update dates

### Managing Repositories

- **Create**: Click the "New Repo" button to open the creation modal
- **Edit**: Click the edit icon on any repository card to modify its details
- **Delete**: Click the delete icon to remove a repository

## Project Structure

```
src/
├── App.js              # Main application component
├── components/         # UI components
│   ├── Header.js       # Application header component
│   ├── Footer.js       # Application footer component
│   ├── HomePage.js     # Home page component
│   ├── ReposList.js    # Repository list component
│   ├── RepoModal.js    # Create/Update modal component
│   └── RepoPage.js     # Single repository page component
├── services/           # API and utility services
│   └── github.js       # GitHub API service
├── styles/             # CSS and styling files
├── index.js            # Entry point
└── ...
```

## Customization

### Username Configuration

By default, the application fetches repositories for the username "umarfaroukpa". To change this:

1. Open `src/components/ReposList.js`
2. Locate the `fetchData` function
3. Update the URL with your GitHub username:
   ```javascript
   const response = await fetch(
     `https://api.github.com/users/YOUR_USERNAME/repos?page=${page}&per_page=${perPage}`
   );
   ```

### Theme Customization

This application uses Tailwind CSS for styling. To customize the theme:

1. If not already installed, add Tailwind CSS to your project:
   ```bash
   npm install tailwindcss
   npx tailwindcss init
   ```

2. Configure the `tailwind.config.js` file to match your desired theme

## API Integration

### Authentication

For increased API rate limits and to access private repositories, create a Personal Access Token:

1. Go to GitHub Settings > Developer settings > Personal access tokens
2. Generate a new token with appropriate scopes (repo, user)
3. Add this token to your `.env` file as described in the Installation section

### Implementing API Calls

The application includes UI for creating, updating, and deleting repositories, but the actual API implementations need to be completed:

1. For repository creation (`handleCreateOrUpdate` in ReposList.js):
   ```javascript
   const handleCreateOrUpdate = async (formData) => {
     try {
       // For creating a new repository
       const response = await fetch('https://api.github.com/user/repos', {
         method: 'POST',
         headers: {
           'Authorization': `token ${process.env.REACT_APP_GITHUB_TOKEN}`,
           'Content-Type': 'application/json'
         },
         body: JSON.stringify({
           name: formData.name,
           description: formData.description,
           private: false // or true for private repos
         })
       });
       
       if (!response.ok) throw new Error('Failed to create repository');
       
       // Refresh repository list
       fetchData();
       setIsModalOpen(false);
     } catch (error) {
       console.error('Error creating repository:', error);
     }
   };
   ```

2. For repository updates, use the PATCH method to the repository endpoint
3. For repository deletion, use the DELETE method to the repository endpoint

## Technologies Used

- **React**: Front-end library for building user interfaces
- **Tailwind CSS**: Utility-first CSS framework for styling
- **GitHub API**: For fetching and managing repository data
- **React Icons**: Icon library for UI elements

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- [GitHub API Documentation](https://docs.github.com/en/rest)
- [React Documentation](https://reactjs.org/docs/getting-started.html)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)

---

Created by Umar Farouk Ilyas - [GitHub Profile](https://github.com/umarfaroukpa)