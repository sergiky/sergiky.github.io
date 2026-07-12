const DIFF = {
    Easy: { width: 25, cls: "easy" },
    Medium: { width: 50, cls: "medium" },
    Hard: { width: 75, cls: "hard" },
    Insane: { width: 100, cls: "insane" }
};
const COLORS = ["pink", "blue", "yellow", "green"];

function esc(s) {
    return String(s ?? "").replace(/[&<>"']/g, c =>
        ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function cardHTML(m, i) {
    const d = DIFF[m.difficulty] || DIFF.Easy;
    const color = m.color || COLORS[i % COLORS.length];
    const platform = (m.platform || "default").toLowerCase().replace(/[^a-z0-9_-]/g, "");
    const tags = (m.tags || []).map(t => `<span class="tag">#${esc(t)}</span>`).join("");
    return `
  <article class="card">
    <div class="card-inner ${esc(color)}-bg">
      <div class="content-top">
        <div class="text-side">
          <span class="badge">${esc(m.badge)}</span>
          <h3>${esc(m.title)}</h3>
          <p>${esc(m.description)}</p>
          <div class="tags">${tags}</div>
        </div>
        <img src="logos/${platform}.png" alt="${esc(m.platform || "platform")} logo"
             class="platform-logo" onerror="this.src='logos/default.png'">
      </div>
      <div class="progress-section">
        <div class="progress-labels">
          <span>Difficulty</span>
          <span>${esc(m.difficulty)}</span>
        </div>
        <div class="progress-track">
          <div class="progress-fill ${d.cls}" style="width: ${d.width}%;"></div>
        </div>
      </div>
    </div>
    <div class="card-footer">
      <span class="footer-text">Uploaded: <strong>${esc(m.date)}</strong></span>
      <a href="${esc(m.youtube || "#")}" target="_blank" rel="noopener noreferrer" class="btn-action">Watch walkthrough</a>
    </div>
  </article>`;
}

const list = typeof MACHINES !== "undefined" ? MACHINES : [];
document.getElementById("grid").innerHTML = list.map(cardHTML).join("");

const input = document.getElementById("search");
const cards = document.querySelectorAll(".card");
input.closest("form").addEventListener("submit", e => e.preventDefault());
input.addEventListener("input", () => {
    const q = input.value.trim().toLowerCase();
    cards.forEach(card => {
        card.style.display = card.textContent.toLowerCase().includes(q) ? "" : "none";
    });
});
