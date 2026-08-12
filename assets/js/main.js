/**
 * PROJECT PRODIGY — Web Portal Application Engine
 * Handles dynamic data loading, schema rendering, interactive leaderboards, and UI interactions.
 */

document.addEventListener('DOMContentLoaded', () => {
  console.log('🚀 Project PRODIGY Web Application Initialized.');

  // Initialize components
  loadLeaderboardData();
  loadProjectsData();
  loadMentorsData();
  setupSmoothScroll();
});

/**
 * Fetch and Render Leaderboard Data from data/leaderboard.json
 */
async function loadLeaderboardData() {
  const container = document.getElementById('leaderboard-tbody');
  if (!container) return;

  try {
    const response = await fetch('data/leaderboard.json');
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    const data = await response.json();
    
    renderLeaderboardRows(data.individual_leaderboard || []);
  } catch (error) {
    console.warn('Leaderboard JSON fetch fallback triggered:', error);
  }
}

function renderLeaderboardRows(items) {
  const tbody = document.getElementById('leaderboard-tbody');
  if (!tbody) return;

  if (items.length === 0) return; // Keep inline fallback HTML if fetch empty

  tbody.innerHTML = items.map((item, idx) => `
    <tr>
      <td><span class="rank-badge ${idx < 3 ? 'rank-' + (idx + 1) : ''}">#${idx + 1}</span></td>
      <td><strong>${escapeHtml(item.name)}</strong></td>
      <td><span class="hub-pill">${escapeHtml(item.institution || item.hub)}</span></td>
      <td><span class="badge-stage">${escapeHtml(item.stage)}</span></td>
      <td><strong>${item.score || item.points}</strong> pts</td>
      <td><span class="metric-trend">${escapeHtml(item.velocity || '+15/wk')}</span></td>
    </tr>
  `).join('');
}

/**
 * Fetch and Render Active Projects from data/projects.json
 */
async function loadProjectsData() {
  const container = document.getElementById('projects-container');
  if (!container) return;

  try {
    const response = await fetch('data/projects.json');
    if (!response.ok) return;
    const data = await response.json();

    if (data.projects && data.projects.length > 0) {
      container.innerHTML = data.projects.map(proj => `
        <div class="doc-card" id="proj-${proj.id}">
          <div>
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
              <span class="role-badge">${escapeHtml(proj.category || 'Venture Probe')}</span>
              <span class="badge-stage">${escapeHtml(proj.stage)}</span>
            </div>
            <h3 class="doc-title">${escapeHtml(proj.title)}</h3>
            <p class="doc-desc">${escapeHtml(proj.description)}</p>
          </div>
          <div style="margin-top: 16px; font-size: 0.85rem; color: var(--text-dim);">
            <strong>Lead:</strong> ${escapeHtml(proj.lead)} • <strong>SMI Score:</strong> ${proj.smi_score}/10
          </div>
        </div>
      `).join('');
    }
  } catch (err) {
    console.log('Projects data loading fallback active.');
  }
}

/**
 * Fetch and Render Mentors from data/mentors.json
 */
async function loadMentorsData() {
  const container = document.getElementById('mentors-container');
  if (!container) return;

  try {
    const response = await fetch('data/mentors.json');
    if (!response.ok) return;
    const data = await response.json();

    if (data.mentors && data.mentors.length > 0) {
      container.innerHTML = data.mentors.map(mentor => `
        <div class="triad-card" id="mentor-${mentor.id}">
          <span class="role-badge">${escapeHtml(mentor.domain)}</span>
          <h3 class="card-title">${escapeHtml(mentor.name)}</h3>
          <p class="card-text">${escapeHtml(mentor.title || mentor.affiliation)}</p>
          <div style="margin-top: 12px; font-size: 0.88rem; color: var(--text-muted);">
            <strong>Focus:</strong> ${escapeHtml(mentor.expertise || mentor.focus)}
          </div>
        </div>
      `).join('');
    }
  } catch (err) {
    console.log('Mentors data loading fallback active.');
  }
}

/**
 * Setup Smooth Navigation Scroll
 */
function setupSmoothScroll() {
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}
