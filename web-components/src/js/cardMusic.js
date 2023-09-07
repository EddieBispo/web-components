class cardMusic extends HTMLElement {
    constructor() {
        super()

        const shadow = this.attachShadow({mode: 'open'})
        shadow.appendChild(this.build())
        shadow.appendChild(this.styles())
    }

    build() {
        //Declarando a div Card
        const componentRoot = document.createElement("div")
        componentRoot.setAttribute("class", "card")

        //Declarando a div (btnPlay)
        const btnPlay = document.createElement("div")
        btnPlay.setAttribute("class", "btnPlay")
        //Declarando a tag <img> (play)
        const play = document.createElement("img")
        play.setAttribute("class", "play")
        play.src = "imagens/botao-play.png"

        //Declarando a div referente a imagem da múscia
        const musicImg = document.createElement("img")
        musicImg.setAttribute("class", "musicImg")
        musicImg.src = this.getAttribute("srcImage")

        //Declarando a div referente ao título da música
        const musicName = document.createElement("div")
        musicName.setAttribute("class", "musicName")
        //Declarando a tag <h1> (titleMusic)
        const titleMusic = document.createElement("h1")
        titleMusic.textContent = (this.getAttribute("musicName")) || "#MUSIC"

        //Declarando a div referente ao nome do artista
        const artistName = document.createElement("div")
        artistName.setAttribute("class", "artistName")
        artistName.textContent = (this.getAttribute("artistName")) || "By anonymous"
        //Declarando a tag <p> (byArtist)
        const byArtist = document.createElement("p")

        //Pendurando as div filhas (musicImg, musicName, artistName) a sua div pai (Card)
        componentRoot.appendChild(btnPlay)
        componentRoot.appendChild(musicImg)
        componentRoot.appendChild(musicName)
        componentRoot.appendChild(artistName)

        //Pendurando a tag <img> na div btnPlay
        btnPlay.appendChild(play)

        //Pendurando a div filha na div musicName
        musicName.appendChild(titleMusic)

        ////Pendurando a div filha na div artistName
        artistName.appendChild(byArtist)

        return componentRoot
    }

    styles() {
        const style = document.createElement("style")
        style.textContent = `
            .card {
            /*Display stuff*/
                display: flex;
                flex-direction: column;
            /*Positioning stuff*/
                position: relative;
            /*Box model stuff*/
                height: 310px;
                padding: 20px;
                border-radius: 10px;
                background-color: #262626;
            /*Typography stuff*/
                font-family: 'Lato', sans-serif;
            /*Manipulations stuff*/
                transition: 0.3s;
            /*Miscellaneous*/
                gap: 10px;
            }
            
            .btnPlay {
            /*Display stuff*/
                display: flex;
                align-items: center;
                justify-content: center;
            /*Positioning stuff*/
                position: absolute;
                right: 35px;
                bottom: 120px;
            /*Box model stuff*/
                width: 60px;
                height: 60px;
                border-radius: 50px;
                background-color: rgba(0, 128, 0, 0);
            /*Manipulations stuff*/
                transition: 0.2s;
            }
            
            .play {
            /*Manipulations stuff*/
                filter: opacity(0);
                transition: 0.2s;
            }
            
            .btnPlay:hover {
                transform: scale(1.1);
            }
            
            .card:hover {
                filter: brightness(1.5);
            }
            
            .card:hover > .btnPlay {
            /*Display stuff*/
                display: flex;
                align-items: center;
                justify-content: center;
            /*Positioning stuff*/
                bottom: 145px;
            /*Box model stuff*/
                background-color: green;
            /*Miscellaneous*/
                box-shadow: 0 3px 10px #000000;
            }
            
            
            .card:hover > .btnPlay > .play {
                filter: opacity(10);
            }
            
            .musicImg {
            /*Box model stuff*/
                width: 200px;
                height: 200px;
                border-radius: 10px;
            }
            
            .musicName {
            /*Typography stuff*/
                font-size: 14px;
                color: #FFF;
            }
            
            .artistName {
            /*Box model stuff*/
                width: 200px;
            /*Typography stuff*/
                font-size: 14px;
                font-weight: 400;
                color: #ffffffb6;
            }
        `
        return style
    }
} 

customElements.define('card-music', cardMusic)