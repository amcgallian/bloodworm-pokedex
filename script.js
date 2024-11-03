function showSection(section) {
    const content = document.querySelector('.content');
    const overlay = document.getElementById('transition-overlay');

    // Show the transition overlay and hide it after animation completes
    overlay.style.display = 'block';
    setTimeout(() => {
        overlay.style.display = 'none';

        // Update the content based on the selected section
        if (section === 'summary') {
            content.innerHTML = `
                <div class="top-section">
                    <div class="image-section">
                        <img src="images/bloodworm.png" alt="Bloodworm Midge Larva" class="bloodworm-image">
                    </div>
                    <div class="info-section">
                        <h2>Bloodworm Midge Larva</h2>
                        <p><strong>Scientific Name:</strong> <em>Chironomus plumosus</em></p>
                        <p><strong>Height:</strong> 1'11"</p>
                        <p><strong>Weight:</strong> 200.1 lbs</p>
                        <p><strong>Type:</strong> Normal</p>
                    </div>
                </div>
                <div class="description-box">
                    <p id="description-text">Click a section above to learn more!</p>
                </div>
                <div class="transition-overlay" id="transition-overlay"></div>
            `;
        } else {
            content.innerHTML = `
                <div class="single-section">
                    <h2>Bloodworm Midge Larva</h2>
                    <img src="images/bloodworm.png" alt="Bloodworm Midge Larva" class="section-image">
                    <div class="section-description">
                        <p>${getSectionText(section)}</p>
                    </div>
                </div>
                <div class="transition-overlay" id="transition-overlay"></div>
            `;
        }
    }, 500); // Match duration with CSS animation time
}

// Function to get section-specific text
function getSectionText(section) {
    switch (section) {
        case 'habitat': return 'Found in muddy, low-oxygen waters, such as Jackson Park’s North Lagoon...';
        case 'diet': return 'These larvae feed on organic debris...';
        case 'predators': return 'Common predators include fish and amphibians...';
        case 'historical': return 'Historically, bloodworms have been used as fish bait...';
        case 'connections': return 'Bloodworms have significant ecological roles...';
        default: return 'Select a section to learn more!';
    }
}
