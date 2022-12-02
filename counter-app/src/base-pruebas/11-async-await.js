require("isomorphic-fetch")
export const getImagen = async() => {

    try{
        const apiKey = "PdWdShcgjRLSs1pbljr1eWOZ5qALDoXE"
        const resp = await fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
        const {data} = await resp.json()//api desestructurada solo objeto data
        const {url} = data.images.original//data desestructurada solo url del objeto
        return url
      }catch(error){
        return error
      }
    
    
    
}

 getImagen();



