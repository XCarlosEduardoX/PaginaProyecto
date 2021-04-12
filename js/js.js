let click = 0;

let audio = new Audio;
let number_song = 0;
function playMusicAvici() {

    let name_song_Avici;
    number_song = number_song + 1;
    console.log(number_song);
    if (number_song == 11) {
        return number_song = 1
    }
    var image = document.getElementById('album-avici');
    image.src = "./img/icons/boton-de-pausa.png";
    if (number_song == 1 || number_song == 2) {
        name_song_Avici = "Friend Of Mine"
    } else if (number_song == 3 || number_song == 4) {
        name_song_Avici = "Lonely Together"
    } else if (number_song == 5 || number_song == 6) {
        name_song_Avici = "You Be Love"
    } else if (number_song == 7 || number_song == 8) {
        name_song_Avici = "Without You"
    } else if (number_song == 9 || number_song == 10) {
        name_song_Avici = "What Would I Change It You"
    } else if (number_song == 11 || number_song == 12) {
        name_song_Avici = "So Much Better (Remix)"
    }
    audio.src = "./music/avici/" + name_song_Avici + ".mp3"
    document.getElementById('nameSongAvici').innerHTML = name_song_Avici;
    click = click + 1;
    if (click == 1) {
        audio.play();
    } else {
        audio.pause();
        click = 0;
        image.src = "./img/icons/boton-de-play.png";
        return (click);
    }


}


function playMusicAviciiByAvicii() {
    click = click + 1;
    let name_song_AviciiByAvicii;
    number_song = number_song + 1
    if (number_song == 18) {
        return number_song = 0;
    }
    if (number_song == 1 || number_song == 2) {
        name_song_AviciiByAvicii = "Wake Me Up (Avicii By Avicii)"
    } else if (number_song == 3 || number_song == 4) {
        name_song_AviciiByAvicii = "You Make Me (Avicii By Avicii)"
    } else if (number_song == 5 || number_song == 6) {
        name_song_AviciiByAvicii = "Hey Brother (Avicii By Avicii)"
    } else if (number_song == 7 || number_song == 8) {
        name_song_AviciiByAvicii = "Addicted To You (Avicii By Avicii)"
    } else if (number_song == 9 || number_song == 10) {
        name_song_AviciiByAvicii = "Dear Boy (Avicii By Avicii)"
    } else if (number_song = 11 || number_song == 12) {
        name_song_AviciiByAvicii = "Liar Liar (Avicii By Avicii)"
    } else if (number_song = 13 || number_song == 14) {
        name_song_AviciiByAvicii = "Shame On Me (Avicii By Avicii)"
    } else if (number_song = 15 || number_song == 16) {
        name_song_AviciiByAvicii = "Lay Me Down (Avicii By Avicii)"
    } else if (number_song = 17 || number_song == 18) {
        name_song_AviciiByAvicii = "Hope There's Someone (Avicii By Avicii)"
    }
    var image = document.getElementById('album-AviciiByAvicii');
    image.src = "./img/icons/boton-de-pausa.png";
    audio.src = "./music/AviciiByAvicii/" + name_song_AviciiByAvicii + ".mp3";
    document.getElementById('nameSongAviciiByAvicii').innerHTML = name_song_AviciiByAvicii;
    if (click == 1) {
        audio.play();
    } else {
        audio.pause();
        click = 0;
        image.src = "./img/icons/boton-de-play.png";
        click = 0;
        return click;
    }

}

function playMusicTheDaysNights() {
    click = click + 1
    let name_song_TheDaysNights;
    number_song = number_song + 1
    if (number_song == 4) {
        return number_song = 0;
    }
    if (number_song == 1 || number_song == 2) {
        name_song_TheDaysNights = "The Days";
    } else {
        name_song_TheDaysNights = "The Nights";
    }
    var image = document.getElementById('album-TheDaysNights');
    image.src = "./img/icons/boton-de-pausa.png";
    audio.src = "./music/TheDaysNights/" + name_song_TheDaysNights + ".mp3"
    document.getElementById('nameSongTheDaysNights').innerHTML = name_song_TheDaysNights
    if (click == 1) {
        audio.play();
    } else {
        audio.pause();
        click = 0;
        image.src = "./img/icons/boton-de-play.png";
        click = 0;
        return click;
    }

}

function playMusicStories() {
    click = click + 1;
    let name_song_stories;
    number_song = number_song + 1
    if (number_song == 28) {
        return number_song = 0;
    }
    if (number_song == 1 || number_song == 2) {
        name_song_stories = "Waiting For Love"
    } else if (number_song == 3 || number_song == 4) {
        name_song_stories = "Talk To My Self"
    } else if (number_song == 5 || number_song == 6) {
        name_song_stories = "Touch Me"
    } else if (number_song == 7 || number_song == 8) {
        name_song_stories = "Ten More Days"
    } else if (number_song == 9 || number_song == 10) {
        name_song_stories = "For A Better Day"
    } else if (number_song == 11 || number_song == 12) {
        name_song_stories = "Broken Arrows"
    } else if (number_song == 13 || number_song == 14) {
        name_song_stories = "True Believer"
    } else if (number_song == 15 || number_song == 16) {
        name_song_stories = "City Lights"
    } else if (number_song == 17 || number_song == 18) {
        name_song_stories = "Pure Grinding"
    } else if (number_song == 19 || number_song == 20) {
        name_song_stories = "Sunset Jesus"
    } else if (number_song == 21 || number_song == 22) {
        name_song_stories = "Can't Catch Me"
    } else if (number_song == 23 || number_song == 24) {
        name_song_stories = "Somewhere in Stockholm"
    } else if (number_song == 25 || number_song == 26) {
        name_song_stories = "Trouble"
    } else if (number_song == 27 || number_song == 28) {
        name_song_stories = "Gonna Love Ya"
    }
    var image = document.getElementById('album-Stories');
    image.src = "./img/icons/boton-de-pausa.png";
    audio.src = "./music/stories/" + name_song_stories + ".mp3"
    document.getElementById('nameSongStories').innerHTML = name_song_stories

    if (click == 1) {
        audio.play();
    } else {
        audio.pause();
        click = 0;
        image.src = "./img/icons/boton-de-play.png";
        click = 0;
        return click;
    }
}

function playMusicTim() {
    click = click + 1;
    let name_song_tim;
    number_song = number_song + 1
    if (number_song == 24) {
        return number_song = 0;
    }
    if (number_song == 1||number_song == 2) {
        name_song_tim = "Peace Of Mind"
    } else if (number_song ==3 ||number_song == 4) {
        name_song_tim = "Heaven"
    } else if (number_song == 5||number_song == 6) {
        name_song_tim = "SOS"
    } else if (number_song == 7||number_song == 8) {
        name_song_tim = "Tough Love"
    } else if (number_song == 9||number_song == 10) {
        name_song_tim = "Bad Reputation"
    } else if (number_song ==11 ||number_song == 12) {
        name_song_tim = "Ain't A Thing"
    } else if (number_song ==13||number_song == 14) {
        name_song_tim = "Hold The Line"
    } else if (number_song == 15||number_song == 16) {
        name_song_tim = "Freak"
    } else if (number_song ==17||number_song == 18) {
        name_song_tim = "Excuse Me Mr Sir"
    } else if (number_song ==19||number_song == 20) {
        name_song_tim = "Fades Away"
    } else if (number_song ==21||number_song == 22) {
        name_song_tim = "Never Leave Me"
    } else if (number_song ==23||number_song == 24) {
        name_song_tim = "Heart Upon My Sleeve"
    }
    var image = document.getElementById('album-Tim');
    image.src = "./img/icons/boton-de-pausa.png";
    audio.src = "./music/Tim/" + name_song_tim + ".mp3"
    document.getElementById('nameSongTim').innerHTML = name_song_tim
    if (click == 1) {
        audio.play();
    } else {
        audio.pause();
        click = 0;
        image.src = "./img/icons/boton-de-play.png";
        click = 0;
        return click;
    }

}

function playMusicTrue() {
    click = click + 1;
    let name_song_true;
    number_song = number_song + 1
    if (number_song == 29) {
        return number_song = 0;
    }
    if (number_song == 1||number_song == 2) {
        name_song_true = "Wake Me Up"
    } else if (number_song ==3||number_song == 4) {
        name_song_true = "You Make Me"
    } else if (number_song == 5||number_song == 6) {
        name_song_true = "Hey Brother"
    } else if (number_song == 7||number_song == 8) {
        name_song_true = "Addicted To You"
    } else if (number_song == 9||number_song == 10) {
        name_song_true = "Dear Boy"
    } else if (number_song ==11||number_song == 12) {
        name_song_true = "Liar Liar"
    } else if (number_song ==13||number_song == 14) {
        name_song_true = "Shame On Me"
    } else if (number_song ==15||number_song == 16) {
        name_song_true = "Lay Me Down"
    } else if (number_song ==17||number_song == 18) {
        name_song_true = "Hope There's Someone"
    } else if (number_song ==19||number_song == 20) {
        name_song_true = "Heart Upon My Sleeve"
    } else if (number_song ==21||number_song == 22) {
        name_song_true = "Long Road To Hell"
    } else if (number_song ==22||number_song == 23) {
        name_song_true = "Always On The Run"
    } else if (number_song ==24||number_song == 25) {
        name_song_true = "All You Need Is Love"
    } else if (number_song ==26||number_song == 27) {
        name_song_true = "Canyons"
    } else if (number_song ==28||number_song == 29) {
        name_song_true = "EDOM"
    }
    var image = document.getElementById('album-True');
    var imageNext = document.getElementById('next');
    image.src = "./img/icons/boton-de-pausa.png";
    audio.src = "./music/True/" + name_song_true + ".mp3"
    document.getElementById('nameSongTrue').innerHTML = name_song_true
    if (click == 1) {
        audio.play();
    } else {
        audio.pause();
        click = 0;
        image.src = "./img/icons/boton-de-play.png";
        return click;
    }

}

