/**
 * This script fetches all public repositories for the user "vrajpatell"
 * from the GitHub API and writes the results to "public/data/projects.json".
 *
 * Run this script in Node.js (e.g., node updateProjectsJson.js) to update the projects.json file.
 */

const fs = require('fs');
const path = require('path');

// If using Node 18 or later, global fetch is available.
// Otherwise, uncomment the following line and install node-fetch:
// const fetch = require('node-fetch');

async function fetchRepos() {
  try {
    const response = await fetch('https://api.github.com/users/vrajpatell/repos');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    let repos = await response.json();

    // Sort repositories by last updated date descending
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    // Map the repository data to our desired project structure
    const projects = repos.map((repo, index) => ({
      id: index + 1,
      name: repo.name,
      description: repo.description || 'No description provided.',
      url: repo.html_url
    }));

    // Define the file path to write projects.json (adjust path as needed)
    const filePath = path.join(__dirname, 'public', 'data', 'projects.json');

    // Ensure the directory exists
    fs.mkdirSync(path.dirname(filePath), { recursive: true });

    // Write the projects.json file with formatted JSON
    fs.writeFileSync(filePath, JSON.stringify(projects, null, 2));
    console.log('projects.json updated successfully!');
  } catch (error) {
    console.error('Error fetching repositories:', error);
  }
}

fetchRepos();
