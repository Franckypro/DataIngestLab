// Smooth scroll vers une section
function scrollToSection(id) {
    const el = document.querySelector(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
}

document.addEventListener("DOMContentLoaded", () => {
    const btnStart = document.getElementById("btn-start");
    const btnScrollModules = document.getElementById("btn-scroll-modules");
    const filterButtons = document.querySelectorAll(".filter-btn");
    const modulesGrid = document.getElementById("modules-grid");
    const datasetToggleBtn = document.getElementById("btn-toggle-dataset");
    const datasetContainer = document.getElementById("dataset-table-container");

    // Bouton "Commencer le cours" -> scroll vers le premier module
    if (btnStart) {
        btnStart.addEventListener("click", () => scrollToSection("#modules"));
    }

    // Bouton "Voir les modules"
    if (btnScrollModules) {
        btnScrollModules.addEventListener("click", () => scrollToSection("#modules"));
    }

    // Filtres des modules
    if (modulesGrid && filterButtons.length > 0) {
        const cards = modulesGrid.querySelectorAll(".card");

        filterButtons.forEach((btn) => {
            btn.addEventListener("click", () => {
                const filter = btn.getAttribute("data-filter");

                // Style bouton actif
                filterButtons.forEach((b) => b.classList.remove("active"));
                btn.classList.add("active");

                // Affichage des cartes
                cards.forEach((card) => {
                    const type = card.getAttribute("data-type");
                    if (filter === "all" || type === filter) {
                        card.style.display = "flex";
                    } else {
                        card.style.display = "none";
                    }
                });
            });
        });
    }

    // Masquer / Afficher le dataset
    if (datasetToggleBtn && datasetContainer) {
        datasetToggleBtn.addEventListener("click", () => {
            const isHidden = datasetContainer.style.display === "none";
            datasetContainer.style.display = isHidden ? "block" : "none";
        });
    }
});
