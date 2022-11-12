/**
* @name tavusmod
* @description Tavus Modu 😎
* @version 0.0.4
* @author Emsar69
* @authorId 1018096765225938985
* @updateUrl https://raw.githubusercontent.com/proturkknk/tavusmod/main/tavusmod.plugin.js
*/

module.exports = class naber{

    constructor(){
    }

    getName () {
		return "TavusModu";
	}

	getVersion () {
		return "0.0.4";
	}

	getAuthor () {
		return "Emsar69";
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
        settings.appendChild(document.createElement("br"))

        let emsaj = document.createElement("button")
        emsaj.innerText = BdApi.getData(this.getName(), "emsaj") == "on" ? "Emsajın Mesajlarını Öne Çıkarma": "Emsajın Mesajlarını Öne Çıkar"
        emsaj.style.backgroundColor = BdApi.getData(this.getName(), "emsaj") == "on" ? "#F04747" : "#3E82E5"
        emsaj.style.color = "white"
        emsaj.style.fontFamily = "Sans-serif"
        emsaj.style.height = "48px"
        emsaj.style.width = "130px"
        emsaj.style.borderRadius = "5px"

        emsaj.onclick = () => {
            if(BdApi.getData(this.getName(), "emsaj") == "on"){
                BdApi.setData(this.getName(), "emsaj", "off")
                BdApi.showToast("Emsajın mesajları artık öne çıkarılmayacak", {type: "success"})
            }else{
                BdApi.setData(this.getName(), "emsaj", "on")
                BdApi.showToast("Emsajın mesajları artık öne çıkarılıyor", {type: "success"})
            }
            emsaj.innerText = BdApi.getData(this.getName(), "emsaj") == "on" ? "Emsajın Mesajlarını Öne Çıkarma": "Emsajın Mesajlarını Öne Çıkar"
            emsaj.style.backgroundColor = BdApi.getData(this.getName(), "emsaj") == "on" ? "#F04747" : "#3E82E5"
        }

        settings.appendChild(emsaj)

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
                if(this.lastid == "1018096765225938985" && BdApi.getData(this.getName(), "emsaj") == "on"){
                    element.firstChild.querySelector(".contents-2MsGLg").lastChild.style.color = "cyan"
                    element.firstChild.querySelector(".contents-2MsGLg").lastChild.style.background = 'url("https://cdn.discordapp.com/attachments/994578040396992583/1040977857599524935/image.png")'
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
    whatnew = "Yenilikler: Güncelleme fixlendi. Oto oynatma kapatıldı. Emsajın mesajları sex 🥵"

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
