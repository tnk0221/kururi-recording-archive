javascript
fetch("songs.json")
  .then(response => {
    if (!response.ok) {
      throw new Error("songs.json を読み込めませんでした。");
    }
    return response.json();
  })
  .then(songs => {
    const songList = document.getElementById("song-list");

    songs.forEach(song => {
      const div = document.createElement("div");

      div.className = "song";

      div.innerHTML = `
        <a href="song.html?id=${song.id}">
          ${song.trackNumber}. ${song.title}
        </a>
        <div class="status">
          ${song.status}
        </div>
      `;

      songList.appendChild(div);
    });
  })
  .catch(error => {
    console.error(error);

    document.getElementById("song-list").innerHTML =
      "<p>曲データの読み込みに失敗しました。</p>";
  });
