const btn = document.querySelector('.btn')

    btn.addEventListener('click', async()=>{
        const city = document.querySelector('.city')
        document.getElementById('myForm').style.display = 'none'
        document.querySelector('.spinner').style.display = 'block'

        let key = `065086f0498524b42a16c8414204b51b`
    
        let api = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city.value}&appid=${key}&lang=pt_br`)
        const dados = await api.json()

        document.querySelector('.spinner').style.display = 'none'
        document.getElementById('myForm').style.display = 'block'


        // reder cidade 
        document.querySelector('.resultado-city').textContent = city.value

        // render icone 
        document.querySelector('.icone').src = `https://openweathermap.org/img/wn/${dados.weather[0].icon}.png`

        // render clima 
        document.querySelector('.icon-result').textContent = dados.weather[0].description

        // render temperatura 
        document.querySelector('.temp').textContent = Math.floor(dados.main.temp) + "°C"


        // fala no javascript
        const mensagem = `O tempo em ${city.value} está ${dados.weather[0].description}`
        const fala = new SpeechSynthesisUtterance(mensagem)
        
        fala.pitch = 1
        fala.rate = 1
        fala.volume = 1
        fala.lang = "pt-br"
        
        speechSynthesis.speak(fala)
    
        console.log(dados)
    })


   




