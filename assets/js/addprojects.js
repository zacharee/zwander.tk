function addAllProjects() {
    Project.init();

    const boredsigns = new Project("BoredSigns",
        "BoredSigns adds more functionality to the second screen of LG devices with secondary displays (LG V10, LG V20, etc).",
        "https://lh3.googleusercontent.com/GWj8LjhLCuyRG5_izOBDLlCtHREX1lTwXMPQp93bB4B6TrUy7vD9MhJhzjFHdcpWjtyH");

    boredsigns.addSite(Project.psBase() + "com.zacharee1.boredsigns", Project.playIcon());
    boredsigns.addSite("https://forum.xda-developers.com/v20/themes/discussion-boredsigns-custom-signboard-t3735600", Project.xdaIcon());
    boredsigns.addSite("https://github.com/zacharee/BoredSigns", Project.ghIcon());

    const sswidgets = new Project("Custom SignBoard Widgets",
        "The predecessor of BoredSigns. Now discontinued.",
        "https://lh3.googleusercontent.com/WGvpFJGi5KNfIqhEnl-uB3_ZgzZ8Z9JiGYwdLr25yX1CZIwtUOi_l12T6TrCbt5R3tg");
    sswidgets.addSite("https://forum.xda-developers.com/v20/themes/app-custom-screen-widgets-stock-soon-t3656497", Project.xdaIcon());

    Project.newInstance("DPI Changer",
        "This app allowed users to change their device resolution, DPI and overscan, without using root. It has been discontinued for now.",
        "https://lh3.googleusercontent.com/NlpH-uGzsE89KhzlG8ONZGsrQJUoPKNICKogjplz-VbtrVOLjoYfga3g2UsNLCvvWUhj");

    const ohm = new Project("One-Handed Mode",
        "Uses the same framework as DPI Changer to bring One-Handed Mode to most Android devices",
        "https://lh3.googleusercontent.com/GXN81Lp3G2Quiv4prAjcxfO56DTCIJq6uj-UO5J-wzkDEKpLIpfvSrKi8xRtKO_BGVFd");
    ohm.addSite(Project.psBase() + "com.xda.onehandedmode", Project.playIcon());
    ohm.addSite("https://forum.xda-developers.com/android/apps-games/official-xda-one-handed-mode-phone-one-t3695602", Project.xdaIcon());
    ohm.addSite("https://labs.xda-developers.com/store/app/com.xda.onehandedmode", Project.xdaIcon());

    const mods = new Project("Misc Mods",
        "A collection of mods for Stock LGUX 7.0 on the LG V20. Now discontinued",
        "https://labs-public-dl.xda-cdn.com/images/23d02d20-6c85-47d5-9605-07262e71efb3.png");
    mods.addSite("https://github.com/zacharee/ModControlRedesign", Project.ghIcon());
    mods.addSite("https://forum.xda-developers.com/v20/themes/mod-aosp-signal-bars-t3551350", Project.xdaIcon());
    mods.addSite("https://labs.xda-developers.com/store/app/com.zacharee1.modcontrolredesign", Project.xdaIcon());

    const nachonotch = new Project("Nacho Notch",
        "Simple notch hider which displays a black overlay behind the status bar in portrait mode.",
        "https://lh3.googleusercontent.com/oGV9L4_d53lhqFn49jDVC4d9kO1LB-A7B6xy_xTdiY1Ohr8Nh4KBaBUNC-ilSHCbfTw");
    nachonotch.addSite("https://github.com/zacharee/NachoNotch", Project.ghIcon());
    nachonotch.addSite(Project.psBase() + "com.xda.nachonotch", Project.playIcon());

    const nobar = new Project("Navigation Gestures",
        "\"Inspired\" by the iPhone X's and OnePlus 6's gesture navigation systems. Adds gesture navigation to most Android devices without root.",
        "https://lh3.googleusercontent.com/99Jlb9F0WLOpM0QSeeV5oyiUv1EwAKBoznOPQ5kibUaudn_kzH6BpsFj8yD1TVM4iZE");
    nobar.addSite(Project.psBase() + "com.xda.nobar", Project.playIcon());
    nobar.addSite("https://forum.xda-developers.com/android/apps-games/official-xda-navigation-gestures-iphone-t3792361", Project.xdaIcon());

    const saturation = new Project("Sa2ration",
        "Simple app to change the color profile on Pixel devices running 8.1 and later.",
        "https://lh3.googleusercontent.com/eoQqcWiNjCCFLZEHcYbuA_oHle1ARVnCm5abD1BLNbeZxJqpEN6eqkkOD7RZL8NhG0qX");
    saturation.addSite("https://github.com/zacharee/Sa2ration", Project.ghIcon());
    saturation.addSite(Project.psBase() + "com.xda.sa2ration", Project.playIcon());
    saturation.addSite("https://labs.xda-developers.com/store/app/com.xda.sa2ration", Project.xdaIcon());

    const systuner = new Project("SystemUI Tuner",
        "A replica of/addition to Android's native System UI Tuner made for non-rooted devices with the native version disabled or removed.",
        "https://lh3.googleusercontent.com/mtJRdnZ5wmrHoHaVLTF_euF1cdO6HmlfRafjmyF8dW68IEzh_z68kdGdBAbSecFfZvI");
    systuner.addSite(Project.psBase() + "com.zacharee1.systemuituner", Project.playIcon());
    systuner.addSite("https://plus.google.com/communities/113741695211107417994/", Project.gplusIcon());
    systuner.addSite("https://forum.xda-developers.com/android/apps-games/app-systemui-tuner-t3588675", Project.xdaIcon());
}

class Project {
    static psBase() {
        return "https://play.google.com/store/apps/details?id=";
    }

    static xdaIcon() {
        return "https://labs.xda-developers.com/static/images/ic_web.png";
    }

    static playIcon() {
        return ".fa-google-play"
    }

    static ghIcon() {
        return ".fa-github"
    }

    static gplusIcon() {
        return ".fa-google-plus"
    }

    static isClass(str) {
        return str !== null && str.startsWith(".");
    }

    static underScore(str) {
        return str.replace(new RegExp(" ", 'g'), "_");
    }

    static newInstance(name, summary, iconUrl) {
        return new Project(name, summary, iconUrl);
    }

    static init() {
        document.getElementById('projects-container').innerHTML = null;
    }

    constructor(name, summary, iconUrl) {
        this.name = name;
        this.summary = summary;
        this.baseHtml = `
            <hr>
            <div class="project-box">
                <div align="left" class="downloads-div">
                    <div id="text-container_${Project.underScore(name)}" class="icon-name-div">
                        <img src="${iconUrl}" id="icon_${Project.underScore(name)}" class="icon project-icon" />
                        <h2 align="left" class="bottom" id="title_${Project.underScore(name)}">${name}</h2>
                    </div>
                    <p align="left" class="top" id="summary_${Project.underScore(name)}">${summary}</p>
                </div>
                <div align="right" class="buttons-div">
                    <ul id="icons_${Project.underScore(name)}" class="icons"></ul>
                </div>
            </div>
        `;

        this.addToBlock();
    }

    addSite(url, favicon = null) {
        const isClass = Project.isClass(favicon);
        const faviconLink = isClass ? null : (favicon !== null ? favicon : `//${url.split("/")[2]}/favicon.ico`);

        if (isClass) favicon = favicon.substr(1);

        const img = `<img class="project-link-img fab" src="${faviconLink}" />`;
        const d = `<i class="project-link-font fab ${favicon}"></i>`;

        document.getElementById('icons_' + Project.underScore(this.name)).innerHTML +=
            `<li><a href="${url}" target="_blank" style="text-align: center; vertical-align: middle;">${isClass ? d : img}</a></li>`;
    }

    addToBlock() {
        document.getElementById('projects-container').innerHTML += this.baseHtml;
    }
}