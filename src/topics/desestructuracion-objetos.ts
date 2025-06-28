interface AudioPlayer {
    'audioVolumen': number,
    'songDuration': number,
    'song': string,
    'details': Details     
}

interface Details{
    'author': string,
    'year': number
}

const audioPlayer: AudioPlayer = {
    'audioVolumen': 90,
    'songDuration': 90,
    'song': 'mess',
    'details': {
        'author': 'madona',
        'year': 2024
    }
}
console.log(audioPlayer.details.year);
//DESESTRUCTURACIÓN 
// const {song:songAudio, details:details, audioVolumen:volumen} = audioPlayer 
// console.log(songAudio);
// console.log(details.author)
// console.log(volumen);

//DESESTRUCTURACION DE ARREGLOS
const [p1,p2,p3, p4, p5 = 'Not found']: string[] = ['goku', 'vegeta','bulma', 'trunks'];
const trunks = p5 || 'No hay personaje';
console.log(trunks);