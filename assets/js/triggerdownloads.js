function triggerDownloads() {
    $.post(
        "/addtodownloads.php"
    ).done((data) => {
            const downloads = document.getElementById("downloads-container");
            data = JSON.parse(data);

            downloads.innerHTML = null;

            Object.entries(data).forEach(([key, value]) => {
                const date = new Date(value * 1000);
                const year = date.getFullYear();
                const month = twoDigits(date.getMonth() + 1);
                const day = twoDigits(date.getDate());
                const hour = twoDigits(date.getHours());
                const minute = twoDigits(date.getMinutes());
                const timezone = date.toLocaleTimeString("en-us", {timeZoneName:"short"}).split(" ")[2];
                const dateString = `${year}_${month}_${day} @ ${hour}:${minute} ${timezone}`;

                downloads.innerHTML += `
                        <div class="download-box">
                            <div align="left" class="downloads-div">
                                <t class="download-title">${key}</t>
                                <t class="download-file-date">${dateString}</t>
                            </div>
                            <div align="right" class="downloads-div download-button"">
                                <a href="download.php?file_name=${encodeURIComponent(key)}" class="button" download>Download</a>
                            </div>
                        </div>
                        `;

            });
        });
}

function twoDigits(value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}