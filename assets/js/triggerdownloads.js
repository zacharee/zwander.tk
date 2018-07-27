function triggerDownloads(model) {
    $.post(
        "/addtodownloads.php",
        {
            "model" : model
        }
    ).done((data) => {
            const downloads = document.getElementById("downloads-container");
            data = JSON.parse(data);

            downloads.innerHTML = null;

            if (Object.entries(data).length === 0) {
                downloads.innerHTML += `
                    <h3 style="align-self: center;">Nothing Here</h3>
                `
            }

            Object.entries(data).forEach(([key, value]) => {
                value = value.split("/");
                const time = value[0];
                const sizeMiB = (value[1] / 1048576).toFixed(2);
                const date = new Date(time * 1000);
                const year = date.getFullYear();
                const month = twoDigits(date.getMonth() + 1);
                const day = twoDigits(date.getDate());
                const hour = twoDigits(date.getHours());
                const minute = twoDigits(date.getMinutes());
                const timezone = date.toLocaleTimeString("en-us", {timeZoneName:"short"}).split(" ")[2];
                const dateString = `${year}_${month}_${day} @ ${hour}:${minute} ${timezone}`;

                downloads.innerHTML += `
                        <a href="download.php?model=${encodeURIComponent(model)}&file_name=${encodeURIComponent(key)}" class="button download-box">
                            <div align="middle" class="downloads-div">
                                <span class="download-title">${key}</span>
                                <div align="bottom">
                                    <span class="download-file-date">${dateString}</span>
                                    <span class="download-file-size">${sizeMiB} MiB</span>   
                                </div>
                            </div>
                        </a>
                        `;

            });
        });

// <div align="right" class="downloads-div"">
//     <a href="download.php?file_name=${encodeURIComponent(key)}" class="button download-button" download>Download</a>
//     </div>
}

function twoDigits(value) {
    if (value < 10) {
        return '0' + value;
    }
    return value;
}