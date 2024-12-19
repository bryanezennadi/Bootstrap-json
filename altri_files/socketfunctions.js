document.addEventListener("DOMContentLoaded", function() {
async function loadSocketContent() {
    try {
        console.log("Caricamento del contenuto socket in corso...");

        // Carica il file JSON
        const response = await fetch('../altri_files/socket.json');
        if (!response.ok) {
            throw new Error(`Errore HTTP durante il caricamento di socket.json: ${response.status}`);
        }

        const data = await response.json();
        console.log("Dati socket.json caricati:", data);

        // Verifica che i dati siano presenti e corretti
        if (!data || !data.titolo || !data.paragrafo || !data.immagine) {
            throw new Error("I dati nel JSON non sono completi o sono malformati.");
        }

        // Aggiorna il contenuto della pagina
        const titolo = document.getElementById("titolo");
        const paragrafo = document.getElementById("paragrafo");
        const immagine = document.getElementById("immagine");

        if (titolo && paragrafo && immagine) {
            titolo.textContent = data.titolo;
            paragrafo.textContent = data.paragrafo;
            immagine.src = data.immagine;
        } else {
            console.error('Uno o più elementi (titolo, paragrafo, immagine) non sono presenti nella pagina HTML.');
        }

        // Architettura delle socket
        const architetturaTitolo = document.createElement('h3');
        architetturaTitolo.textContent = data.architettura.titolo;
        const architetturaDescrizione = document.createElement('p');
        architetturaDescrizione.textContent = data.architettura.descrizione;
        const architetturaList = document.createElement('ol');
        data.architettura.punti.forEach(punto => {
            const li = document.createElement('li');
            const b = document.createElement('b');
            b.textContent = punto.titolo;
            li.appendChild(b);
            li.appendChild(document.createTextNode(` ${punto.descrizione}`));
            architetturaList.appendChild(li);
        });
        document.getElementById("text_socket").appendChild(architetturaTitolo);
        document.getElementById("text_socket").appendChild(architetturaDescrizione);
        document.getElementById("text_socket").appendChild(architetturaList);

        // Esempi di utilizzo delle socket
        const esempiTitolo = document.createElement('h3');
        esempiTitolo.textContent = data.esempi.titolo;
        const esempiDescrizione = document.createElement('p');
        esempiDescrizione.textContent = data.esempi.descrizione;
        const esempiList = document.createElement('ul');
        data.esempi.punti.forEach(punto => {
            const li = document.createElement('li');
            const b = document.createElement('b');
            b.textContent = punto.titolo;
            li.appendChild(b);
            li.appendChild(document.createTextNode(` ${punto.descrizione}`));
            esempiList.appendChild(li);
        });
        document.getElementById("text_socket").appendChild(esempiTitolo);
        document.getElementById("text_socket").appendChild(esempiDescrizione);
        document.getElementById("text_socket").appendChild(esempiList);

        // Vantaggi e svantaggi delle socket
        const vantaggiSvantaggiTitolo = document.createElement('h3');
        vantaggiSvantaggiTitolo.textContent = data.vantaggi_svantaggi.titolo;
        const vantaggiList = document.createElement('ul');
        data.vantaggi_svantaggi.vantaggi.forEach(vantaggio => {
            const li = document.createElement('li');
            li.innerHTML = `<b>Vantaggi:</b> ${vantaggio}`;
            vantaggiList.appendChild(li);
        });
        const svantaggiList = document.createElement('ul');
        data.vantaggi_svantaggi.svantaggi.forEach(svantaggio => {
            const li = document.createElement('li');
            li.innerHTML = `<b>Svantaggi:</b> ${svantaggio}`;
            svantaggiList.appendChild(li);
        });
        document.getElementById("text_socket").appendChild(vantaggiSvantaggiTitolo);
        document.getElementById("text_socket").appendChild(vantaggiList);
        document.getElementById("text_socket").appendChild(svantaggiList);

    } catch (error) {
        console.error("Errore durante il caricamento del contenuto socket:", error);
    }
}
loadSocketContent();
});