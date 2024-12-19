document.addEventListener("DOMContentLoaded", function () {
    async function loadIsoOsiContent() {
        try {
            console.log("Caricamento del contenuto ISO/OSI in corso...");
    
            // Carica il file JSON
            const response = await fetch('../altri_files/iso-osi.json'); // Percorso del file JSON
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
            document.getElementById("titolo").textContent = firstSection.title || "Titolo non disponibile";
            document.getElementById("immagineosi").src = firstSection.image.url || "";
            document.getElementById("immagineosi").alt = firstSection.image.alt || "Immagine non disponibile";
            document.querySelector(".text_iso_osi").innerHTML = firstSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
    
            // Seconda sezione
            const secondSection = data.sections[1];
            document.getElementById("titolo_primo").textContent = secondSection.title || "Titolo non disponibile";
            document.getElementById("immagineosi_primo").src = secondSection.image.url || "";
            document.getElementById("immagineosi_primo").alt = secondSection.image.alt || "Immagine non disponibile";
            document.querySelector(".text_iso_osi_primo").innerHTML = secondSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
    
            // Terza sezione
            const thirdSection = data.sections[2];
            document.getElementById("titolo_secondo").textContent = thirdSection.title || "Titolo non disponibile";
            document.getElementById("immagine_secondo").src = thirdSection.image.url || "";
            document.getElementById("immagine_secondo").alt = thirdSection.image.alt || "Immagine non disponibile";
            document.querySelector(".text_iso_osi_secondo").innerHTML = thirdSection.content
                .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                .join("");
            const fourthSection = data.sections[3];
            document.getElementById("titolo_terzo").textContent = fourthSection.title || "Titolo non disponibile";
            document.getElementById("immagine_terzo").src = fourthSection.image.url || "";
            document.getElementById("immagine_terzo").alt = fourthSection.image.alt || "Immagine non disponibile";
            document.querySelector(".text_iso_osi_terzo").innerHTML = fourthSection.content
                    .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                    .join("");
            const fifthSection = data.sections[4];
            document.getElementById("titolo_quarto").textContent = fifthSection.title || "Titolo non disponibile";
            document.getElementById("immagine_quarto").src = fifthSection.image.url || "";
            document.getElementById("immagine_quarto").alt = fifthSection.image.alt || "Immagine non disponibile";
            document.querySelector(".text_iso_osi_quarto").innerHTML = fifthSection.content
                    .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                    .join("");
            const sixthSection = data.sections[5];
            document.getElementById("titolo_quinto").textContent = sixthSection.title || "Titolo non disponibile";
            document.getElementById("immagine_quinto").src = sixthSection.image.url || "";
            document.getElementById("immagine_quinto").alt = sixthSection.image.alt || "Immagine non disponibile";
            document.querySelector(".text_iso_osi_quinto").innerHTML = sixthSection.content
                    .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                    .join("");
            const seventhSection = data.sections[6];
            document.getElementById("titolo_sesto").textContent = seventhSection.title || "Titolo non disponibile";
            document.getElementById("immagine_sesto").src = seventhSection.image.url || "";
            document.getElementById("immagine_sesto").alt = seventhSection.image.alt || "Immagine non disponibile";
            document.querySelector(".text_iso_osi_sesto").innerHTML = seventhSection.content
                    .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                    .join("");
             const eigthSection = data.sections[7];
            document.getElementById("titolo_settimo").textContent = eigthSection.title || "Titolo non disponibile";
            document.getElementById("immagine_settimo").src = eigthSection.image.url || "";
            document.getElementById("immagine_settimo").alt = eigthSection.image.alt || "Immagine non disponibile";
            document.querySelector(".text_iso_osi_settimo").innerHTML = eigthSection.content
                    .map(content => `<p>${content.text || "Testo non disponibile"}</p>`)
                    .join("");
    
        } catch (error) {
            console.error("Errore durante il caricamento del contenuto ISO/OSI:", error);
        }
    }
    
    
    
    
    
    
    

    // Assicurati che la funzione venga eseguita dopo il caricamento completo del DOM
    document.addEventListener('DOMContentLoaded', loadIsoOsiContent);
    // Gestione del bottone per il cambio pagina
    const bottoneTrasporto = document.getElementById("bottoneTrasporto");
    if (bottoneTrasporto) {
        bottoneTrasporto.addEventListener("click", function () {
            console.log("Bottone Trasporto cliccato. Reindirizzamento in corso...");
            window.location.href = "transportLayer.html";
        });
    } else {
        console.error('Il bottone con id "bottoneTrasporto" non è presente nella pagina HTML.');
    }


    loadIsoOsiContent();
});