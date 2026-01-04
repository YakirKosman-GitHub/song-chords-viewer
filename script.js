const chordsSharp = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
];
const chordsFlat = [
    "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",
];

let songsData = [];

fetch("songs/index.json")
    .then(r => r.json())
    .then(list => {
        songsData = list;
        renderSongList(list);
    });

let transposeAmount = 0;
let currentSong = null;

function songTitleToFilename(title) {
    return title.trim().replace(/\s+/g, "-") + ".txt";
}

function loadSongFile(song) {
    return fetch("songs/" + songTitleToFilename(song.title)).then(r => r.text());
}

function parseLyrics(rawLyrics, chords) {
    const regex = /<(\d+)>/g;
    const parts = rawLyrics.split(regex);
    let output = "";
    let lastWord = "";

    for (let i = 0; i < parts.length; i++) {
        if (i % 2 === 0) {
            // טקסט רגיל - מפצל למילים כולל רווחים
            const words = parts[i].split(/(\s+)/);
            for (const w of words) {
                if (!w.trim()) {
                    output += w;
                } else {
                    lastWord = w;
                    output += w;
                }
            }
        } else {
            // מספר האקורד שמופיע בין הפינות <...>
            const chordIndex = parseInt(parts[i], 10) - 1;
            const chord = chords[chordIndex] || "";
            if (lastWord) {
                // מחליף את המילה האחרונה בתג עם האקורד מעליה
                const span = `<span class="word-with-chord" data-chord="${chord}">${lastWord}</span>`;
                output = output.replace(new RegExp(`${lastWord}$`), span);
            }
        }
    }

    return output;
}

function renderSongList(filteredSongs) {
    const ul = document.getElementById("songList");
    ul.innerHTML = "";
    filteredSongs.forEach((song) => {
        const li = document.createElement("li");
        li.textContent = `${song.title} - ${song.artist}`;
        li.onclick = () => showSong(song);
        ul.appendChild(li);
    });
}

function showSong(song) {
    currentSong = song;
    transposeAmount = 0;
    updateTransposeDisplay();

    const container = document.getElementById("songsContainer");
    container.innerHTML = "";

    loadSongFile(song).then(rawLyrics => {
        const div = document.createElement("div");
        div.className = "song";

        div.innerHTML = `
          <div class="song-meta">
            <strong>שם השיר:</strong> ${song.title}<br>
            <strong>זמר:</strong> ${song.artist}<br>
            <strong>שנה:</strong> ${song.year}<br>
            <strong>מלחין:</strong> ${song.composer}<br>
            <strong>אלבום:</strong> ${song.album}<br>
            <strong>שפה:</strong> ${song.lang === "he" ? "עברית" : "אנגלית"}
          </div>
          <pre class="lyrics" dir="${song.lang === "en" ? "ltr" : "rtl"}">
${parseLyrics(rawLyrics, song.chords)}
          </pre>
        `;

        container.appendChild(div);
        container.style.display = "block";
        document.getElementById("transposeControls").style.display = "flex";
    });
}

function updateTransposeDisplay() {
    const display = document.getElementById("transposeValue");
    display.textContent = transposeAmount === 0
        ? "0"
        : (transposeAmount > 0 ? "+" : "") + transposeAmount;
}

function transposeAll(shift) {
    transposeAmount += shift * 0.5;
    updateTransposeDisplay();
    const spans = document.querySelectorAll(".word-with-chord");
    spans.forEach((span) => {
        const original = span.getAttribute("data-chord");
        let match = original.match(/^([A-G][b#]?)(.*)$/);
        if (!match) return;
        let [_, root, suffix] = match;
        let index = chordsSharp.indexOf(root);
        if (index === -1) index = chordsFlat.indexOf(root);
        if (index === -1) return;
        let newIndex = (index + shift + 12) % 12;
        let newChord = chordsSharp[newIndex] + suffix;
        span.setAttribute("data-chord", newChord);
    });
}

function resetTranspose() {
    transposeAmount = 0;
    updateTransposeDisplay();
    if (currentSong) showSong(currentSong);
}

function applyEasiestKey() {
    const target = parseFloat(currentSong?.easiestKeyShift ?? 0); // ברירת מחדל 0
    transposeValue = 0; // איפוס
    transposeAll(target * 2); // שינוי בפועל (בחצאי טונים)
}

function filterSongs() {
    const title = document.getElementById("searchTitle").value.toLowerCase();
    const artist = document.getElementById("searchArtist").value.toLowerCase();
    const filtered = songsData.filter(
        (song) =>
            song.title.toLowerCase().includes(title) &&
            song.artist.toLowerCase().includes(artist)
    );
    renderSongList(filtered);
    document.getElementById("songsContainer").style.display = "none";
    document.getElementById("transposeControls").style.display = "none";
}

document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("searchTitle").addEventListener("input", filterSongs);
    document.getElementById("searchArtist").addEventListener("input", filterSongs);
    //renderSongList(songsData);
});

document.getElementById("addSongBtn").addEventListener("click", () => {
    document.getElementById("songForm").style.display = "block";
});

function generateSongCode() {
    const title = document.getElementById("fTitle").value.trim();
    const artist = document.getElementById("fArtist").value.trim();
    const composer = document.getElementById("fComposer")?.value.trim() || "";
    const year = document.getElementById("fYear")?.value.trim() || "";
    const album = document.getElementById("fAlbum")?.value.trim() || "";
    const lang = document.getElementById("fLang").value;
    const easiestKey = document.getElementById("fEasiestKey").value.trim();
    const chords = document.getElementById("fChords").value.split(",").map((s) => `"${s.trim()}"`);
    const lyrics = document.getElementById("fLyrics").value.replace(/`/g, "\\`");

    const code = `{
    title: "${title}",
    artist: "${artist}",
    year: "${year}",
    composer: "${composer}",
    album: "${album}",
    lang: "${lang}",
    chords: [${chords.join(", ")}],
    lyrics: \`${lyrics}\`,
    easiestKeyShift: ${easiestKey || 0}
  }`;
    document.getElementById("generatedCode").textContent = code;
}


