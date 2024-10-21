let playlist = [];

// Adicionar músicas à playlist
playlist.push({ titulo: "Bohemian Rhapsody", artista: "Queen", duracao: "5:55" });
playlist.push({ titulo: "Stairway to Heaven", artista: "Led Zeppelin", duracao: "8:02" });
playlist.push({ titulo: "Imagine", artista: "John Lennon", duracao: "3:01" });

// Exibir a playlist completa
console.log("Playlist:");
for (let i = 0; i < playlist.length; i++) {
    console.log(`${i + 1}. ${playlist[i].titulo} - ${playlist[i].artista} (${playlist[i].duracao})`);
}

// Remover uma música da playlist (a primeira no exemplo)
let musicaRemovida = playlist.shift();
console.log(`\nMúsica removida: ${musicaRemovida.titulo} - ${musicaRemovida.artista}`);

// Exibir a playlist atualizada
console.log("\nPlaylist Atualizada:");
for (let i = 0; i < playlist.length; i++) {
    console.log(`${i + 1}. ${playlist[i].titulo} - ${playlist[i].artista} (${playlist[i].duracao})`);
}

// Adicionar uma nova música
playlist.push({ titulo: "Billie Jean", artista: "Michael Jackson", duracao: "4:53" });
console.log("\nNova música adicionada: Billie Jean - Michael Jackson");

// Exibir a playlist final
console.log("\nPlaylist Final:");
for (let i = 0; i < playlist.length; i++) {
    console.log(`${i + 1}. ${playlist[i].titulo} - ${playlist[i].artista} (${playlist[i].duracao})`);
}

