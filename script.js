let previuos = document.querySelector('#pre');
let play = document.querySelector('#play');
let next = document.querySelector('#next');
let title = document.querySelector('#title');
let recent_volume = document.querySelector('#volume');
let volume_show = document.querySelector('#volume_show');
let slider = document.querySelector('#duration_slider');
let show_duration = document.querySelector('#show_duration');
let track_image = document.querySelector('#track_image');
let auto_play = document.querySelector('#play');
let present = document.querySelector('#present');
let total = document.querySelector('#total');
let artist = document.querySelector('#artist');


let timer;
let autoplay = 1;

let index_no = 0;
let playing_song = false;

//create a audio Element
let track = document.createElement('audio');


//All songs list
let All_song =[
 {
 	name: "play",
 	path: "music/song1.mp3",
 	img: "img/img4.jpeg",
 	singer: "alan walker"
 },
{
 	name: "Hello",
 	path: "music/song2.mp3",
 	img: "img/img3.jpeg",
 	singer: "OMFG"
  },
 {
 	name: "juice world",
 	path: "music/song5.mp3",
 	img: "img/img2.jpeg", 
    singer: "lucid dreams"
  },
 {
 	name: "payphone",
 	path: "music/song6.mp3",
 	img: "img/img6.jpeg",
 	singer: "Maroon 5"
  },
 {
 	name: "At My Worst",
 	path: "music/song4.mp3",
 	img: "img/img1.jpeg",
 	singer: "pink swets	"
 },
 {	name: "marshmellow",
 	path: "music/song7.mp3",
 	img: "img/img7.jpeg",
 	singer: "marshmellow"
  },
  {
 	name: "mincraft theme rap",
 	path: "music/song8.mp3",
 	img: "img/img8.jpeg",
 	singer: "mincraft"
  },
  {
 	name: "tobu candyland",
 	path: "music/song9.mp3",
 	img: "img/img9.jpeg",
 	singer: "tobu"
  },
  {
 	name: "hit the road jack",
 	path: "music/song10.mp3",
 	img: "img/img10.jpeg",
 	singer: "sad-ist"
  },
  {
 	name: "sugar crash",
 	path: "music/song11.mp3",
 	img: "img/img11.jpeg",
 	singer: "Elyoto"
  },
  {
 	name: "sugar",
 	path: "music/song12.mp3",
 	img: "img/img12.jpeg",
 	singer: "Maroon 5"
  },
  {
 	name: "tiktok cross arms",
 	path: "music/song13.mp3",
 	img: "img/img13.jpeg",
 	singer: "tiktok"
  },
  {
 	name: "Unstopable",
 	path: "music/song14.mp3",
 	img: "img/img14.jpeg",
 	singer: "The score"
  },
  {
 	name: "born for this",
 	path: "music/song15.mp3",
 	img: "img/img15.jpeg",
 	singer: "The score"
  },
  {
 	name: "sun flower",
 	path: "music/song16.mp3",
 	img: "img/img16.jpeg",
 	singer: "post malone"
  },
  {
 	name: "Come back to me",
 	path: "music/song17.mp3",
 	img: "img/img17.jpeg",
 	singer: "Steve Bell"
  },
  {
 	
 	name: "Make Me A Channel Of Your Peace",
 	
 	path: "music/song19.mp3",
 	img: "img/img19.jpeg",
 	singer: "Johann Sebastian von Tempelhoff"
  },
  {
 	name: "here i am lord",
 	path: "music/song18.mp3",
 	img: "img/img18.jpeg",
 	singer: "Dan Schutte"
  },
  {
 	name: "i like you somuch and you'll know it",
 	path: "music/song20.mp3",
 	img: "img/img5.jpeg",
 	singer: "ysabelle"
  },
 {
 	name: "Feel good",
 	path: "music/song21.mp3",
 	img: "img/img21.jpeg",
 	singer: "Cyber Life"
  },
 {
 	name: "Sick Boy ",
 	path: "music/song22.mp3",
 	img: "img/img22.jpeg",
 	singer: "The Chainsmoker"
  },	
 {
 	name: "Beautiful In White ",
 	path: "music/song23.mp3",
 	img: "img/img23.jpeg",
 	singer: "Shane Filan"
  },
 {
 	name: "When I Met You",
 	path: "music/song24.mp3",
 	img: "img/img24.jpeg",
 	singer: "Sara Geronimo"
  },	
 {
 	name: " At The Beginning",
 	path: "music/song25.mp3",
 	img: "img/img25.jpeg",
 	singer: "Anastasia"
  },	
 {
 	name: "A Love To Last A Lifetime",
 	path: "music/song26.mp3",
 	img: "img/img26.jpeg",
 	singer: "JOSE MARI CHAN"
  },
  {
 	name: "Ikaw",
 	path: "music/song28.mp3",
 	img: "img/img28.jpeg",
 	singer: "Yeng Constantino"
  },			
 {
 	name: "your Love",
 	path: "music/song27.mp3",
 	img: "img/img27.jpeg",
 	singer: "Juris"
  },
  {
 	name: "How Can I Tell Her",
 	path: "music/song29.mp3",
 	img: "img/img29.jpeg",
 	singer: "lobo"
  },	
 {
 	name: "Till I Collapse ",
 	path: "music/song30.mp3",
 	img: "img/img30.jpeg",
 	singer: "EMINEM"
  },
 {	name: "way back home ",
 	path: "music/song31.mp3",
 	img: "img/img31.jpeg",
 	singer: "SHAUN feat. Conor Maynard"
  }	
];
	
 



// All function

//function load the track
function load_track(index_no){
	clearInterval(timer);
	reset_slider();
	track.src = All_song[index_no].path;
	title.innerHTML = All_song[index_no].name;
	track_image.src = All_song[index_no].img;
	artist.innerHTML= All_song[index_no].singer;
	track.load();

	total.innerHTML = All_song.length;
	present.innerHTML = index_no + 1;
	timer = setInterval(range_slider , 1000);
}
load_track(index_no);



//mute sound
function mute_sound(){
	track.volume = 0;
	volume.value = 0;
	volume_show.innerHTML = 0;
}




//reset song slider
function reset_slider(){
	slider.value = 0;
}

// cheking the song is playing or not
function justplay(){
	if (playing_song==false) {
		playsong();
	}else{
      puasesong();
	} 
}



//play song
function playsong(){
	track.play();
	playing_song = true;
	play.innerHTML = '<i class="fa fa-pause"></i>';
}



//pause song
function puasesong(){
	track.pause();
	playing_song = false;
	play.innerHTML = '<i class="fa fa-play"></i>';
}



//next song
function next_song(){
	if (index_no < All_song.length - 1) {
		index_no += 1;
		load_track(index_no);
		playsong();
	}else{
		index_no = 1
		load_track(index_no);
		playsong();
	}
}


//previous song
function previous_song(){
	if (index_no > 0) {
		index_no -= 1;
		load_track(index_no);
		playsong(); 
	}else{
		index_no = All_song.length;
		load_track(index_no);
		playsong();
	}
}




// change volume
function volume_change(){
	volume_show.innerHTML = recent_volume.value;
	track.volume = recent_volume.value / 100;
}

//change slider position
function change_duration(){
	slider_position = track.duration * (slider.value / 100);
	track.currentTime = slider_position;
}



//autoplay function
function autoplay_switch(){
	if (autoplay==1){
		autoplay=0;
		auto_play.style.background = "rgba(255,255,255 0.2)";
	}else{
		autoplay = 1;
		auto_play.style.background = "#FF8A65"; 
	}
}


function range_slider(){
	let position = 0;

	//update slider position
	if(!isNaN(track.duration)){
		position = track.currentTime * (100/ track.duration);
		slider.value = position;
	}







	//function will run when the song is over
	if (track.ended){
		play.innerHTML = '<i class="fa fa-play"></i>';
		if (autoplay==1){
			index_no += 1;
			load_track(index_no);
			playsong();
		}	
	}
}
