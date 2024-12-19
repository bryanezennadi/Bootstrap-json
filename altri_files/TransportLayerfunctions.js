document.addEventListener("DOMContentLoaded", function () {
    async function loadTransportLayer() {
        try {
            console.log("Caricamento del contenuto del Transport Layer in corso...");
    
            // Carica il file JSON
            const response = await fetch('../altri_files/TransportLayer.json'); // Percorso del file JSON
            if (!response.ok) {
                throw new Error(`Errore HTTP durante il caricamento di iso-osi.json: ${response.status}`);
            }
    
            const data = await response.json();
            console.log("Dati iso-osi.json caricati:", data);
    
            // Verifica dei dati
            if (!data || !Array.isArray(data.sections) || data.sections.length < 3) {
                throw new Error("I dati nel JSON non sono completi o sono malformati.");
            }
    
            // Prima sezione
            const firstSection = data.sections[0];
            document.getElementById("titoloTcp").textContent = firstSection.title || "Titolo non disponibile";
            document.querySelector(".textTcp").innerHTML = firstSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
    
            // Seconda sezione
            const secondSection = data.sections[1];
            document.getElementById("titoloUdp").textContent = secondSection.title || "Titolo non disponibile";
            document.querySelector(".textUdp").innerHTML = secondSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
    
            // Terza sezione
            const thirdSection = data.sections[2];
            document.getElementById("titolo_TWH").textContent = thirdSection.title || "Titolo non disponibile";
            document.getElementById("immagine_TWH").src = thirdSection.image.url || "";
            document.getElementById("immagine_TWH").alt = thirdSection.image.alt || "Immagine non disponibile";
            document.querySelector(".textTWH").innerHTML = thirdSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
            const fourthSection = data.sections[3];
            document.getElementById("titolo_CS").textContent = fourthSection.title || "Titolo non disponibile";
            document.getElementById("immagine_CS").src = fourthSection.image.url || "";
            document.getElementById("immagine_CS").alt = fourthSection.image.alt || "Immagine non disponibile";
            document.querySelector(".textCS").innerHTML = fourthSection.content
                    .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                    .join("");
    
        } catch (error) {
            console.error("Errore durante il caricamento del contenuto del Transport Layer:", error);
        }
    }
    // Assicurati che la funzione venga eseguita dopo il caricamento completo del DOM
    document.addEventListener('DOMContentLoaded', loadTransportLayer);


    loadTransportLayer();
});