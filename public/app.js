new Vue({
    el:'#noticias',
    data: { info:[] },
    mounted(){
        axios.get('https://api.dailymotion.com/videos?channel=news&limit=4&search=pets        ')
        .then(respuesta=>this.info=respuesta.data.list)
    }
  })