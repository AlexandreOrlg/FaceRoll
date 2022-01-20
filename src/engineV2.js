
var AudioContext
var audioContext
var audio

var input
var analyser

var animationFunc


var speed = 4


export const process = (canvas) => {



    AudioContext = window.AudioContext || window.webkitAudioContext || window.mozAudioContext
    audioContext = audioContext || new AudioContext()
    audio = new Audio()

    input = input || audioContext.createMediaElementSource(audio)
    analyser = audioContext.createAnalyser()




    input.connect(analyser)
    input.connect(audioContext.destination)

    let ctx = canvas.getContext("2d")
    let imageData = ctx.getImageData(0, 0, canvas.width, canvas.height)
    const { width, height } = imageData

    let durationSeconds = 5
    let tmpData = []
    let maxFreq = 0
    let data = []
    let sampleRate = 44100
    let channels = 1
    let numSamples = Math.round(sampleRate * durationSeconds)
    let samplesPerPixel = Math.floor(numSamples / width)
    let maxSpecFreq = 20000 // Hz
    let C = maxSpecFreq / height
    let yFactor = 3 // y-axis resolution

    for (let x = 0; x < numSamples; x++) {
        let rez = 0
        let pixel_x = Math.floor(x / samplesPerPixel)

        for (let y = 0; y < height; y += yFactor) {
            let pixel_index = (y * width + pixel_x) * 4
            let r = imageData.data[pixel_index]
            let g = imageData.data[pixel_index + 1]
            let b = imageData.data[pixel_index + 2]

            let s = r + b + g
            let volume = Math.pow(s * 100 / 765, 2)

            let freq = Math.round(C * (height - y + 1))
            rez += Math.floor(volume * Math.cos(freq * 6.28 * x / sampleRate))
        }

        tmpData.push(rez)

        if (Math.abs(rez) > maxFreq) {
            maxFreq = Math.abs(rez)
        }
    }

    for (let i = 0; i < tmpData.length; i++) {
        data.push(32767 * tmpData[i] / maxFreq); //32767
    }


    let wave = new RIFFWAVE()
    wave.header.sampleRate = sampleRate
    wave.header.numChannels = channels
    wave.header.bitsPerSample = 16
    wave.Make(data)

    return wave
    /*
        audio.src = wave.dataURI
        audio.controls = true
        audio.playbackRate = 3
        audio.onpause = () => {
            // window.cancelAnimationFrame(animationFunc)
        }
        audio.addEventListener('ended', () => {
            // window.cancelAnimationFrame(animationFunc)
        }
        )
    
        audio.id = "audioPlayer"
        document.body.appendChild(audio)
    
        analyser = audioContext.createAnalyser()
        analyser.smoothingTimeConstant = 0.3
        analyser.fftSize = 1024 //fftsize
    
        input.connect(analyser)
        input.connect(audioContext.destination)
    
    
    
    
        let tempCanvas = document.createElement("canvas")
        let tempCanvas2 = document.createElement("canvas")
    
        tempCanvas.width = width
        tempCanvas.height = height
        tempCanvas2.width = width
        tempCanvas2.height = height
        let tempCtx = tempCanvas.getContext('2d')
        let ctx2 = tempCanvas2.getContext('2d')
    
        audio.onplay = () => {
            requestAnimationFrame(render.bind(this))
        }
    
    
    
        tempCanvas.id = "tempscancs"
        document.body.appendChild(tempCanvas)
        document.body.appendChild(tempCanvas2)
    */

}

export const generateImage = (wave, canvas, tempCanvas) => {

    const { width, height } = canvas

    audio.src = wave.dataURI
    audio.controls = true
    audio.playbackRate = 1.2

    audio.addEventListener('ended', () => {
        window.cancelAnimationFrame(animationFunc)
    }
    )

    analyser = audioContext.createAnalyser()
    analyser.smoothingTimeConstant = 0.3
    analyser.fftSize = 1024 //fftsize

    input.connect(analyser)
    input.connect(audioContext.destination)

    let tempCanvas2 = document.createElement("canvas")

    tempCanvas.width = width
    tempCanvas.height = height
    tempCanvas2.width = width
    tempCanvas2.height = height
    let tempCtx = tempCanvas.getContext('2d')
    let ctx2 = tempCanvas2.getContext('2d')


    const render = () => {
        let freq = new Uint8Array(analyser.frequencyBinCount)

        analyser.getByteFrequencyData(freq)
        tempCtx.drawImage(tempCanvas2, 0, 0, width, height)

        for (let i = 0; i < freq.length; i++) {
            let value = freq[i]

            ctx2.fillStyle = `rgb(${value}, ${value}, ${value})`

            let percent = i / freq.length
            let y = Math.round(percent * height)

            ctx2.fillRect(width - speed, height - y, speed, speed)
        }
        ctx2.translate(-speed, 0)
        ctx2.drawImage(tempCanvas, 0, 0, width, height,
            0, 0, width, height)

        ctx2.setTransform(1, 0, 0, 1, 0, 0)

        animationFunc = requestAnimationFrame(render.bind(this))
    }

    audio.onplay = () => {
        animationFunc = requestAnimationFrame(render.bind(this))
    }
    audio.style = 'max-width: 100%;'

    tempCanvas.insertAdjacentElement('afterend', audio)

    audio.play()

}



