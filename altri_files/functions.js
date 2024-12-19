document.addEventListener("DOMContentLoaded", function () {
    console.log("Caricamento della pagina completato!");

    // Funzione per il caricamento del contenuto home (content.json)
    async function loadHomeContent() {
        try {
            console.log("Caricamento del contenuto home in corso...");

            // Carica il file JSON
            const response = await fetch('../altri_files/content.json');
            if (!response.ok) {
                throw new Error(`Errore HTTP durante il caricamento di content.json: ${response.status}`);
            }

            const data = await response.json();
            console.log("Dati content.json caricati:", data);

            // Verifica che i dati siano presenti
            if (!data || !data.titolo || !data.contenuto) {
                throw new Error("I dati nel JSON non sono completi o sono malformati.");
            }

            // Inserisci i dati nella pagina
            const container = document.getElementById('text_home');
            if (container) {
                // Aggiungi titolo
                const title = document.createElement('h3');
                title.id = 'titolo';
                title.textContent = data.titolo;
                container.appendChild(title);

                // Aggiungi lista di contenuti
                const ul = document.createElement('ul');
                data.contenuto.forEach(item => {
                    const li = document.createElement('li');
                    const a = document.createElement('a');
                    a.href = item.href;

                    const strong = document.createElement('strong');
                    strong.textContent = item.titolo;

                    a.appendChild(strong);
                    li.appendChild(a);

                    const descrizione = document.createTextNode(` ${item.descrizione}`);
                    li.appendChild(descrizione);

                    ul.appendChild(li);
                });
                container.appendChild(ul);
            } else {
                console.error('Contenitore con id "text_home" non trovato.');
            }
        } catch (error) {
            console.error("Errore durante il caricamento del contenuto home:", error);
        }
    }

    // Funzione per il caricamento del contenuto socket (socket.json)
   
    


    // Esegui i caricamenti dei contenuti
    loadHomeContent();
   
   
});
