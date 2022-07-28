/**
* @name QWE
* @description sex
* @version 0.3.1
* @author zaa
* @updateUrl https://raw.githubusercontent.com/proturkknk/tavusmod/main/tavusmod.plugin.js
*/

module.exports = class naber{

    getName () {
		return "QWE";
	}

	getVersion () {
		return "0.3.2";
	}

	getAuthor () {
		return "zaa";
	}

	getDescription () {
		return "sex";
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

        let tavus = document.createElement("img")
        tavus.src = "https://cdn.discordapp.com/attachments/994578040396992583/1002317590582005760/unknown.png"
        tavus.style.height = "300px"
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
            tavusmode.innerText = BdApi.getData(this.getName(), "tavus") == "on" ? "Tavus Moddan Çık": "Tavus Moda Gir"
            tavusmode.style.backgroundColor = BdApi.getData(this.getName(), "tavus") == "on" ? "#F04747" : "#3E82E5"
            inf.innerText = BdApi.getData(this.getName(), "tavus") == "on" ? "Tavus Mod Aktif" : "Tavus Mod Devre Dışı"
        }

        settings.appendChild(tavusmode)

        return settings
    }

    start(){
        
    }

    stop(){
        BdApi.alert("Kapatıyon demek ha", "Sg noob")
    }
}
