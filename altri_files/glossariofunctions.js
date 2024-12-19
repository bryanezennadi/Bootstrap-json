document.addEventListener("DOMContentLoaded", function () {
    async function loadGlossario() {
        try {
            console.log("Caricamento del contenuto del glossario in corso...");
    
            // Carica il file JSON
            const response = await fetch('../altri_files/glossario.json'); // Percorso del file JSON
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
            document.querySelector(".TitoloPrimo").textContent = firstSection.title || "Titolo non disponibile";
            document.querySelector(".TextPrimo").innerHTML = firstSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
    
            // Seconda sezione
            const secondSection = data.sections[1];
            document.querySelector(".TitoloSecondo").textContent = secondSection.title || "Titolo non disponibile";
            document.querySelector(".TextSecondo").innerHTML = secondSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
    
            // Terza sezione
            const thirdSection = data.sections[2];
            document.querySelector(".TitoloTerzo").textContent = thirdSection.title || "Titolo non disponibile";
            document.querySelector(".TextTerzo").innerHTML = thirdSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
            const fourthSection = data.sections[3];
            document.querySelector(".TitoloQuarto").textContent = fourthSection.title || "Titolo non disponibile";
            document.querySelector(".TextQuarto").innerHTML = fourthSection.content
                    .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                    .join("");
                    const listaLivelli = document.getElementById('livelli');
                    fourthSection.livelli.forEach(livello => {
                      const li = document.createElement('li');
                      li.textContent = livello;
                      listaLivelli.appendChild(li);
                    });
                    document.getElementById('conclusione').textContent = fourthSection.conclusione;
            const fifthSection = data.sections[4];
            document.querySelector(".TitoloQuinto").textContent = fifthSection.title || "Titolo non disponibile";
            document.querySelector(".TextQuinto").innerHTML = fifthSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
            
            const sixthSection = data.sections[5];
            document.querySelector(".TitoloSesto").textContent = sixthSection.title || "Titolo non disponibile";
            document.querySelector(".TextSesto").innerHTML = sixthSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
            const seventhSection = data.sections[6];
            document.querySelector(".TitoloSettimo").textContent = seventhSection.title || "Titolo non disponibile";
            document.querySelector(".TextSettimo").innerHTML = seventhSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
            const eightSection = data.sections[7];
            document.querySelector(".TitoloOttavo").textContent = eightSection.title || "Titolo non disponibile";
            document.querySelector(".TextOttavo").innerHTML = eightSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
            const ninthSection = data.sections[8];
            document.querySelector(".TitoloNono").textContent = ninthSection.title || "Titolo non disponibile";
            document.querySelector(".TextNono").innerHTML = ninthSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
            const tenthSection = data.sections[9];
            document.querySelector(".TitoloDecimo").textContent = tenthSection.title || "Titolo non disponibile";
            document.querySelector(".TextDecimo").innerHTML = tenthSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
            const eleventhSection = data.sections[10];
            document.querySelector(".TitoloUndicesimo").textContent = eleventhSection.title || "Titolo non disponibile";
            document.querySelector(".TextUndicesimo").innerHTML = eleventhSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
                
    
        } catch (error) {
            console.error("Errore durante il caricamento del contenuto del glossario:", error);
        }
    }
    // Assicurati che la funzione venga eseguita dopo il caricamento completo del DOM
    document.addEventListener('DOMContentLoaded', loadGlossario);


    loadGlossario();
});