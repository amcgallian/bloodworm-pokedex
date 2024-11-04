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
                        <h2 class="section-header">Bloodworm Midge Larvae</h2>
                        <p><strong>Scientific Name:</strong> <em>Chironomus plumosus</em></p>
                        <p><strong>Height:</strong> 2 - 20mm</p>
                        <p><strong>Weight:</strong> 1 - 5mg</p>
                        <p><strong>Type:</strong> Macroinvertebrate - Detritivores</p>
                    </div>
                </div>
                <div class="description-box">
                    <p id="description-text">The Bloodworm is a small, strikingly red aquatic invertebrate often found wriggling through the sediment of stagnant or nutrient-rich waters. Its vibrant color comes from hemoglobin-rich blood, an adaptation allowing it to thrive in low-oxygen environments. Measuring between 2 to 20 mm, each larva has a segmented, translucent body encased in a delicate sheath and equipped with hook-like structures at its tail for anchoring in sediment. This larva's movements are quick and erratic as it burrows into the lagoon bed, creating tiny tunnels that serve as both shelter and hunting grounds, reflecting an industrious resilience in its niche environment.</p>
                </div>
                <div class="transition-overlay" id="transition-overlay"></div>
            `;
        } else {
            content.innerHTML = `
                <div class="single-section">
                    <h2 class="section-header">Bloodworm Midge Larvae</h2>
                    <img src="${getSectionImage(section)}" alt="Bloodworm Midge Larva" class="section-image">
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
        case 'habitat':
            return `Bloodworm larvae thrive in low-oxygen, nutrient-rich environments like the North Lagoon of Jackson Park. Here, in the murky, silty bed of the lagoon, they burrow to depths where they can remain hidden, away from predators and nourished by a steady supply of organic matter that filters down through the water. The lagoon's connection to Lake Michigan allows for periodic shifts in water composition, temperature, and nutrient load. These larvae are well-suited to environments altered by human impact—areas with sediment disturbed and replenished by rain runoff, pollution, and fluctuating water levels from the park’s hydraulic engineering. Often found near stagnant pockets of water high in organic material and low in oxygen, bloodworm larvae anchor themselves in the mud, thriving in the shaded regions along the shore, much like those observed near popular fishing spots.`;

        case 'diet':
            return `Bloodworm larvae are detritivores, feeding on decomposing organic material. They act as recyclers, consuming microorganisms, algae, and any available organic debris in the sediment. Their primary diet consists of algae, bacteria, and small particles of decomposing plant matter, helping to reduce waste and making them a crucial part of the lagoon’s food web. By breaking down organic matter, they contribute to nutrient cycling within this aquatic ecosystem.`;

        case 'predators':
            return `Small fish and other macroinvertebrates, including dragonfly nymphs and crayfish, are the primary predators of bloodworm larvae. However, thanks to their hemoglobin reserves and tolerance to pollution, they can survive in low-oxygen or polluted zones that most predators avoid, allowing them to flourish in hypoxic or toxic pockets where they remain relatively undisturbed. These zones become a hidden realm within the lagoon, providing refuge for bloodworm larvae from predation.`;

        case 'historical':
            return `This lagoon is a testament to Chicago’s evolving relationship with its waterways. The North Lagoon, once a centerpiece of the 1893 Columbian Exposition, is now a semi-wild remnant, layered with history and impacted by urbanization. Bloodworm larvae embody the intersection of natural and anthropogenic forces within the Anthropocene, thriving amidst the residues of human activity. Much like Lisa Robertson's reflections on park sites, the bloodworm larva stands as a quiet archivist of the Anthropocene, reflecting Chicago’s impact on the ecosystem and thriving against the odds. The lagoon’s waters, shaped by feats of hydraulic engineering from the Exposition, reveal the lasting influence of urban development on this natural habitat.`;

        case 'connections':
            return `The bloodworm midge larva is intricately connected to human activities, serving both ecological and practical roles. Widely used in aquariums as nutritious fish food, these larvae play a crucial role in maintaining aquatic ecosystems through their detritivorous diet, breaking down organic matter and supporting nutrient cycling.\n
                        Additionally, bloodworms act as indicators of water quality, thriving in polluted and hypoxic conditions where other organisms struggle. As "living fossils" of these environments, they reflect the impacts of urbanization and the resilience of life in the Anthropocene.\n
                        Pondering the bloodworm larva invites consideration of how even the smallest creatures adapt to human-altered landscapes. The lagoon serves as a microcosm for exploring ecological resilience and the traces of technological influence in natural settings. Here, bloodworms symbolize continuity within a changing ecosystem, much like Jackson Park itself—a quiet witness to a century of change. Their presence underscores nature's persistence and interconnectedness, even in areas significantly shaped by human activity.`;

        default:
            return `Click a section above to learn more!`;
    }
}


// Function to get section-specific image
function getSectionImage(section) {
    switch (section) {
        case 'habitat': return 'images/habitat.jpg'; // Replace with actual image path
        case 'diet': return 'images/diet.jpg'; // Replace with actual image path
        case 'predators': return 'images/predators.jpg'; // Replace with actual image path
        case 'historical': return 'images/historical.jpg'; // Replace with actual image path
        case 'connections': return 'images/connections.jpg'; // Replace with actual image path
        default: return 'images/bloodworm.png'; // Default image if section doesn't match
    }
}