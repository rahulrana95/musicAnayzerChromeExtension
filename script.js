setInterval(detectURLChange,100);
//setInterval(detectNowPlayingNodeChange,100);
var previousURl = '';
var previousNode = '';


function songDetected(url) {
    var obj = {};
    var nowPlayingNode = document.getElementById('now-playing');
    if (nowPlayingNode !== undefined) {
        var playerTrackName = document.getElementById('player-track-name');
        obj['trackTitle']=playerTrackName.firstElementChild.innerText;
        var trackTime = document.getElementById('track-time');
        obj['trackTime']=trackTime.innerText;
        var trackSinger = document.getElementsByClassName('page-subtitle');
        obj['trackSinger']=trackSinger[0].childNodes[2].innerText;
        
        console.log(obj);
    }
}

function detectURLChange (){
    if(previousURl === ''){
        previousURl = window.location.href;
        songDetected(previousURl);
    } else if (previousURl !== window.location.href) {
        previousURl = window.location.href;
        songDetected(previousURl);
    }
    
}

function verifyURL (url) {
    if(url.indexOf('saavn') !== -1 && url.indexOf('english')!== -1){
        return true;
    }

    return false;
}

function detectNowPlayingNodeChange () {
        if (verifyURL(window.location.href)) {
            var nowPlayingNode = document.getElementById('now-playing');
            if(nowPlayingNode !== undefined) {
                if( previousNode == '' ){
                    previousNode=nowPlayingNode;
                    console.log('song changed');
                } 
                
            }
        }
}