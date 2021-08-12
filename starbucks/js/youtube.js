let tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";

let firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

function onYouTubeIframeAPIReady(){ 
  new YT.Player('player', {
    videoId : 'An6LvWQuj_8',
    playerVars : {
      autoplay : true,
      loop : true,
      playlist : 'An6LvWQuj_8'
    },
    events : {
      onReady : (event)=> {
        event.target.mute();
      }
    }
  });
}