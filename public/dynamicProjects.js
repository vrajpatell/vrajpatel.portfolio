// This script fetches all public repositories for the user "vrajpatell" from the GitHub API
// and dynamically populates the #projects-container element with the repository details.

async function fetchRepos() {
  try {
    const response = await fetch('https://api.github.com/users/vrajpatell/repos');
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    const repos = await response.json();

    // Sort repositories by last updated date in descending order
    repos.sort((a, b) => new Date(b.updated_at) - new Date(a.updated_at));

    const container = document.getElementById('projects-container');
    container.innerHTML = ''; // Clear loading text

    repos.forEach(repo => {
      const repoLink = document.createElement('a');
      repoLink.href = repo.html_url;
      repoLink.target = '_blank';
      repoLink.className = 'project-item';
      repoLink.innerHTML = `
        <h3>${repo.name}</h3>
        <p>${repo.description || 'No description provided.'}</p>
      `;
      container.appendChild(repoLink);
    });
  } catch (error) {
    console.error('Error fetching repositories:', error);
    const container = document.getElementById('projects-container');
    container.innerHTML = '<p>Failed to load projects. Please try again later.</p>';
  }
}

document.addEventListener('DOMContentLoaded', fetchRepos);
