AudioLibrary = function(){
    this.MAX_CANAIS = 10;
    this.audios = {};
    this.canais = [];
    this.loaded = 0;
    this.size = 0;
  
    for (var i = 0; i < this.MAX_CANAIS; i++) {
      this.canais[i] = {
        audio: new Audio(),
        fim: -1
      }
    }
  };
  
  AudioLibrary.prototype.load = function (key, url) {
    this.audios[key] = new Audio();
    this.audios[key].src = url;
    this.size++;
    that = this;
    this.audios[key].addEventListener('canplaythrough', function(){
      that.loaded++;
      console.log(key, "terminou de carregar:", that.loaded,that.size);
    })
    this.audios[key].load();
  };
  
  AudioLibrary.prototype.play = function (key, volume) {
    var agora = new Date();
    for (var i = 0; i < this.canais.length; i++) {
      var canal = this.canais[i];
      if(canal.fim < agora.getTime()){
        canal.audio.src = this.audios[key].src;
        canal.fim = agora.getTime()+this.audios[key].duration*1000
        canal.audio.volume = volume;
        canal.audio.play();
        console.log(agora.getTime(), this.audios[key].duration,canal.fim)
        break;
      }
    }
  };