const fileInput = document.getElementById("fileInput")
const gallery = document.getElementById("gallery")

fileInput.addEventListener('change', (e)=>{

    let files = e.target.files
    let reader = new FileReader()
    reader.onload = ()=>{

        parts = reader.result.split('\n')
        base_url = parts[3].split(' ')[3]
        images = []
        for(let i = 5; i < parts.length-3; i ++){
           parts[i].split('  ').forEach(element => {
            element = element.trim()
            if(element.includes('.png')){
                images.push(element)
            }
           })
        }

        images.forEach(img => {
            let image = document.createElement('img')
            let url = base_url + '\\' + img
            image.src = url
            gallery.appendChild(image)
        })
    }

    if(files[0]){
        reader.readAsText(files[0])
    }
    }
)