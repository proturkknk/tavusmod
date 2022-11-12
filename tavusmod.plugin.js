/**
* @name tavusmod
* @description Tavus Modu 😎
* @version 0.0.2
* @author xEnsar69
* @authorId 522834911732695041
* @updateUrl https://raw.githubusercontent.com/proturkknk/tavusmod/main/tavusmod.plugin.js
*/

module.exports = class naber{

    constructor(){
    }

    getName () {
		return "TavusModu";
	}

	getVersion () {
		return "0.0.2";
	}

	getAuthor () {
		return "xEnsar69";
	}

	getDescription () {
		return "Tavus Modu 😎";
	}

    getSettingsPanel(){
        let settings = document.createElement("div")
        let bruh = document.createElement("img")
        bruh.src = "https://cdn.discordapp.com/attachments/994578040396992583/1002309462574506106/unknown.png"
        settings.appendChild(bruh)

        settings.appendChild(document.createElement("br"))

        let za = document.createElement("span")
        za.innerText = "OHA BALDİBEK 😰😱"
        za.style.color = "white"
        za.style.fontSize = "30px"
        za.style.fontFamily = "cursive"
        settings.appendChild(za)

        let tavus = document.createElement("video")
        tavus.src = "https://cdn.discordapp.com/attachments/994578040396992583/1002598764424462477/ssstik.io_1659108393191.mp4"
        tavus.style.height = "300px"
        tavus.loop = true
        tavus.autoplay = BdApi.getData(this.getName(), "tavus") == "on"
        tavus.style.width = "500px"
        settings.appendChild(tavus)

        settings.appendChild(document.createElement("br"))

        let inf = document.createElement("span")
        inf.innerText = BdApi.getData(this.getName(), "tavus") == "on" ? "Tavus Mod Aktif" : "Tavus Mod Devre Dışı"
        inf.style.color = "white"
        inf.style.fontFamily = "cursive"
        inf.style.fontSize = "50px"
        settings.appendChild(inf)

        settings.appendChild(document.createElement("br"))

        let tavusmode = document.createElement("button")
        tavusmode.innerText = BdApi.getData(this.getName(), "tavus") == "on" ? "Tavus Moddan Çık": "Tavus Moda Gir"
        tavusmode.style.backgroundColor = BdApi.getData(this.getName(), "tavus") == "on" ? "#F04747" : "#3E82E5"
        tavusmode.style.color = "white"
        tavusmode.style.fontFamily = "Sans-serif"
        tavusmode.style.height = "48px"
        tavusmode.style.width = "130px"
        tavusmode.style.borderRadius = "5px"

        tavusmode.onclick = () => {
            if(BdApi.getData(this.getName(), "tavus") == "on"){
                BdApi.setData(this.getName(), "tavus", "off")
                BdApi.showToast("Tavus Mod Kapatıldı", {type: "success"})
            }else{
                BdApi.setData(this.getName(), "tavus", "on")
                BdApi.showToast("Tavus Mod Açıldı", {type: "success"})
            }
            BdApi.getData(this.getName(), "tavus") == "on" ? tavus.play() : tavus.pause()
            tavusmode.innerText = BdApi.getData(this.getName(), "tavus") == "on" ? "Tavus Moddan Çık": "Tavus Moda Gir"
            tavusmode.style.backgroundColor = BdApi.getData(this.getName(), "tavus") == "on" ? "#F04747" : "#3E82E5"
            inf.innerText = BdApi.getData(this.getName(), "tavus") == "on" ? "Tavus Mod Aktif" : "Tavus Mod Devre Dışı"
        }

        settings.appendChild(tavusmode)

        return settings
    }
    lastid = ""
    conv(){
        if(!document.getElementsByClassName("scrollerInner-2PPAp2")[0]) return
        let list = document.getElementsByClassName("scrollerInner-2PPAp2")[0].children
        for(var i = 0; i < list.length; i++){
            var element = list[i]
            if(element.tagName == "LI"){
                element.firstChild.querySelector(".contents-2MsGLg").lastChild.style.fontFamily = "cursive"
                if(element.firstChild.querySelector(".contents-2MsGLg").firstChild.src){
                    this.lastid = element.firstChild.querySelector(".contents-2MsGLg").firstChild.src.split("/")[4]
                }
                if(this.lastid == "696365117063036986"){
                    element.firstChild.querySelector(".contents-2MsGLg").lastChild.textContent = "Ben geyim"
                }
            }
        }
    }

    tavusvid(){
        var videos = document.getElementsByClassName("video-2HW4jD")
        if(!videos) return
        for(var i = 0; i < videos.length; i++){
            videos[i].loop = true
            if(videos[i].src != "https://cdn.discordapp.com/attachments/668760175213150208/1002504921410707506/-tavus---_1.mp4"){
                videos[i].src = "https://cdn.discordapp.com/attachments/668760175213150208/1002504921410707506/-tavus---_1.mp4"
            }
        }
    }

    onSwitch(){
        if(document.getElementsByClassName("scrollerInner-2PPAp2")[0]){
            const observer = new MutationObserver(this.conv)
            observer.observe(document.getElementsByClassName("scrollerInner-2PPAp2")[0], {attributes: true, subtree: true, childList: true});
            this.conv()
        }
        if(document.getElementsByClassName("video-2HW4jD")){
            setInterval(() => {
                if(BdApi.getData("TavusModu", "tavus") == "on"){
                    this.tavusvid()
                }
            },100)
        }
    }

    load(){
        if(document.getElementsByClassName("scrollerInner-2PPAp2")[0]){
            const observer = new MutationObserver(this.conv)
            observer.observe(document.getElementsByClassName("scrollerInner-2PPAp2")[0], {attributes: true, subtree: true, childList: true});
            this.conv()
        }
    }

    checkForUpdates(){
        require("https").get("https://raw.githubusercontent.com/proturkknk/tavusmod/main/tavusmod.plugin.js", res => {
            var data = []
            res.on("data", chunk => {
                data.push(chunk)
            })
            res.on("end", () => {
                data = Buffer.concat(data)
                const fs = require("fs")
                fs.readFile(__filename, "utf-8", (err, f) => {
                    if(err) return BdApi.alert("error", err)
                    if(data != f){
                        fs.writeFile(__filename, data, (e) => {})
                    }
                })
            })
        })
    }
    whatnew = "Yenilikler: Öyle işte blm"

    start(){
        if(BdApi.getData("TavusModu", "new") != this.whatnew){
            BdApi.alert("Güncelleme Notu", this.whatnew)
            BdApi.setData("TavusModu", "new", this.whatnew)
        }
        this.checkForUpdates()
        if(document.getElementsByClassName("scrollerInner-2PPAp2")[0]){
            const observer = new MutationObserver(this.conv)
            observer.observe(document.getElementsByClassName("scrollerInner-2PPAp2")[0], {attributes: true, subtree: true, childList: true});
            this.conv()
        }
    }

    stop(){
        BdApi.alert("OHA", "NE CÜRRETLE TAVUS PLUGININI KAPATIRSIN 😡")
    }
}
