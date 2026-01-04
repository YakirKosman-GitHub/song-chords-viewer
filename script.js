const chordsSharp = [
    "C", "C#", "D", "D#", "E", "F", "F#", "G", "G#", "A", "A#", "B",
];
const chordsFlat = [
    "C", "Db", "D", "Eb", "E", "F", "Gb", "G", "Ab", "A", "Bb", "B",
];

const songsData = [
    {
        title: "שם השיר",
        artist: "שם הזמר",
        year: "שנת הוצאה",
        composer: "שם המלחין",
        album: "שם האלבום",
        lang: "he",
        chords: ["F", "Bb", "G", "C"],
        lyrics: `
    מילות<1> השיר לדוגמ<2>א
    שורה<3> שנייה לדוגמ<4>א`,
        easiestKeyShift: -2,
    }, {
        title: "אור החיים",
        artist: "ישי ריבו",
        year: "2016",
        composer: "ישי ריבו",
        album: "פחד גבהים",
        lang: "he",
        chords: ["C", "Am", "Em", "F", "G", "E", "Eb", "Dm"],
        lyrics: `
    כמי<1> שעסק בה לקרעים<2>
    וראה אנשים מלאכים<3>
    שהמיתו עצמם עליה<4>
    וקבלו<5> ממנה חיים<1>
    כמי<6> שטעם טעמה לרגעים<2>
    וראה אנשים
    באמת<3> מאושרים
    ואיזה<4> אור<5> על הפנים<1>
    איך הם נשבים<4> בקיסמה לפניה<5>
    מתהלכים כסומא<6> אחריה<2>
    ותכלית<7> האמת היא כל צדדיה<4>
    כל<5> שבעים פניה<1> הא<2> הא
    יקרה<4> מפז ומעושר<5>
    ניקנת היא בעמל<7> וביושר<2>
    והיא הדרך<8> והיא<5> האושר<1>`,
        easiestKeyShift: 0
    },
    {
        title: "צעדים",
        artist: "עקיבא תורג'מן",
        year: "",
        composer: "",
        album: "",
        lang: "he",
        chords: ["Am", "C", "Dm", "F", "G", "Em"],
        lyrics: `
...<1> עד שתשובי לביתי<2>
אנגן שירים<3>
עוד תראי<4> סוף ל<5>נדודייך
...<1> ולך שמורה אהבתי<2>
כבר שנים שנים<3>
שאני<4> נכסף<5> אלייך

...<3> ולך אתן את שמחתי<5>
תפילות בלב<1>
אני אוסף<2> לשנינו
...<3> עוד רגע ואת פה איתי<5>
צעדים צעדים<1>
זה קרוב<2> קרוב<5> אלינו
...<3> אני חלמתי בלילות<4> אהבה כזאת <1>
גם עכשיו כשאת איתי<5> אני לא שוכח
...<3> גם מעבר לשנים<4>
עוד אפשר לראות <1>
הבאת איתך ת'אור<5>
איך<1> בלב שלי הכל שמח<3>
ככה<2> בלילות<6> ובימים<1>
ואת תמיד כוכב זורח<3>
שיאיר<2> עלי<6> כל החיים<1>
<1>עד שינוסו הצללים<2>
אפזר מילים<3>
שיאירו<4> את<5> פנייך
<1>בגאיות ובהרים<2>
צעדים צעדים<3>
כל הדרך<4> בעינייך<5>
<3>ולך אתן את שמחתי<5>
תפילות בלב<1>
אני אוסף<5> לשנינו
<3>עוד רגע ואת פה איתי<5>
צעדים צעדים<1>
זה קרוב<2> קרוב<5> אלינו
<3>אני חלמתי בלילות<4> אהבה כזאת <1>
גם עכשיו כשאת איתי<G> אני לא שוכח
<3>גם מעבר לשנים<4>
עוד אפשר לראות <1>
הבאת איתך ת'אור<5> 
איך<1> בלב שלי הכל שמח<3>
ככה<2> בלילות<6> ובימים<1>
ואת תמיד כוכב זורח<3>
שיאיר<2> עלי<5> כל החיים<1>
איך<1> בלב שלי הכל שמח<3>
ככה<2> בלילות<6> ובימים<1>
ואת תמיד כוכב זורח<3>
שיאיר<2> עלי<6> כל החיים<1>`,
        easiestKeyShift: 0
    },
    {
        title: "song name",
        artist: "singer name",
        year: "",
        composer: "",
        album: "",
        lang: "en",
        chords: ["A", "B", "C", "D"],
        lyrics: `
Exa<1>mple of English<2>
so<3>ng lyrics<4>`,
        easiestKeyShift: 1.5
    },
    {
        title: "אחינו כל בית ישראל",
        artist: "אייבי רוטנברג",
        year: "",
        composer: "",
        album: "",
        lang: "he",
        chords: ["Am", "Dm", "E", "Bb", "Em", "G", "F"],
        lyrics: `
א<1>חינו כל<2> בית ישראל<1> ...<3>,
א<1>חינו כל<2> בית ישראל.
הנתו<4>נים בצר<1>ה,
בצ<2>רה ובש<1>ביה.
העו<2>מדים בין בים<1>,
ובין ביב<5>שה<1>.

...<2> ...<5>

המ<1>קום יר<6>חם, יר<5>חם על<7>יהם<6>!
ויו<1>ציאם מצ<6>רה, ל<7>רוו<6>חה<2>.
ו<1>מאפלה לאו<6>רה, ומשי<5>עבוד ל<7>גאו<6>לה!
ה<1>שתא, בעג<6>לא, ובזמן<7> ק<6>ריב<1>!`,
        easiestKeyShift: 0
    },
    {
        title: "תראי אהובתי",
        artist: "אושר כהן",
        year: "",
        composer: "",
        album: "",
        lang: "he",
        chords: ["Am", "G", "Em", "F", "C"],
        lyrics: `
*בית 1:*
שלא יהיו פה טעויות<1>, יש לי שאלות
איך מנסיך של אהבה<2>, הפכתי מלך החיות
אני יודע הכול ...<3>, אבל לא יודע כלום
אם לא להיט פה ול<4>היט שם, לא יודע גם לקום
שלא יהיו פה טעויות<1>, נאיבי ברמות
מתאהב בכל אחת<2> שיש לה אחלה נשיקות
אני חי על תחושות ...<3>, הגוף בפרפרים
מקבל מהן סתירות<4> ואז כותב להן שירים

*פזמון:*
תראי אהובתי<5>
כולם אוהבים אותי<2>
אז רבאק, למה אין לי אושר<3>
בצורה שלך על הפנים<4>
תראי כבר אהובתי<5>
משהו דפק אותי<2>
הפסדתי אותך אמיתי<3>
אבל הצלתי אותך מעצמי<5>
הצלתי אותך מעצמי<6>

*בית 2:*
וקצת קשה לי להודות<1>, שיש לי בעיות
לא יודע מי מקשיב<2> לי, אז הלכתי לשיחות
והיא אומרת שהטריגר<3> זה הלבד שלי בלילות
התרגלתי לחושך<4>, סיגריות וכמה סדרות
ואיפה כל הבני זו*&ת<1>, הבטיחו עולמות
בטח אם יקרה לי מ<5>שהו, ישכבו על הגדרות
וככה עם השנים ...<3>, בבית ספר של החיים
הבנתי זה רק אני<4>, הכעס שלי ואלוהים

*פזמון:*
תראי אהובתי<5>
כולם אוהבים אותי<2>
אז רבאק, למה אין לי או<3>שר
בצורה שלך על הפנים<4>
תראי כבר אהובתי<5>
משהו דפק אותי<2>
הפסדתי אותך אמיתי<3>
אבל הצלתי אותך מעצמי<4>
הצ<2>לתי אותך מעצמי<5>

*פזמון:*
תראי<2> אהובתי<5>
כולם אוהבים אותי<2>
אז רבאק, למה אין לי או<3>שר
בצורה שלך על הפנים<4>
תראי<2> כבר אהובתי<5>
משהו דפק אותי<2>
הפסדתי אותך אמיתי<3>
אבל הצלתי אותך מעצמי<4>`,
        easiestKeyShift: 0
    }, {
        title: "רסיסים",
        artist: "רביב כנר",
        year: "2022",
        composer: "קרן פלס, אבי אוחיון",
        album: "רסיסים",
        lang: "he",
        chords: ["Bm", "D", "Em", "G", "A", "F#m", "Am"],
        lyrics: `*בית 1:*
<1>... לא רואים בעיניים רק קופצים לא<2>ש
מה כבר רצינו לבקש<3>
לקב<4>ל ולת<5>ת מה שיש<1>
להחזיק בידיים כל יום שעוב<2>ר
תמיד הוא ככה ממהר<3>
אני אי<4>ש מאח<5>ר

*פזמון:*
רק בלילו<4>ת
עולים קול<5>ות
שאלות<1> אבוד<5>ות
מחפשות<3> תשובה
מה שעוד<6> לא בא

רסיסים ...<2>
למה זיכרונות נמס<5>ים
כמה שאני לא כיסי<3>תי, זה נכנ<4>ס לי בתריס<2>ים
אין על מי לשים את הרא<7>ש
גם אם לא שברתי, שילמ<3>תי
לך תמצא<6> על מי לכע<4>וס

*מעבר:*
אוו הוו ...<5> אוו הוו ...<1>
אוו הווה<6>וו הווהווהוו<4>
אוו הוו ...<5> אוו הוו ...<1>

*בית 2:*
אין אוויר בשמיים איך אפשר לנשו<2>ם
הכל תקוע במקו<3>ם
אבל עו<4>ד לא הפס<5>קתי לחלו<1>ם
אז קפצתי למים כי צריך לשחו<2>ת
במים לא רואים דמעו<3>ת
במים ישקעו חולו<4>ת שזוכר<5>ים

*פזמון:* ... [רק במקום מה שעוד לא בא - בקרוב זה בא]

*מעבר:*
אוו הוו ...<5> אוו הוו ...<1>
אוו הווה<6>וו הווהווהוו<4>
אוו הוו ...<5> אוו הוו ...<1>

אוו הוו ...<5> אוו הוו ...<1>
אוו הווה<6>וו הווהווהוו<4>

אוו הוו ...<5>

שאלו<1>ת אבודו<5>ת מחפשו<3>ת תשובה
ועכשי<6>ו זה בא

רסיסים ...<2>
למה זיכרונות נמס<5>ים
כמה שאני לא כיסי<3>תי, זה נכנ<4>ס לי בתריס<2>ים
אין על מי לשים את הרא<7>ש
גם אם לא שברתי, שילמ<3>תי
לך תמצא<6> על מי לכע<4>וס

*מעבר סיום:*
אוו הוו ...<5> אוו הוו ...<1>
אוו הווה<5>וו הווהווהוו`,
        easiestKeyShift: 0
    }, {
        title: "אצלי הכול בסדר",
        artist: "רביב כנר",
        year: "2023",
        composer: "יובל מעיין, רון ביטון, רביב כנר",
        album: "עכשיו טוב",
        lang: "he",
        chords: ["Am", "F", "C", "G", "Dm"],
        lyrics: `*בית 1:*
...<1> נתתי לך ת'עיניים<2>
אז לא יכו<3>לתי לראות שאני<4> מאבד הכול
...<1> נתתי לך ת'ידיים<2>
אז לא יכו<3>לתי לתפוס שאני<4> רגע מליפול

*פזמון:*
את כל<5> הרגעים הכי יפים זרקתי
ל<1>א זוכר כבר למה ועל מי נלחמתי
שו<3>ב פעם, שוב פעם, שוב פעם
...<4> אני רוצה לשרוף
...<5> את הלילות הלבנים בחדר
...<1> את הסודות שנשמרו בסתר
שו<3>ב פעם, שוב פעם, שוב פע<4>ם

אצלי הכול בס<1>דר
למדתי לשרו<2>ד
הבאתי לך ת'ש<3>מש
ואת רצית עו<4>ד
נו תתפסי אות<1>נו
קשה לי לעמו<2>ד
כבר אין לי מה לת<3>ת לך
עו<4>ד, עוד

*בית 2:*
...<1> הייתי על הברכי<2>ים
אבל עכשי<3>ו אני רץ
ואנ'ל<4>א מתכוון לחזור

*פזמון:* ...

*סולו גיטרה:* ...<1> ...<2> ...<3> ...<4>

*בית 3:*
...<5> וגם אחרי שנגמ<1>ר, פתאום זה תופ<4>ס אותי
...<5> אוסף את מה שנשב<1>ר למרות שכוא<4>ב לי

*פזמון:* ...

*מעבר סיום:* ...<1> ...<2> ...<3> ...<4>`,
        easiestKeyShift: 0
    }, {
        title: "love yourself",
        artist: "Justin Bieber",
        year: "2015",
        composer: "Justin Bieber, Ed Sheeran, Benny Blanco",
        album: "Purpose",
        lang: "en",
        chords: ["C", "G", "B", "Am", "Dm", "F"],
        lyrics: `For all the <1>times that you <2>/<3>rained on my parade<4>
And all the <5>clubs you get in <1>using my name<2>/<3>
You think you <1>broke my heart, oh, <2>/<3>girl for goodness'<4> sake
You think I'm <5>cryin' on my <1>own. Well, I <2>/<3>ain't

And I didn't wanna <1>write a song
'<2>/<3>Cause I didn't want <4>anyone thinking I still care. I <5>don't
But <1>you still hit my <2>/<3>phone up
And, baby, I'll be <1>movin' on
<2>/<3>And I think you <4>should be somethin' I don't wanna <5>hold back
<1>Maybe you should <2>/<3>know that

My mama don't <4>like you and <6>she likes <1>everyone
And I never <4>like to <6>admit that I was <1>wrong
And I've been so <4>caught up in <6>my job
Didn't <1>see what's going <2>on
But now I <4>know
<6>I'm better <2>sleeping on my own

'Cause if you <1>like the <2>way you <4>look that <6>much
Oh, baby, <1>you should go and <6>love <1>yourself
And if you <1>think that <2>I'm still <4>holdin' <6>on to somethin'
<1>You should go and <6>love <1>yourself

But when you told me that you hated my friends
The only problem was with you and not them
And every time you told me my opinion was wrong
And tried to make me forget where I came from

And I didn't wanna write a song
'Cause I didn't want anyone thinking I still care. I don't
But you still hit my phone up
And, baby, I'll be movin' on
And I think you should be somethin' I don't wanna hold back
Maybe you should know that

My mama don't like you and she likes everyone
And I never like to admit that I was wrong
And I've been so caught up in my job
Didn't see what's going on
But now I know
I'm better sleeping on my own

'Cause if you like the way you look that much
Oh, baby, you should go and love yourself
And if you think that I'm still holdin' on to somethin'
You should go and love yourself

For all the times that you made me feel small
I fell in love. Now I feel nothin' at all
I never felt so low and I was vulnerable
Was I a fool to let you break down my walls?

'Cause if you like the way you look that much
Oh, baby, you should go and love yourself
And if you think that I'm still holdin' on to somethin'
You should go and love yourself

'Cause if you like the way you look that much
Oh, baby, you should go and love yourself
And if you think (you think) that I'm (that I'm) still holdin' on (holdin' on) to somethin'
You should go and love yourself`,
        easiestKeyShift: 0
    }
];

let transposeAmount = 0;
let currentSong = null;

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
      <pre class="lyrics" dir="${song.lang === "en" ? "ltr" : "rtl"}">${parseLyrics(song.lyrics, song.chords)}</pre>
    `;

    container.appendChild(div);
    container.style.display = "block";
    document.getElementById("transposeControls").style.display = "flex";
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
    renderSongList(songsData);
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
