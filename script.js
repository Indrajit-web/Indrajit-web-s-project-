
// dom select.. .. ...
let hindi = document.querySelector(".manuBOX1");
let English = document.querySelector(".manuBOX5");
let NewRealis = document.querySelector(".manuBOX7");
let newRealis = document.querySelector(".manuBOX4");
let Party =   document.querySelector(".manuBOX8");
let Justin =  document.querySelector(".manuBOX2");
let Arijit = document.querySelector(".manuBOX6");
let Punjabi = document.querySelector(".manuBOX3");
let songsImg = document.querySelectorAll(".mainSongImg");
let mainImg = document.querySelector(".seimg");
let iname =  document.querySelector(".iname");
let uimg = document.querySelectorAll(".uimg");
let aboutSonghading = document.querySelectorAll(".aboutH");
let aboutSongMore = document.querySelectorAll(".aboutSname");
let marquee = document.querySelector(".songPlayerSongName");
let audio = document.querySelector(".audio");
let progressBar = document.querySelector(".progress");
let gita = document.querySelectorAll(".songs");
let songPlayer = document.querySelector(".songPlayer");
let playimgSongImg = document.querySelector(".songPlayerImgU");
let songMurqueeStyle = document.querySelector(".songPlayerSongName");
let songDitelsMore = document.querySelector(".songPlayerSongArtist");
let mainSongImg = document.querySelector(".songPlayerImg");
let mainMarqueeBox = document.querySelector(".mainMrqueeBox");
let afterClickBackIcon = document.querySelector(".afterClickIcon");
let songControlsBox = document.querySelector(" .songControls");
let songPlayerBigScreen = document.querySelector(" .songplayerClickPart");
let playBack = document.querySelector(".songBack");
let playNext = document.querySelector(".songNext");
let songplayIcon = document.querySelector(".songPlayCon");
let timerBox = document.querySelector(".timer");
let timerCountBox = document.querySelector(".timerCount"); 
let durationDisplay = document.querySelector(".overalTimeCount");
let ArtImg1 = document.querySelector(".artImg1");
let ArtImg2 = document.querySelector(".artImg2");
let ArtImg3 = document.querySelector(".artImg3");
let ArtImg4 = document.querySelector(".artImg4");
let ArtImg5 = document.querySelector(".artImg5");
let ArtImg6 = document.querySelector(".artImg6");
let rco1 = document.querySelector(".recoImg1");
let rco2 = document.querySelector(".recoImg2");
let rco3 = document.querySelector(".recoImg3");
let rco4 = document.querySelector(".recoImg4");
let rco5 = document.querySelector(".recoImg5");
let rco6 = document.querySelector(".recoImg6");
let discoImg1 = document.querySelector(".discoImg1");
let discoImg2 = document.querySelector(".discoImg2");
let discoImg3 = document.querySelector(".discoImg3");
let discoImg4 = document.querySelector(".discoImg4");
let discoImg5 = document.querySelector(".discoImg5");
let discoImg6 = document.querySelector(".discoImg6");
let DarshanVBox = document.querySelector(".darsanBox")
// after clicj back colors-------------->
  //  let kabirBsck    
  
// all songs img......>
let song1 = uimg[0];
let song2 = uimg[1];
let song3 = uimg[2];
let song4 = uimg[3];
let song5 = uimg[4];
let song6 = uimg[5];
let song7 = uimg[6];
let song8 = uimg[7];
let song9 = uimg[8];
let song10 = uimg[9];

// some funtion======>
let marqueeF = (()=>{
    if(marquee.scrollWidth>marquee.clientWidth){
       marquee.classList.add("overflow");
    }
})
marqueeF();

let clickF = (()=>{
  document.querySelector(".SongDitels").classList.add("SongDitels3");
  document.querySelector(".backIcon").addEventListener("click",(n)=>{
    n.stopPropagation();
    setTimeout(()=>{
      document.querySelector(".SongDitels").classList.remove("SongDitels3");
    },100);
    })
 }) 
  
 //  puse play bar funtion=========>
      let pusplayf = (()=>{
         document.querySelector(".pushi").addEventListener("click",(pc)=>{
          pc.stopPropagation();
          document.querySelector(".pushi").classList.add("playpusDisplaNone");
          document.querySelector(".playi").classList.add("playpusDisplaBlock");
          audio.pause();
        });
         document.querySelector(".playi").addEventListener("click",(pc2)=>{
          pc2.stopPropagation();
          document.querySelector(".playi").classList.remove("playpusDisplaBlock");
          document.querySelector(".pushi").classList.remove("playpusDisplaNone");
          
          setTimeout(()=>{
            audio.play();
          },300);
        });
      });
      pusplayf();

  let songchangingF = (()=>{
    document.querySelector(".playi").classList.remove("playpusDisplaBlock");
    document.querySelector(".pushi").classList.remove("playpusDisplaNone");
  });


      // timer funtion
    let seconds = 0;
    let minutes = 0;
    audio.ontimeupdate = () =>{
         seconds = Math.floor(audio.currentTime % 60);
         minutes = Math.floor(audio.currentTime/60);
         timerCountBox.textContent=`${minutes}:${seconds.toString().padStart(2,"0")}`;
    };
    setInterval(()=>{
      if(audio.paused) return;
      seconds=Math.floor(audio.currentTime%60);
      minutes=Math.floor(audio.currentTime/60)
        timerCountBox.textContent=`${minutes}:${seconds.toString().padStart(2,"0")}`;
    },1000);
    
    // audio.onloadedmetadata=()=>{
    //   const durationMinutes = Math.floor(audio.duration/60);
    //   const durationSeconds = Math.floor(audio.duration%60);
    //   durationDisplay.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2,"0")}`;
    // };
    audio.addEventListener("loadedmetadata",function(){
      const durationMinutes = Math.floor(audio.duration/60);
      const durationSeconds = Math.floor(audio.duration%60);
      durationDisplay.textContent = `${durationMinutes}:${durationSeconds.toString().padStart(2,"0")}`;
    })
      
      // progress funtion===========>
        audio.onloadedmetadata=()=>{
          progressBar.max=audio.duration;
        };
        progressBar.addEventListener("input",()=>{
          audio.currentTime = progressBar.value;
        });
        audio.ontimeupdate=()=>{
          progressBar.value = audio.currentTime;
        }

    //  it will work after user click on the song bar
 let songplayerAfterF =(()=>{
  
  songPlayerBigScreen.addEventListener("click",()=>{
    songPlayerBigScreen.classList.add("songplayerClickPartBack");
    songPlayer.classList.add("songPlayerAfterClick");
    mainSongImg.classList.add("songPlayerImgAfterClick");
    playimgSongImg.classList.add("songPlayerImgUC");
    songDitelsMore.classList.add("songPlayerArtistNameAfter");
    mainMarqueeBox.classList.add("mainMrqueeBoxAfter");
    progressBar.classList.add("afterClickProgress");
    songPlayer.classList.add("songPlayerClickAnimation");
    afterClickBackIcon.classList.add("afterClickIconAdd");
    songControlsBox.classList.add("songControlAfterClick");
    playBack.classList.add("songBackBlock");
    playNext.classList.add("songNextBlock");
    songplayIcon.classList.add("songplayIconAfterRound");
    timerBox.classList.add("timerAfterBlock");
    afterClickBackIcon.addEventListener("click",(q)=>{
     q.stopPropagation();
     setTimeout(()=>{
      songPlayerBigScreen.classList.remove("songplayerClickPartBack");
      songPlayer.classList.remove("songPlayerAfterClick");
      mainSongImg.classList.remove("songPlayerImgAfterClick");
      playimgSongImg.classList.remove("songPlayerImgUC");
      songDitelsMore.classList.remove("songPlayerArtistNameAfter");
      mainMarqueeBox.classList.remove("mainMrqueeBoxAfter");
      progressBar.classList.remove("afterClickProgress");
      songPlayer.classList.remove("songPlayerClickAnimation");
      afterClickBackIcon.classList.remove("afterClickIconAdd");
      songControlsBox.classList.remove("songControlAfterClick");
      playBack.classList.remove("songBackBlock");
    playNext.classList.remove("songNextBlock");
    songplayIcon.classList.remove("songplayIconAfterRound");
    timerBox.classList.remove("timerAfterBlock");
     },100);
     
        });
    });
 })
 
 let con;
//  hindi click------->
hindi.addEventListener("click",(e)=>{
    e.stopPropagation();
    // condition chek if English opend..........
    if(mainImg.classList.contains("seimgEnglish")){
      mainImg.classList.remove("seimgEnglish");
      document.querySelector(".about").classList.remove("about3");
    }
    // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
    // / condition chek if New Darsan opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
    // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
    // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
    // condition chek if Justin opend..........
    if(mainImg.classList.contains("seimgJustin")){
      mainImg.classList.remove("seimgJustin");
      document.querySelector(".about").classList.remove("about4");
      document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
    }
    // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
    // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
    // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if NewRelas opend..........
   if(mainImg.classList.contains("seimgNewRe")){
      mainImg.classList.remove("seimgNewRe");
      document.querySelector(".about").classList.remove("about7");
      document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
   }  
  // .....................................
    clickF();
    mainImg.classList.add("seimg2");
    iname.innerText="Top Hindi Songs";
    document.querySelector(".about").classList.add("about2");
    
  // song1
    song1.src="artworks-000558014043-knhq4j-t500x500.jpg";
    aboutSonghading[0].innerText="Tujhe Kitna Chahne Lage";
    aboutSongMore[0].innerText="Song.Arijit Singh,Mithoon";
  //  song2
    song2.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
    aboutSonghading[1].innerText="Soni Soni";
    aboutSongMore[1].innerText="Darshan Raval";
  //  song3
    song3.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
    aboutSonghading[2].innerText="O Mahi";
    aboutSongMore[2].innerText="Song.Pritam,Arijit Singh,Irsa...";
  // song4
    song4.src="ANIMAL-Hindi-2023-20231124191036-500x500.jpg";
    aboutSonghading[3].innerText="Pehle Bhi Main";
    aboutSongMore[3].innerText="Song.Vishal Mishra,Raj Shekhar";
  // song5
    song5.src="Heartless-2014-500x500.jpg";
    aboutSonghading[4].innerText="Main Dhoondne Ko  Zamaane M...";
    aboutSongMore[4].innerText="Shong.Arijit Singh";
  // song6
    song6.src="Azhar-1-Hindi-2016-500x500.jpg";
    aboutSonghading[5].innerText="Bol Do Na Zara";
    aboutSongMore[5].innerText="Song.Armaan Malik,Amaal Mallik";
  // song7
    song7.src="artworks-000551838054-af70cv-t500x500.jpg";
    aboutSonghading[6].innerText="Kaise Hua";
    aboutSongMore[6].innerText="Song.Vishal Mishra,Manoj Muntashir";
  // song8
    song8.src="14304_4.jpg";
    aboutSonghading[7].innerText="Tere Vaaste";
    aboutSongMore[7].innerText="Song.Varun Jain,Sachin-Jigar,Shada...";
  // song9
    song9.src="57363b792db06f7cff8cc5d5e4564a6c.jpg";
    aboutSonghading[8].innerText="Pee Loon";
    aboutSongMore[8].innerText="Shong.Pritam,Mohit Chauhan";
  // song10
    song10.src="Akhiyaan-Hindi-2022-20220903124648-500x500.jpg";
    aboutSonghading[9].innerText="Akhiyaan";
    aboutSongMore[9].innerText="Song.Mitraz";
  // song1 playing ........>
    let TujheKitna = (()=>{
      gita[0].addEventListener("click",()=>{
        con = "TujheKitna";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tujhe_Kitna_Chahne_Lage_-_Kabir_Singh___Arijit_Singh___Mithoon___Shahid,Kiara___Lyrical_Music_Studio(256k).mp3";
          songPlayer.style.backgroundColor="rgb(75, 1, 12)";
          songMurqueeStyle.innerText="Tujhe Kitna Chahane Lage(From.Kabir Singh)";
          songDitelsMore.innerText="Arijit Singh,Mithoon";
          playimgSongImg.src="artworks-000558014043-knhq4j-t500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });
    });
    TujheKitna();

  // song2 Playing.................>
    let SoniSoni = (()=>{
      gita[1].addEventListener("click",()=>{
        con = "SoniSoni";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
          songPlayer.style.backgroundColor="rgb(94, 123, 14)";
          songMurqueeStyle.innerText="Soni Soni(From.Ishq Vishk Rebound)";
          songDitelsMore.innerText="Darshan Raval";
          playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });
    });
    SoniSoni();  
 
  // song3 is playing----------->
    let Omahi = (()=>{
      gita[2].addEventListener("click",()=>{
        con = "Omahi";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3";
          songPlayer.style.backgroundColor="rgb(34, 3, 3)";
          songMurqueeStyle.innerText="O Mahi (From. Dunki) Song. Arijit Singh";
          songDitelsMore.innerText="Song.Pritam,Arijit Singh,Irsa...";
          playimgSongImg.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });  
    });
    Omahi(); 
  
  // song4 is playing----------->
    let PeheleVhiMe = (()=>{
      gita[3].addEventListener("click",()=>{
        con = "PeheleVhiMe";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Pehle_Bhi_Main____Vishal_Mishra____Animal____Official_Audio____Lyrics_Video____SF_LYRICS_HUB___(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Pehle Bhi Mein(From.Animal)";
          songDitelsMore.innerText="Song.Pritam,Arijit Singh,Irsa...";
          playimgSongImg.src="ANIMAL-Hindi-2023-20231124191036-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    PeheleVhiMe();

    // song5 is playing----------->
    let ZamaaneMe = (()=>{
      gita[4].addEventListener("click",()=>{
        con = "ZamaaneMe";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Main Dhoondne Ko  Zamaane Mein";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Heartless-2014-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    ZamaaneMe();

    // song6 is playing----------->
    let BolDoNaJara = (()=>{
      gita[5].addEventListener("click",()=>{
        con = "Boldo";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="bol_do_na_zara_song_lyrics(256k).mp3";
          songPlayer.style.backgroundColor="rgb(3, 62, 104)";
          songMurqueeStyle.innerText="Bol Do Na Zara(From.Azhar)";
          songDitelsMore.innerText="Armaan Malik";
          playimgSongImg.src="Azhar-1-Hindi-2016-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    BolDoNaJara();

    // song7 is playing----------->
    let KaiseHua = (()=>{
      gita[6].addEventListener("click",()=>{
        con = "KaiseHua";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="KAISE_HUA_LYRICS___Kabir_Singh___Shahid_Kapoor,_Kiara_Advani___Vishal_Mishra___Manoj_Muntashir__(256k).mp3";
          songPlayer.style.backgroundColor="rgb(89, 31, 6)";
          songMurqueeStyle.innerText="Kaise Hua(From.Kabir Singh)";
          songDitelsMore.innerText="Vishal Mishra";
          playimgSongImg.src="artworks-000551838054-af70cv-t500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    KaiseHua();

    // song8 is playing----------->
    let Vaaste = (()=>{
      gita[7].addEventListener("click",()=>{
        con = "Vaaste";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tere_Vaaste_-_lyrics___Zara_Hatke_Zara_Bachke(256k).mp3";
          songPlayer.style.backgroundColor="rgb(89, 6, 6)";
          songMurqueeStyle.innerText="Tere Vaaste(From.Zara Hatke Zara Bachke)";
          songDitelsMore.innerText="Varun Jain";
          playimgSongImg.src="14304_4.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    Vaaste();

    // song9 is playing----------->
    let PeeLoon = (()=>{
      gita[8].addEventListener("click",()=>{
        con = "PeeLoon";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Pee_Loon__Lyrics____Once_Upon_A_Time_in_Mumbai__Mohit_Chauhan___Pritam___Emraan_Hashmi,_Prachi_Desai(256k).mp3";
          songPlayer.style.backgroundColor="rgb(75, 1, 12)";
          songMurqueeStyle.innerText="Pee Loon (From.Once upon a time in Mumbaai)";
          songDitelsMore.innerText="Pritam,Mohit Chauhan";
          playimgSongImg.src="57363b792db06f7cff8cc5d5e4564a6c.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    PeeLoon();

  // song10 is playing----------->
    let Akhiyaan = (()=>{
      gita[9].addEventListener("click",()=>{
        con = "Akhiyaan";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="MITRAZ_-_Akhiyaan__Official_Music_Video_(256k).mp3";
          songPlayer.style.backgroundColor="rgb(6, 17, 35)";
          songMurqueeStyle.innerText="Akhiyaan (Song.Mitraz)";
          songDitelsMore.innerText="Mitraz";
          playimgSongImg.src="Akhiyaan-Hindi-2022-20220903124648-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    Akhiyaan();
    
  
  
})//<-----hindi end point.

 
// Play nextIcon Click Song set---------->
playNext.addEventListener("click",()=>{
  if(con == "TujheKitna"){
        con = "SoniSoni";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
          songPlayer.style.backgroundColor="rgb(94, 123, 14)";
          songMurqueeStyle.innerText="Soni Soni(From.Ishq Vishk Rebound)";
          songDitelsMore.innerText="Darshan Raval";
          playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
             if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
          
        },200);
  }else if(con == "SoniSoni"){
    con = "Omahi";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3";
      songPlayer.style.backgroundColor="rgb(34, 3, 3)";
      songMurqueeStyle.innerText="O Mahi (From. Dunki) Song. Arijit Singh";
      songDitelsMore.innerText="Song.Pritam,Arijit Singh,Irsa...";
      playimgSongImg.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
    },200); 
  }else if(con == "Omahi"){
        con = "PeheleVhiMe";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Pehle_Bhi_Main____Vishal_Mishra____Animal____Official_Audio____Lyrics_Video____SF_LYRICS_HUB___(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Pehle Bhi Mein(From.Animal)";
          songDitelsMore.innerText="Song.Pritam,Arijit Singh,Irsa...";
          playimgSongImg.src="ANIMAL-Hindi-2023-20231124191036-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
             audio.play();
            }
          },1200);
        },200);
  }else if(con == "PeheleVhiMe"){
        con = "ZamaaneMe";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Main Dhoondne Ko  Zamaane Mein";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Heartless-2014-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
             audio.play();
            }
          },1200);
        },200);
  }else if(con == "ZamaaneMe"){
      con = "Boldo";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="bol_do_na_zara_song_lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(3, 62, 104)";
        songMurqueeStyle.innerText="Bol Do Na Zara(From.Azhar)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Azhar-1-Hindi-2016-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
           audio.play();
          }
        },1200);
      },200);
  }else if(con == "Boldo"){
      con = "KaiseHua";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="KAISE_HUA_LYRICS___Kabir_Singh___Shahid_Kapoor,_Kiara_Advani___Vishal_Mishra___Manoj_Muntashir__(256k).mp3";
        songPlayer.style.backgroundColor="rgb(89, 31, 6)";
        songMurqueeStyle.innerText="Kaise Hua(From.Kabir Singh)";
        songDitelsMore.innerText="Vishal Mishra";
        playimgSongImg.src="artworks-000551838054-af70cv-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
           audio.play();
          }
        },1200);
      },200);
  }else if(con == "KaiseHua"){
    con = "Vaaste";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Tere_Vaaste_-_lyrics___Zara_Hatke_Zara_Bachke(256k).mp3";
      songPlayer.style.backgroundColor="rgb(89, 6, 6)";
      songMurqueeStyle.innerText="Tere Vaaste(From.Zara Hatke Zara Bachke)";
      songDitelsMore.innerText="Varun Jain";
      playimgSongImg.src="14304_4.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
    },200); 
  }else if(con == "Vaaste"){
    con = "PeeLoon";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Pee_Loon__Lyrics____Once_Upon_A_Time_in_Mumbai__Mohit_Chauhan___Pritam___Emraan_Hashmi,_Prachi_Desai(256k).mp3";
      songPlayer.style.backgroundColor="rgb(75, 1, 12)";
      songMurqueeStyle.innerText="Pee Loon (From.Once upon a time in Mumbaai)";
      songDitelsMore.innerText="Pritam,Mohit Chauhan";
      playimgSongImg.src="57363b792db06f7cff8cc5d5e4564a6c.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
      },200);  
  }else if(con == "PeeLoon"){
    con = "Akhiyaan";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="MITRAZ_-_Akhiyaan__Official_Music_Video_(256k).mp3";
      songPlayer.style.backgroundColor="rgb(6, 17, 35)";
      songMurqueeStyle.innerText="Akhiyaan (Song.Mitraz)";
      songDitelsMore.innerText="Mitraz";
      playimgSongImg.src="Akhiyaan-Hindi-2022-20220903124648-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
    },200);
  }else if(con == "Stay"){
    con = "Attention";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Charlie_Puth_-_Attention_[Official_Video](256k).mp3";
      songPlayer.style.backgroundColor="rgb(8, 65, 78)";
      songMurqueeStyle.innerText="Attention(Song.Charlie Puth)";
      songDitelsMore.innerText="Charlie Puth";
      playimgSongImg.src="1200px-Charlie_Puth_-_Attention_(Official_Single_Cover).png";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }else if(con == "Attention"){
    con = "Stereo";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Edward_Maya__feat._Vika_Jigulina__-_Stereo_Love__Lyrics_(256k).mp3";
      songPlayer.style.backgroundColor="rgb(44, 73, 101)";
      songMurqueeStyle.innerText="Stereo Love(Song.Edward Maya,Vika Jigulina)";
      songDitelsMore.innerText="Edward Maya,Vika Jigulina";
      playimgSongImg.src="Stereo-Love-English-2010-20190924081753-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }else if(con == "Stereo"){
    con = "Shape";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Ed_Sheeran_-_Shape_Of_You__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(15, 82, 102)";
        songMurqueeStyle.innerText="Shape of You (Song.Ed Sheeran)";
        songDitelsMore.innerText="Ed Sheeran";
        playimgSongImg.src="enhanced-30668-1489178235-8.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Shape"){
    con = "WeDont";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_We_Don_t_Talk_Anymore__Lyrics__feat._Selena_Gomez(256k).mp3";
        songPlayer.style.backgroundColor="rgb(14, 29, 8)";
        songMurqueeStyle.innerText="We Don't Talk Anymore(feat.Selena Gomez)";
        songDitelsMore.innerText="Charlie Puth,Selena Gomez";
        playimgSongImg.src="artworks-000163042871-vrnc7n-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "WeDont"){
    con = "Senorita";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Shawn_Mendes,_Camila_Cabello_-_Señorita__Lyrics__Letra(256k).mp3";
      songPlayer.style.backgroundColor="rgb(65, 1, 1)";
      songMurqueeStyle.innerText="Senorita (Song.Shawn Mendes,Camila Cabello)";
      songDitelsMore.innerText="Shawn Mendes,Camila Cabello";
      playimgSongImg.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }else if(con == "Senorita"){
    con = "Levitating";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Dua_Lipa_-_Levitating__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(68, 4, 53)";
        songMurqueeStyle.innerText="Levitating (Song.Dua Lipa)";
        songDitelsMore.innerText="Dua Lipa";
        playimgSongImg.src="194d64e7-15ad-448b-ae81-4806bc981d0f-1.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Levitating"){
    con = "WeGo";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="KALEO_-_Way_Down_We_Go__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(98, 97, 97)";
        songMurqueeStyle.innerText="Way down We Go (Song.KALEO)";
        songDitelsMore.innerText="KALEO";
        playimgSongImg.src="Way-Down-We-Go-English-2019-20190424173159-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "WeGo"){ 
    con = "HoldingMeBack";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shawn_Mendes_‒_There_s_Nothing_Holding_Me_Back__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(53, 9, 60)";
        songMurqueeStyle.innerText="There's Nothing Holdin'Me Back";
        songDitelsMore.innerText="Shawn Mendes";
        playimgSongImg.src="artworks-000236445080-fuwoth-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "HoldingMeBack"){
      con = "StarBoy";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="The_Weeknd_-_Starboy__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 1, 1)";
        songMurqueeStyle.innerText="Starboy (Song.The Weeknd,Daft Punk)";
        songDitelsMore.innerText="The Weeknd,Daft Punk";
        playimgSongImg.src="Starboy-English-2016-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "StayJ"){
      con = "Baby";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="JUSTIN_BIEBER_-_Baby_feat._Ludacris_Lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(69, 26, 109)";
        songMurqueeStyle.innerText="Baby (Song. Justi Bieber,Ludacris)";
        songDitelsMore.innerText="Justi Bieber,Ludacris";
        playimgSongImg.src="artworks-RuTdLJxuEtrUeBVN-ZdTmlA-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "Baby"){
      con = "Sorry";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Justin_Bieber_-_Sorry__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(26, 96, 109)";
        songMurqueeStyle.innerText="Sorry (Song. Justin Bieber)";
        songDitelsMore.innerText="Justin Bieber";
        playimgSongImg.src="artworks-000135333648-1lmjbw-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "Sorry"){
      con = "Yummy";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Justin_Bieber_-_Yummy__Lyric_Video_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(118, 69, 106)";
        songMurqueeStyle.innerText="Yummy (Song. Justin Bieber)";
        songDitelsMore.innerText="Justin Bieber";
        playimgSongImg.src="artworks-000665416576-rrvfrt-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "TujheKitnaA"){
      con = "ZallimaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Zaalima__Lyrics____Raees___Shahrukh_Khan,_Mahira_Khan,_Arijit_Singh,_Harshdeep_Kaur(256k).mp3";
          songPlayer.style.backgroundColor="rgb(83, 77, 53";
          songMurqueeStyle.innerText="Zaalima(Song. Arijit Singh)";
          songDitelsMore.innerText=" Arijit Singh";
          playimgSongImg.src="Zalima (1).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "ZallimaA"){
      con = "OmahiA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3";
          songPlayer.style.backgroundColor="rgb(34, 3, 3)";
          songMurqueeStyle.innerText="O Mahi (From. Dunki) Song. Arijit Singh";
          songDitelsMore.innerText="Pritam,Arijit Singh,Irsa...";
          playimgSongImg.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "OmahiA"){
      con = "SatrangaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="ANIMAL-_Satranga__Lyrics____Arijit___Ranbir_Kapoor___Rashmika(256k).mp3";
          songPlayer.style.backgroundColor="rgb(12, 40, 60)";
          songMurqueeStyle.innerText="Satranga(From.ANIMAL)";
          songDitelsMore.innerText=" Arijit Singh";
          playimgSongImg.src="Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "SatrangaA"){
      con = "ZamaaneMeA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Main Dhoondne Ko  Zamaane Mein";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Heartless-2014-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "ZamaaneMeA"){
      con = "DilHeMuskilA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Arijit_Singh,_Pritam_-_Ae_Dil_Hai_Mushkil__lyrics_(256k).mp3";
          songPlayer.style.backgroundColor="rgb(106, 14, 57)";
          songMurqueeStyle.innerText="Aye Dil Hai Mushkil(Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (4).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "DilHeMuskilA"){
      con = "KhairiyatA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Khairiyat_-__Lyrics__Arijit_Singh___7clouds_Hindi(256k).mp3";
          songPlayer.style.backgroundColor="rgb(148, 148, 148)";
          songMurqueeStyle.innerText="Khairiyat (From. Chhichhore)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (5).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "KhairiyatA"){
      con = "MarizeA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Mareez-e-Ishq__Lyrics__-_Arijit_Singh_🎵(256k).mp3";
          songPlayer.style.backgroundColor="rgb(6, 40, 50)";
          songMurqueeStyle.innerText="Mareez-E-Ishk(Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (3).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "MarizeA"){
      con = "ShayadA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Arijit_Singh,_Pritam_-_Shayad__Lyrics___From__Love_Aaj_Kal__(256k).mp3";
          songPlayer.style.backgroundColor="rgb(97, 4, 63)";
          songMurqueeStyle.innerText="Shayad (Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "ShayadA"){
      con = "TumHiHoA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tum_Hi_Ho__Lyrics__Arijit_Singh_Aashiqui_2_@tseries(256k).mp3";
          songPlayer.style.backgroundColor="rgb(126, 42, 0)";
          songMurqueeStyle.innerText="Tum Hi Ho (From. Aashiqui 2)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="ashiqui-tum-hi-ho-2.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "OneLOveP"){
      con = "ExcusesP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Excuses__Official_Video____AP_Dhillon___Gurinder_Gill___Intense(256k).mp3";
        songPlayer.style.backgroundColor="rgb(101, 38, 78)";
        songMurqueeStyle.innerText="Excuses (Song. AP Dhillon)";
        songDitelsMore.innerText="AP Dhillon";
        playimgSongImg.src="a94d20549d17d87b6094c0cd31669e99.500x500x1.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "ExcusesP"){
      con = "KingShitP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shubh_-_King_Shit__Official_Audio_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(44, 58, 71)";
        songMurqueeStyle.innerText="King Shit (Song. Shubh)";
        songDitelsMore.innerText="Shubh";
        playimgSongImg.src="artworks-zNkPGU8HOX3r4ltk-j4Vhhw-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "KingShitP"){
      con = "NainaP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Naina_-_Lyrical___Crew___Diljit_Dosanjh,_Badshah___Tabu,_Kareena_Kapoor_K,_Kriti_Sanon___Raj_Ranjodh(256k).mp3";
        songPlayer.style.backgroundColor="rgb(86, 21, 16)";
        songMurqueeStyle.innerText="Naina (Song. Diljit Dosanjh,Badshah,Raj Ranjodh) ";
        songDitelsMore.innerText="Diljit Dosanjh,Badshah,Raj Ranjodh";
        playimgSongImg.src="620x450_20-3.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "TaubaTaubaN"){
      con = "SoniSoniN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 97, 10)";
        songMurqueeStyle.innerText="Soni Soni (From. Ishq Vishk Rebound)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "SoniSoniN"){
      con = "AjkiRatN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Aaj_Ki_Raat__LYRICS__-_Stree_2___Tamannaah_Bhatia___Sachin-Jigar___Madhubanti_B___Divya___Amitabh_B(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 59, 74)";
        songMurqueeStyle.innerText="Aaj Ki Raat (From. Stree 2)";
        songDitelsMore.innerText="Sachin-Jigar";
        playimgSongImg.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "AjkiRatN"){
      con = "NainaN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Naina_-_Lyrical___Crew___Diljit_Dosanjh,_Badshah___Tabu,_Kareena_Kapoor_K,_Kriti_Sanon___Raj_Ranjodh(256k).mp3";
        songPlayer.style.backgroundColor="rgb(86, 21, 16)";
        songMurqueeStyle.innerText="Naina (Song. Diljit Dosanjh,Badshah,Raj Ranjodh) ";
        songDitelsMore.innerText="Diljit Dosanjh,Badshah,Raj Ranjodh";
        playimgSongImg.src="620x450_20-3.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "AayiNaiNew"){
      con = "SoniSoniNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 97, 10)";
        songMurqueeStyle.innerText="Soni Soni (From. Ishq Vishk Rebound)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "SoniSoniNew"){
      con = "AjkiRatNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Aaj_Ki_Raat__LYRICS__-_Stree_2___Tamannaah_Bhatia___Sachin-Jigar___Madhubanti_B___Divya___Amitabh_B(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 59, 74)";
        songMurqueeStyle.innerText="Aaj Ki Raat (From. Stree 2)";
        songDitelsMore.innerText="Sachin-Jigar";
        playimgSongImg.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "AjkiRatNew"){
      con = "SajniNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="O_Sajni_Re__Lyrics__-_Arijit_Singh,_Ram_Sampath___Laapataa_Ladies___Aamir_Khan_Productions(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 74, 47)";
        songMurqueeStyle.innerText="Sajni (From. Laapataa Ladies)";
        songDitelsMore.innerText="Ram Sampath,Arijit Singh";
        playimgSongImg.src="Laapataa-Ladies-Hindi-2024-20240213151004-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "IlluminatiP"){
      con = "TaubaTaubaP";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Tauba_Tauba_-_Karan_Aujla__Lyrics_English_Meaning_(256k).mp3";
      songPlayer.style.backgroundColor="rgb(29, 31, 33)";
      songMurqueeStyle.innerText="Tauba Tauba (From. Bad Newz)";
      songDitelsMore.innerText="Karan Aujla";
      playimgSongImg.src="vicky-kaushal-talks-about-learning-the-steps-of-viral-song--tauba-tauba-154148380-1x1.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
    }else if(con == "HuaHeAjAr"){
      con = "WajahTumHoAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="WAJAH_TUM_HO_LYRICS___ARMAAN_MALIK___BAMAN,_MANOJ_MUNTASHIR___HATE_STORY_3_S-series(256k).mp3";
        songPlayer.style.backgroundColor="rgb(16, 60, 67)";
        songMurqueeStyle.innerText="Wajah Tum Ho (Song. Armaan Malik)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Hate-Story-3-Hindi-2015-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "WajahTumHoAr"){
      con = "BolDoAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="bol_do_na_zara_song_lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(5, 72, 106)";
        songMurqueeStyle.innerText="Bol Do Na Zara";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Azhar-1-Hindi-2016-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "BolDoAr"){
      con = "TumheApnaAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tumhe_Apna_Banane_Ka_Lyrics___Armaan_Malik___Neeti_M___Amaal_Malik___Hate_Story_3_Song___RB_Lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(16, 60, 67)";
        songMurqueeStyle.innerText="Tumhe Apna Banane Ka";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Hate-Story-3-Hindi-2015-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "NothingHoldinMeShawn"){
      con = "SenoritaShwan";
     setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Shawn_Mendes,_Camila_Cabello_-_Señorita__Lyrics__Letra(256k).mp3";
      songPlayer.style.backgroundColor="rgb(72, 2, 2)";
      songMurqueeStyle.innerText="Senorita (Song. Shawn Mendes,Camila Cabello)";
      songDitelsMore.innerText="Shawn Mendes,Camila Cabello";
      playimgSongImg.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
    }else if(con == "EkTarfadarsan"){
      con = "SoniSoniDarshan";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
      songPlayer.style.backgroundColor="rgb(94, 123, 14)";
      songMurqueeStyle.innerText="Soni Soni(From.Ishq Vishk Rebound)";
      songDitelsMore.innerText="Darshan Raval";
      playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
    }else if(con == "SoniSoniDarshan"){
      con = "HawaBankeDarshan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Darshan_Raval_-_Hawa_Banke__LYRICS____Official_Music_Video____Indie_Music_Label___T_SERIES_nabeel(256k).mp3";
        songPlayer.style.backgroundColor="rgb(66, 101, 138)";
        songMurqueeStyle.innerText="Hawa Banke (Song. Darshan Raval)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="IMG_20240819_091715.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "HawaBankeDarshan"){
      con = "TeraZikarDarshan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tera_Zikr_Lyrics___Darshan_Raval____Sourav_Roy___Mujhe_khone_ke_baad_ik_din_Tum_mujhe_yaad_karoge(256k).mp3";
        songPlayer.style.backgroundColor="rgb(30, 33, 56)";
        songMurqueeStyle.innerText="Tera Zikr (Song. Darshan Raval)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Tera-Zikr-Hindi-2017-20171108125619-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "AttentionCharli"){
      con = "WeDontCharli";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_We_Don_t_Talk_Anymore__Lyrics__feat._Selena_Gomez(256k).mp3";
        songPlayer.style.backgroundColor="rgb(14, 29, 8)";
        songMurqueeStyle.innerText="We Don't Talk Anymore(feat.Selena Gomez)";
        songDitelsMore.innerText="Charlie Puth,Selena Gomez";
        playimgSongImg.src="artworks-000163042871-vrnc7n-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "Raataa"){
      con = "Vaaste";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tere_Vaaste_-_lyrics___Zara_Hatke_Zara_Bachke(256k).mp3";
          songPlayer.style.backgroundColor="rgb(89, 6, 6)";
          songMurqueeStyle.innerText="Tere Vaaste(From.Zara Hatke Zara Bachke)";
          songDitelsMore.innerText="Varun Jain";
          playimgSongImg.src="14304_4.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "Nainareco"){
      con = "TaubaTaubaN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tauba_Tauba_-_Karan_Aujla__Lyrics_English_Meaning_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(29, 31, 33)";
        songMurqueeStyle.innerText="Tauba Tauba (From. Bad Newz)";
        songDitelsMore.innerText="Karan Aujla";
        playimgSongImg.src="vicky-kaushal-talks-about-learning-the-steps-of-viral-song--tauba-tauba-154148380-1x1.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "Yimmy"){
      con = "Senorita";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shawn_Mendes,_Camila_Cabello_-_Señorita__Lyrics__Letra(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 1, 1)";
        songMurqueeStyle.innerText="Senorita (Song.Shawn Mendes,Camila Cabello)";
        songDitelsMore.innerText="Shawn Mendes,Camila Cabello";
        playimgSongImg.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }
    

    
    

    
})// <----------Click next botton end.


// Click back botton song set--------->
playBack.addEventListener("click",()=>{
  if(con == "Akhiyaan"){
    con = "PeeLoon";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Pee_Loon__Lyrics____Once_Upon_A_Time_in_Mumbai__Mohit_Chauhan___Pritam___Emraan_Hashmi,_Prachi_Desai(256k).mp3";
      songPlayer.style.backgroundColor="rgb(75, 1, 12)";
      songMurqueeStyle.innerText="Pee Loon (From.Once upon a time in Mumbaai)";
      songDitelsMore.innerText="Pritam,Mohit Chauhan";
      playimgSongImg.src="57363b792db06f7cff8cc5d5e4564a6c.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
      },200);  
  }else if(con == "PeeLoon"){
    con = "Vaaste";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Tere_Vaaste_-_lyrics___Zara_Hatke_Zara_Bachke(256k).mp3";
      songPlayer.style.backgroundColor="rgb(89, 6, 6)";
      songMurqueeStyle.innerText="Tere Vaaste(From.Zara Hatke Zara Bachke)";
      songDitelsMore.innerText="Varun Jain";
      playimgSongImg.src="14304_4.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
    },200); 
  }else if(con == "Vaaste"){
    con = "KaiseHua";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="KAISE_HUA_LYRICS___Kabir_Singh___Shahid_Kapoor,_Kiara_Advani___Vishal_Mishra___Manoj_Muntashir__(256k).mp3";
        songPlayer.style.backgroundColor="rgb(89, 31, 6)";
        songMurqueeStyle.innerText="Kaise Hua(From.Kabir Singh)";
        songDitelsMore.innerText="Vishal Mishra";
        playimgSongImg.src="artworks-000551838054-af70cv-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
           audio.play();
          }
        },1200);
      },200);
  }else if(con == "KaiseHua"){
      con = "Boldo";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="bol_do_na_zara_song_lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(3, 62, 104)";
        songMurqueeStyle.innerText="Bol Do Na Zara(From.Azhar)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Azhar-1-Hindi-2016-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
           audio.play();
          }
        },1200);
      },200);
  }else if(con == "Boldo"){
    con = "ZamaaneMe";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3";
      songPlayer.style.backgroundColor="rgb(84, 48, 13)";
      songMurqueeStyle.innerText="Main Dhoondne Ko  Zamaane Mein";
      songDitelsMore.innerText="Arijit Singh";
      playimgSongImg.src="Heartless-2014-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
      marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
    },200);
  }else if(con == "ZamaaneMe"){
        con = "PeheleVhiMe";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Pehle_Bhi_Main____Vishal_Mishra____Animal____Official_Audio____Lyrics_Video____SF_LYRICS_HUB___(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Pehle Bhi Mein(From.Animal)";
          songDitelsMore.innerText="Song.Pritam,Arijit Singh,Irsa...";
          playimgSongImg.src="ANIMAL-Hindi-2023-20231124191036-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
             audio.play();
            }
          },1200);
        },200);
  }else if(con == "PeheleVhiMe"){
    con = "Omahi";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3";
      songPlayer.style.backgroundColor="rgb(34, 3, 3)";
      songMurqueeStyle.innerText="O Mahi (From. Dunki) Song. Arijit Singh";
      songDitelsMore.innerText="Song.Pritam,Arijit Singh,Irsa...";
      playimgSongImg.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
    },200);  
  }else if(con == "Omahi"){
        con = "SoniSoni";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
          songPlayer.style.backgroundColor="rgb(94, 123, 14)";
          songMurqueeStyle.innerText="Soni Soni(From.Ishq Vishk Rebound)";
          songDitelsMore.innerText="Darshan Raval";
          playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
             if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
          
        },200);
  }else if(con == "SoniSoni"){
        con = "TujheKitna";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tujhe_Kitna_Chahne_Lage_-_Kabir_Singh___Arijit_Singh___Mithoon___Shahid,Kiara___Lyrical_Music_Studio(256k).mp3";
          songPlayer.style.backgroundColor="rgb(75, 1, 12)";
          songMurqueeStyle.innerText="Tujhe Kitna Chahane Lage(From.Kabir Singh)";
          songDitelsMore.innerText="Arijit Singh,Mithoon";
          playimgSongImg.src="artworks-000558014043-knhq4j-t500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "StarBoy"){
    con = "HoldingMeBack";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shawn_Mendes_‒_There_s_Nothing_Holding_Me_Back__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(53, 9, 60)";
        songMurqueeStyle.innerText="There's Nothing Holdin'Me Back";
        songDitelsMore.innerText="Shawn Mendes";
        playimgSongImg.src="artworks-000236445080-fuwoth-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "HoldingMeBack"){
    con = "WeGo";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="KALEO_-_Way_Down_We_Go__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(98, 97, 97)";
        songMurqueeStyle.innerText="Way down We Go (Song.KALEO)";
        songDitelsMore.innerText="KALEO";
        playimgSongImg.src="Way-Down-We-Go-English-2019-20190424173159-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "WeGo"){
    con = "Levitating";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Dua_Lipa_-_Levitating__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(68, 4, 53)";
        songMurqueeStyle.innerText="Levitating (Song.Dua Lipa)";
        songDitelsMore.innerText="Dua Lipa";
        playimgSongImg.src="194d64e7-15ad-448b-ae81-4806bc981d0f-1.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Levitating"){
    con = "Senorita";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shawn_Mendes,_Camila_Cabello_-_Señorita__Lyrics__Letra(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 1, 1)";
        songMurqueeStyle.innerText="Senorita (Song.Shawn Mendes,Camila Cabello)";
        songDitelsMore.innerText="Shawn Mendes,Camila Cabello";
        playimgSongImg.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Senorita"){
    con = "WeDont";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_We_Don_t_Talk_Anymore__Lyrics__feat._Selena_Gomez(256k).mp3";
        songPlayer.style.backgroundColor="rgb(14, 29, 8)";
        songMurqueeStyle.innerText="We Don't Talk Anymore(feat.Selena Gomez)";
        songDitelsMore.innerText="Charlie Puth,Selena Gomez";
        playimgSongImg.src="artworks-000163042871-vrnc7n-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "WeDont"){
    con = "Shape";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Ed_Sheeran_-_Shape_Of_You__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(15, 82, 102)";
        songMurqueeStyle.innerText="Shape of You (Song.Ed Sheeran)";
        songDitelsMore.innerText="Ed Sheeran";
        playimgSongImg.src="enhanced-30668-1489178235-8.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Shape"){   
    con = "Stereo";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Edward_Maya__feat._Vika_Jigulina__-_Stereo_Love__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(44, 73, 101)";
        songMurqueeStyle.innerText="Stereo Love(Song.Edward Maya,Vika Jigulina)";
        songDitelsMore.innerText="Edward Maya,Vika Jigulina";
        playimgSongImg.src="Stereo-Love-English-2010-20190924081753-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Stereo"){
    con = "Attention";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_Attention_[Official_Video](256k).mp3";
        songPlayer.style.backgroundColor="rgb(8, 65, 78)";
        songMurqueeStyle.innerText="Attention(Song.Charlie Puth)";
        songDitelsMore.innerText="Charlie Puth";
        playimgSongImg.src="1200px-Charlie_Puth_-_Attention_(Official_Single_Cover).png";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Attention"){
    con = "Stay";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="The_Kid_LAROI,_Justin_Bieber_-_Stay__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(15, 82, 102)";
        songMurqueeStyle.innerText="STAY (With Justin Bieber)";
        songDitelsMore.innerText="The Kid  LAROI,Justin Bieber";
        playimgSongImg.src="artworks-NTWumskIAtzxndKO-yz1ryA-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Yummy"){
    con = "Sorry";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Justin_Bieber_-_Sorry__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(26, 96, 109)";
        songMurqueeStyle.innerText="Sorry (Song. Justin Bieber)";
        songDitelsMore.innerText="Justin Bieber";
        playimgSongImg.src="artworks-000135333648-1lmjbw-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Sorry"){
    con = "Baby";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="JUSTIN_BIEBER_-_Baby_feat._Ludacris_Lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(69, 26, 109)";
        songMurqueeStyle.innerText="Baby (Song. Justi Bieber,Ludacris)";
        songDitelsMore.innerText="Justi Bieber,Ludacris";
        playimgSongImg.src="artworks-RuTdLJxuEtrUeBVN-ZdTmlA-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Baby"){
    con = "StayJ";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="The_Kid_LAROI,_Justin_Bieber_-_Stay__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(15, 82, 102)";
        songMurqueeStyle.innerText="STAY (With Justin Bieber)";
        songDitelsMore.innerText="The Kid  LAROI,Justin Bieber";
        playimgSongImg.src="artworks-NTWumskIAtzxndKO-yz1ryA-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "TumHiHoA"){
    con = "ShayadA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Arijit_Singh,_Pritam_-_Shayad__Lyrics___From__Love_Aaj_Kal__(256k).mp3";
          songPlayer.style.backgroundColor="rgb(97, 4, 63)";
          songMurqueeStyle.innerText="Shayad (Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "ShayadA"){
    con = "MarizeA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Mareez-e-Ishq__Lyrics__-_Arijit_Singh_🎵(256k).mp3";
          songPlayer.style.backgroundColor="rgb(6, 40, 50)";
          songMurqueeStyle.innerText="Mareez-E-Ishk(Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (3).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "MarizeA"){
    con = "KhairiyatA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Khairiyat_-__Lyrics__Arijit_Singh___7clouds_Hindi(256k).mp3";
          songPlayer.style.backgroundColor="rgb(148, 148, 148)";
          songMurqueeStyle.innerText="Khairiyat (From. Chhichhore)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (5).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "KhairiyatA"){
    con = "DilHeMuskilA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Arijit_Singh,_Pritam_-_Ae_Dil_Hai_Mushkil__lyrics_(256k).mp3";
          songPlayer.style.backgroundColor="rgb(106, 14, 57)";
          songMurqueeStyle.innerText="Aye Dil Hai Mushkil(Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (4).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "DilHeMuskilA"){
    con = "ZamaaneMeA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Main Dhoondne Ko  Zamaane Mein";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Heartless-2014-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "ZamaaneMeA"){
    con = "SatrangaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="ANIMAL-_Satranga__Lyrics____Arijit___Ranbir_Kapoor___Rashmika(256k).mp3";
          songPlayer.style.backgroundColor="rgb(12, 40, 60)";
          songMurqueeStyle.innerText="Satranga(From.ANIMAL)";
          songDitelsMore.innerText=" Arijit Singh";
          playimgSongImg.src="Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "SatrangaA"){
    con = "OmahiA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3";
          songPlayer.style.backgroundColor="rgb(34, 3, 3)";
          songMurqueeStyle.innerText="O Mahi (From. Dunki) Song. Arijit Singh";
          songDitelsMore.innerText="Pritam,Arijit Singh,Irsa...";
          playimgSongImg.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "OmahiA"){
    con = "ZallimaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Zaalima__Lyrics____Raees___Shahrukh_Khan,_Mahira_Khan,_Arijit_Singh,_Harshdeep_Kaur(256k).mp3";
          songPlayer.style.backgroundColor="rgb(83, 77, 53";
          songMurqueeStyle.innerText="Zaalima(Song. Arijit Singh)";
          songDitelsMore.innerText=" Arijit Singh";
          playimgSongImg.src="Zalima (1).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "ZallimaA"){
    con = "TujheKitnaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tujhe_Kitna_Chahne_Lage_-_Kabir_Singh___Arijit_Singh___Mithoon___Shahid,Kiara___Lyrical_Music_Studio(256k).mp3";
          songPlayer.style.backgroundColor="rgb(75, 1, 12)";
          songMurqueeStyle.innerText="Tujhe Kitna Chahane Lage(From.Kabir Singh)";
          songDitelsMore.innerText="Arijit Singh,Mithoon";
          playimgSongImg.src="artworks-000558014043-knhq4j-t500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "NainaP"){
    con = "KingShitP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shubh_-_King_Shit__Official_Audio_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(44, 58, 71)";
        songMurqueeStyle.innerText="King Shit (Song. Shubh)";
        songDitelsMore.innerText="Shubh";
        playimgSongImg.src="artworks-zNkPGU8HOX3r4ltk-j4Vhhw-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "KingShitP"){
    con = "ExcusesP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Excuses__Official_Video____AP_Dhillon___Gurinder_Gill___Intense(256k).mp3";
        songPlayer.style.backgroundColor="rgb(101, 38, 78)";
        songMurqueeStyle.innerText="Excuses (Song. AP Dhillon)";
        songDitelsMore.innerText="AP Dhillon";
        playimgSongImg.src="a94d20549d17d87b6094c0cd31669e99.500x500x1.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "ExcusesP"){
    con = "OneLOveP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shubh_-_One_Love__Official_Audio_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(47, 37, 37)";
        songMurqueeStyle.innerText="One Love (Song. Shubh)";
        songDitelsMore.innerText="Shubh";
        playimgSongImg.src="artworks-nGq8biEWiLnc-0-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "NainaN"){
    con = "AjkiRatN";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Aaj_Ki_Raat__LYRICS__-_Stree_2___Tamannaah_Bhatia___Sachin-Jigar___Madhubanti_B___Divya___Amitabh_B(256k).mp3";
      songPlayer.style.backgroundColor="rgb(27, 59, 74)";
      songMurqueeStyle.innerText="Aaj Ki Raat (From. Stree 2)";
      songDitelsMore.innerText="Sachin-Jigar";
      playimgSongImg.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }else if(con == "AjkiRatN"){
    con = "SoniSoniN";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
      songPlayer.style.backgroundColor="rgb(65, 97, 10)";
      songMurqueeStyle.innerText="Soni Soni (From. Ishq Vishk Rebound)";
      songDitelsMore.innerText="Darshan Raval";
      playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }else if(con == "SoniSoniN"){
    con = "TaubaTaubaN";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Tauba_Tauba_-_Karan_Aujla__Lyrics_English_Meaning_(256k).mp3";
      songPlayer.style.backgroundColor="rgb(29, 31, 33)";
      songMurqueeStyle.innerText="Tauba Tauba (From. Bad Newz)";
      songDitelsMore.innerText="Karan Aujla";
      playimgSongImg.src="vicky-kaushal-talks-about-learning-the-steps-of-viral-song--tauba-tauba-154148380-1x1.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }else if(con == "SajniNew"){
    con = "AjkiRatNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Aaj_Ki_Raat__LYRICS__-_Stree_2___Tamannaah_Bhatia___Sachin-Jigar___Madhubanti_B___Divya___Amitabh_B(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 59, 74)";
        songMurqueeStyle.innerText="Aaj Ki Raat (From. Stree 2)";
        songDitelsMore.innerText="Sachin-Jigar";
        playimgSongImg.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "AjkiRatNew"){
    con = "SoniSoniNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 97, 10)";
        songMurqueeStyle.innerText="Soni Soni (From. Ishq Vishk Rebound)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "SoniSoniNew"){
    con = "AayiNaiNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Aayi_Nai_Lyrics_-_Stree_2___Pawan_Singh,_Simran_Choudhary,_Divya_Kumar___Sachin-Jigar___Shraddha_K(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 59, 74)";
        songMurqueeStyle.innerText="Aai Nai (From. Stree 2)";
        songDitelsMore.innerText="Sachin-Jigar";
        playimgSongImg.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "TaubaTaubaP"){
    con = "IlluminatiP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="ILLUMINATI_Lyrics___Aavesham___Sushin_Shyam,_Dabzee___Fahadh_Faasil(256k).mp3";
        songPlayer.style.backgroundColor="rgb(108, 1, 1)";
        songMurqueeStyle.innerText="Illuminati - From. Aavesham";
        songDitelsMore.innerText="Sushin Shyam";
        playimgSongImg.src="Aavesham-Malayalam-2024-20240514204401-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "TumheApnaAr"){
    con = "BolDoAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="bol_do_na_zara_song_lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(5, 72, 106)";
        songMurqueeStyle.innerText="Bol Do Na Zara";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Azhar-1-Hindi-2016-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "BolDoAr"){
    con = "WajahTumHoAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="WAJAH_TUM_HO_LYRICS___ARMAAN_MALIK___BAMAN,_MANOJ_MUNTASHIR___HATE_STORY_3_S-series(256k).mp3";
        songPlayer.style.backgroundColor="rgb(16, 60, 67)";
        songMurqueeStyle.innerText="Wajah Tum Ho (Song. Armaan Malik)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Hate-Story-3-Hindi-2015-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "WajahTumHoAr"){
    con = "HuaHeAjAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Hua_Hain_Aaj_Pehli_Baar_Lyrics___Sanam_Re___Pulkit_Samrat,Urvashi_Rautela___Divya_Khosla_Kumaar(256k).mp3";
        songPlayer.style.backgroundColor="rgb(62, 27, 13)";
        songMurqueeStyle.innerText="Hua Hain Aaj Pehli Baar";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="artworks-000157559404-l9nc3o-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "SenoritaShwan"){
    con = "NothingHoldinMeShawn";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shawn_Mendes_‒_There_s_Nothing_Holding_Me_Back__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(53, 9, 60)";
        songMurqueeStyle.innerText="There's Nothing Holdin'Me Back";
        songDitelsMore.innerText="Shawn Mendes";
        playimgSongImg.src="artworks-000236445080-fuwoth-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "TeraZikarDarshan"){
    con = "HawaBankeDarshan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Darshan_Raval_-_Hawa_Banke__LYRICS____Official_Music_Video____Indie_Music_Label___T_SERIES_nabeel(256k).mp3";
        songPlayer.style.backgroundColor="rgb(66, 101, 138)";
        songMurqueeStyle.innerText="Hawa Banke (Song. Darshan Raval)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="IMG_20240819_091715.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "HawaBankeDarshan"){
    con = "SoniSoniDarshan";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
      songPlayer.style.backgroundColor="rgb(94, 123, 14)";
      songMurqueeStyle.innerText="Soni Soni(From.Ishq Vishk Rebound)";
      songDitelsMore.innerText="Darshan Raval";
      playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }else if(con == "SoniSoniDarshan"){
    con = "EkTarfadarsan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Darshan_Raval_-_Ek_Tarfa_Full_Song___Lyrics____Youngveer__(256k).mp3";
        songPlayer.style.backgroundColor="rgb(28, 52, 97)";
        songMurqueeStyle.innerText="Ek Tarfa (Song. Darshan Raval)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="Ek-Tarfa-Hindi-2020-20200711220013-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "WeDontCharli"){
    con = "AttentionCharli";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_Attention_[Official_Video](256k).mp3";
        songPlayer.style.backgroundColor="rgb(8, 65, 78)";
        songMurqueeStyle.innerText="Attention(Song.Charlie Puth)";
        songDitelsMore.innerText="Charlie Puth";
        playimgSongImg.src="1200px-Charlie_Puth_-_Attention_(Official_Single_Cover).png";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Raataa"){
    con = "KaiseHua";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="KAISE_HUA_LYRICS___Kabir_Singh___Shahid_Kapoor,_Kiara_Advani___Vishal_Mishra___Manoj_Muntashir__(256k).mp3";
          songPlayer.style.backgroundColor="rgb(89, 31, 6)";
          songMurqueeStyle.innerText="Kaise Hua(From.Kabir Singh)";
          songDitelsMore.innerText="Vishal Mishra";
          playimgSongImg.src="artworks-000551838054-af70cv-t500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }else if(con == "Yimmy"){
    con = "KingShitP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shubh_-_King_Shit__Official_Audio_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(44, 58, 71)";
        songMurqueeStyle.innerText="King Shit (Song. Shubh)";
        songDitelsMore.innerText="Shubh";
        playimgSongImg.src="artworks-zNkPGU8HOX3r4ltk-j4Vhhw-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }

  

});// <----------Click back botton end.

// song after end------->
audio.addEventListener("ended",()=>{
  if(con == "TujheKitna"){
        con = "SoniSoni";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
          songPlayer.style.backgroundColor="rgb(94, 123, 14)";
          songMurqueeStyle.innerText="Soni Soni(From.Ishq Vishk Rebound)";
          songDitelsMore.innerText="Darshan Raval";
          playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
             if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
          
        },200);
  }else if(con == "SoniSoni"){
    con = "Omahi";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3";
      songPlayer.style.backgroundColor="rgb(34, 3, 3)";
      songMurqueeStyle.innerText="O Mahi (From. Dunki) Song. Arijit Singh";
      songDitelsMore.innerText="Song.Pritam,Arijit Singh,Irsa...";
      playimgSongImg.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
    },200); 
  }else if(con == "Omahi"){
        con = "PeheleVhiMe";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Pehle_Bhi_Main____Vishal_Mishra____Animal____Official_Audio____Lyrics_Video____SF_LYRICS_HUB___(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Pehle Bhi Mein(From.Animal)";
          songDitelsMore.innerText="Song.Pritam,Arijit Singh,Irsa...";
          playimgSongImg.src="ANIMAL-Hindi-2023-20231124191036-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
             audio.play();
            }
          },1200);
        },200);
  }else if(con == "PeheleVhiMe"){
        con = "ZamaaneMe";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Main Dhoondne Ko  Zamaane Mein";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Heartless-2014-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
             audio.play();
            }
          },1200);
        },200);
  }else if(con == "ZamaaneMe"){
      con = "Boldo";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="bol_do_na_zara_song_lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(3, 62, 104)";
        songMurqueeStyle.innerText="Bol Do Na Zara(From.Azhar)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Azhar-1-Hindi-2016-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
           audio.play();
          }
        },1200);
      },200);
  }else if(con == "Boldo"){
      con = "KaiseHua";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="KAISE_HUA_LYRICS___Kabir_Singh___Shahid_Kapoor,_Kiara_Advani___Vishal_Mishra___Manoj_Muntashir__(256k).mp3";
        songPlayer.style.backgroundColor="rgb(89, 31, 6)";
        songMurqueeStyle.innerText="Kaise Hua(From.Kabir Singh)";
        songDitelsMore.innerText="Vishal Mishra";
        playimgSongImg.src="artworks-000551838054-af70cv-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
           audio.play();
          }
        },1200);
      },200);
  }else if(con == "KaiseHua"){
    con = "Vaaste";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Tere_Vaaste_-_lyrics___Zara_Hatke_Zara_Bachke(256k).mp3";
      songPlayer.style.backgroundColor="rgb(89, 6, 6)";
      songMurqueeStyle.innerText="Tere Vaaste(From.Zara Hatke Zara Bachke)";
      songDitelsMore.innerText="Varun Jain";
      playimgSongImg.src="14304_4.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
    },200); 
  }else if(con == "Vaaste"){
    con = "PeeLoon";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Pee_Loon__Lyrics____Once_Upon_A_Time_in_Mumbai__Mohit_Chauhan___Pritam___Emraan_Hashmi,_Prachi_Desai(256k).mp3";
      songPlayer.style.backgroundColor="rgb(75, 1, 12)";
      songMurqueeStyle.innerText="Pee Loon (From.Once upon a time in Mumbaai)";
      songDitelsMore.innerText="Pritam,Mohit Chauhan";
      playimgSongImg.src="57363b792db06f7cff8cc5d5e4564a6c.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
      },200);  
  }else if(con == "PeeLoon"){
    con = "Akhiyaan";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="MITRAZ_-_Akhiyaan__Official_Music_Video_(256k).mp3";
      songPlayer.style.backgroundColor="rgb(6, 17, 35)";
      songMurqueeStyle.innerText="Akhiyaan (Song.Mitraz)";
      songDitelsMore.innerText="Mitraz";
      playimgSongImg.src="Akhiyaan-Hindi-2022-20220903124648-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
         audio.play();
        }
      },1200);
    },200);
  }else if(con == "Stay"){
    con = "Attention";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Charlie_Puth_-_Attention_[Official_Video](256k).mp3";
      songPlayer.style.backgroundColor="rgb(8, 65, 78)";
      songMurqueeStyle.innerText="Attention(Song.Charlie Puth)";
      songDitelsMore.innerText="Charlie Puth";
      playimgSongImg.src="1200px-Charlie_Puth_-_Attention_(Official_Single_Cover).png";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }else if(con == "Attention"){
    con = "Stereo";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Edward_Maya__feat._Vika_Jigulina__-_Stereo_Love__Lyrics_(256k).mp3";
      songPlayer.style.backgroundColor="rgb(44, 73, 101)";
      songMurqueeStyle.innerText="Stereo Love(Song.Edward Maya,Vika Jigulina)";
      songDitelsMore.innerText="Edward Maya,Vika Jigulina";
      playimgSongImg.src="Stereo-Love-English-2010-20190924081753-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }else if(con == "Stereo"){
    con = "Shape";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Ed_Sheeran_-_Shape_Of_You__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(15, 82, 102)";
        songMurqueeStyle.innerText="Shape of You (Song.Ed Sheeran)";
        songDitelsMore.innerText="Ed Sheeran";
        playimgSongImg.src="enhanced-30668-1489178235-8.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Shape"){
    con = "WeDont";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_We_Don_t_Talk_Anymore__Lyrics__feat._Selena_Gomez(256k).mp3";
        songPlayer.style.backgroundColor="rgb(14, 29, 8)";
        songMurqueeStyle.innerText="We Don't Talk Anymore(feat.Selena Gomez)";
        songDitelsMore.innerText="Charlie Puth,Selena Gomez";
        playimgSongImg.src="artworks-000163042871-vrnc7n-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "WeDont"){
    con = "Senorita";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Shawn_Mendes,_Camila_Cabello_-_Señorita__Lyrics__Letra(256k).mp3";
      songPlayer.style.backgroundColor="rgb(65, 1, 1)";
      songMurqueeStyle.innerText="Senorita (Song.Shawn Mendes,Camila Cabello)";
      songDitelsMore.innerText="Shawn Mendes,Camila Cabello";
      playimgSongImg.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }else if(con == "Senorita"){
    con = "Levitating";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Dua_Lipa_-_Levitating__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(68, 4, 53)";
        songMurqueeStyle.innerText="Levitating (Song.Dua Lipa)";
        songDitelsMore.innerText="Dua Lipa";
        playimgSongImg.src=".trashed-1726242898-194d64e7-15ad-448b-ae81-4806bc981d0f.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "Levitating"){
    con = "WeGo";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="KALEO_-_Way_Down_We_Go__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(98, 97, 97)";
        songMurqueeStyle.innerText="Way down We Go (Song.KALEO)";
        songDitelsMore.innerText="KALEO";
        playimgSongImg.src="Way-Down-We-Go-English-2019-20190424173159-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
  }else if(con == "WeGo"){ 
    con = "HoldingMeBack";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shawn_Mendes_‒_There_s_Nothing_Holding_Me_Back__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(53, 9, 60)";
        songMurqueeStyle.innerText="There's Nothing Holdin'Me Back";
        songDitelsMore.innerText="Shawn Mendes";
        playimgSongImg.src="artworks-000236445080-fuwoth-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "HoldingMeBack"){
      con = "StarBoy";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="The_Weeknd_-_Starboy__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 1, 1)";
        songMurqueeStyle.innerText="Starboy (Song.The Weeknd,Daft Punk)";
        songDitelsMore.innerText="The Weeknd,Daft Punk";
        playimgSongImg.src="Starboy-English-2016-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "StayJ"){
      con = "Baby";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="JUSTIN_BIEBER_-_Baby_feat._Ludacris_Lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(69, 26, 109)";
        songMurqueeStyle.innerText="Baby (Song. Justi Bieber,Ludacris)";
        songDitelsMore.innerText="Justi Bieber,Ludacris";
        playimgSongImg.src="artworks-RuTdLJxuEtrUeBVN-ZdTmlA-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "Baby"){
      con = "Sorry";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Justin_Bieber_-_Sorry__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(26, 96, 109)";
        songMurqueeStyle.innerText="Sorry (Song. Justin Bieber)";
        songDitelsMore.innerText="Justin Bieber";
        playimgSongImg.src="artworks-000135333648-1lmjbw-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "Sorry"){
      con = "Yummy";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Justin_Bieber_-_Yummy__Lyric_Video_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(118, 69, 106)";
        songMurqueeStyle.innerText="Yummy (Song. Justin Bieber)";
        songDitelsMore.innerText="Justin Bieber";
        playimgSongImg.src="artworks-000665416576-rrvfrt-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "TujheKitnaA"){
      con = "ZallimaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Zaalima__Lyrics____Raees___Shahrukh_Khan,_Mahira_Khan,_Arijit_Singh,_Harshdeep_Kaur(256k).mp3";
          songPlayer.style.backgroundColor="rgb(83, 77, 53";
          songMurqueeStyle.innerText="Zaalima(Song. Arijit Singh)";
          songDitelsMore.innerText=" Arijit Singh";
          playimgSongImg.src="Zalima (1).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "ZallimaA"){
      con = "OmahiA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3";
          songPlayer.style.backgroundColor="rgb(34, 3, 3)";
          songMurqueeStyle.innerText="O Mahi (From. Dunki) Song. Arijit Singh";
          songDitelsMore.innerText="Pritam,Arijit Singh,Irsa...";
          playimgSongImg.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "OmahiA"){
      con = "SatrangaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="ANIMAL-_Satranga__Lyrics____Arijit___Ranbir_Kapoor___Rashmika(256k).mp3";
          songPlayer.style.backgroundColor="rgb(12, 40, 60)";
          songMurqueeStyle.innerText="Satranga(From.ANIMAL)";
          songDitelsMore.innerText=" Arijit Singh";
          playimgSongImg.src="Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "SatrangaA"){
      con = "ZamaaneMeA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Main Dhoondne Ko  Zamaane Mein";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Heartless-2014-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "ZamaaneMeA"){
      con = "DilHeMuskilA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Arijit_Singh,_Pritam_-_Ae_Dil_Hai_Mushkil__lyrics_(256k).mp3";
          songPlayer.style.backgroundColor="rgb(106, 14, 57)";
          songMurqueeStyle.innerText="Aye Dil Hai Mushkil(Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (4).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "DilHeMuskilA"){
      con = "KhairiyatA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Khairiyat_-__Lyrics__Arijit_Singh___7clouds_Hindi(256k).mp3";
          songPlayer.style.backgroundColor="rgb(148, 148, 148)";
          songMurqueeStyle.innerText="Khairiyat (From. Chhichhore)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (5).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "KhairiyatA"){
      con = "MarizeA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Mareez-e-Ishq__Lyrics__-_Arijit_Singh_🎵(256k).mp3";
          songPlayer.style.backgroundColor="rgb(6, 40, 50)";
          songMurqueeStyle.innerText="Mareez-E-Ishk(Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (3).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "MarizeA"){
      con = "ShayadA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Arijit_Singh,_Pritam_-_Shayad__Lyrics___From__Love_Aaj_Kal__(256k).mp3";
          songPlayer.style.backgroundColor="rgb(97, 4, 63)";
          songMurqueeStyle.innerText="Shayad (Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "ShayadA"){
      con = "TumHiHoA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tum_Hi_Ho__Lyrics__Arijit_Singh_Aashiqui_2_@tseries(256k).mp3";
          songPlayer.style.backgroundColor="rgb(126, 42, 0)";
          songMurqueeStyle.innerText="Tum Hi Ho (From. Aashiqui 2)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="ashiqui-tum-hi-ho-2.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "OneLOveP"){
      con = "ExcusesP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Excuses__Official_Video____AP_Dhillon___Gurinder_Gill___Intense(256k).mp3";
        songPlayer.style.backgroundColor="rgb(101, 38, 78)";
        songMurqueeStyle.innerText="Excuses (Song. AP Dhillon)";
        songDitelsMore.innerText="AP Dhillon";
        playimgSongImg.src="a94d20549d17d87b6094c0cd31669e99.500x500x1.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "ExcusesP"){
      con = "KingShitP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shubh_-_King_Shit__Official_Audio_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(44, 58, 71)";
        songMurqueeStyle.innerText="King Shit (Song. Shubh)";
        songDitelsMore.innerText="Shubh";
        playimgSongImg.src="artworks-zNkPGU8HOX3r4ltk-j4Vhhw-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "KingShitP"){
      con = "NainaP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Naina_-_Lyrical___Crew___Diljit_Dosanjh,_Badshah___Tabu,_Kareena_Kapoor_K,_Kriti_Sanon___Raj_Ranjodh(256k).mp3";
        songPlayer.style.backgroundColor="rgb(86, 21, 16)";
        songMurqueeStyle.innerText="Naina (Song. Diljit Dosanjh,Badshah,Raj Ranjodh) ";
        songDitelsMore.innerText="Diljit Dosanjh,Badshah,Raj Ranjodh";
        playimgSongImg.src="620x450_20-3.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "TaubaTaubaN"){
      con = "SoniSoniN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 97, 10)";
        songMurqueeStyle.innerText="Soni Soni (From. Ishq Vishk Rebound)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "SoniSoniN"){
      con = "AjkiRatN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Aaj_Ki_Raat__LYRICS__-_Stree_2___Tamannaah_Bhatia___Sachin-Jigar___Madhubanti_B___Divya___Amitabh_B(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 59, 74)";
        songMurqueeStyle.innerText="Aaj Ki Raat (From. Stree 2)";
        songDitelsMore.innerText="Sachin-Jigar";
        playimgSongImg.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "AjkiRatN"){
      con = "NainaN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Naina_-_Lyrical___Crew___Diljit_Dosanjh,_Badshah___Tabu,_Kareena_Kapoor_K,_Kriti_Sanon___Raj_Ranjodh(256k).mp3";
        songPlayer.style.backgroundColor="rgb(86, 21, 16)";
        songMurqueeStyle.innerText="Naina (Song. Diljit Dosanjh,Badshah,Raj Ranjodh) ";
        songDitelsMore.innerText="Diljit Dosanjh,Badshah,Raj Ranjodh";
        playimgSongImg.src="620x450_20-3.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "AayiNaiNew"){
      con = "SoniSoniNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 97, 10)";
        songMurqueeStyle.innerText="Soni Soni (From. Ishq Vishk Rebound)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "SoniSoniNew"){
      con = "AjkiRatNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Aaj_Ki_Raat__LYRICS__-_Stree_2___Tamannaah_Bhatia___Sachin-Jigar___Madhubanti_B___Divya___Amitabh_B(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 59, 74)";
        songMurqueeStyle.innerText="Aaj Ki Raat (From. Stree 2)";
        songDitelsMore.innerText="Sachin-Jigar";
        playimgSongImg.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "AjkiRatNew"){
      con = "SajniNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="O_Sajni_Re__Lyrics__-_Arijit_Singh,_Ram_Sampath___Laapataa_Ladies___Aamir_Khan_Productions(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 74, 47)";
        songMurqueeStyle.innerText="Sajni (From. Laapataa Ladies)";
        songDitelsMore.innerText="Ram Sampath,Arijit Singh";
        playimgSongImg.src="Laapataa-Ladies-Hindi-2024-20240213151004-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "IlluminatiP"){
      con = "TaubaTaubaP";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Tauba_Tauba_-_Karan_Aujla__Lyrics_English_Meaning_(256k).mp3";
      songPlayer.style.backgroundColor="rgb(29, 31, 33)";
      songMurqueeStyle.innerText="Tauba Tauba (From. Bad Newz)";
      songDitelsMore.innerText="Karan Aujla";
      playimgSongImg.src="vicky-kaushal-talks-about-learning-the-steps-of-viral-song--tauba-tauba-154148380-1x1.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
    }else if(con == "HuaHeAjAr"){
      con = "WajahTumHoAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="WAJAH_TUM_HO_LYRICS___ARMAAN_MALIK___BAMAN,_MANOJ_MUNTASHIR___HATE_STORY_3_S-series(256k).mp3";
        songPlayer.style.backgroundColor="rgb(16, 60, 67)";
        songMurqueeStyle.innerText="Wajah Tum Ho (Song. Armaan Malik)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Hate-Story-3-Hindi-2015-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "WajahTumHoAr"){
      con = "BolDoAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="bol_do_na_zara_song_lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(5, 72, 106)";
        songMurqueeStyle.innerText="Bol Do Na Zara";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Azhar-1-Hindi-2016-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "BolDoAr"){
      con = "TumheApnaAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tumhe_Apna_Banane_Ka_Lyrics___Armaan_Malik___Neeti_M___Amaal_Malik___Hate_Story_3_Song___RB_Lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(16, 60, 67)";
        songMurqueeStyle.innerText="Tumhe Apna Banane Ka";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Hate-Story-3-Hindi-2015-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "NothingHoldinMeShawn"){
      con = "SenoritaShwan";
     setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Shawn_Mendes,_Camila_Cabello_-_Señorita__Lyrics__Letra(256k).mp3";
      songPlayer.style.backgroundColor="rgb(72, 2, 2)";
      songMurqueeStyle.innerText="Senorita (Song. Shawn Mendes,Camila Cabello)";
      songDitelsMore.innerText="Shawn Mendes,Camila Cabello";
      playimgSongImg.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
    }else if(con == "EkTarfadarsan"){
      con = "SoniSoniDarshan";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
      songPlayer.style.backgroundColor="rgb(94, 123, 14)";
      songMurqueeStyle.innerText="Soni Soni(From.Ishq Vishk Rebound)";
      songDitelsMore.innerText="Darshan Raval";
      playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
    }else if(con == "SoniSoniDarshan"){
      con = "HawaBankeDarshan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Darshan_Raval_-_Hawa_Banke__LYRICS____Official_Music_Video____Indie_Music_Label___T_SERIES_nabeel(256k).mp3";
        songPlayer.style.backgroundColor="rgb(66, 101, 138)";
        songMurqueeStyle.innerText="Hawa Banke (Song. Darshan Raval)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="IMG_20240819_091715.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "HawaBankeDarshan"){
      con = "TeraZikarDarshan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tera_Zikr_Lyrics___Darshan_Raval____Sourav_Roy___Mujhe_khone_ke_baad_ik_din_Tum_mujhe_yaad_karoge(256k).mp3";
        songPlayer.style.backgroundColor="rgb(30, 33, 56)";
        songMurqueeStyle.innerText="Tera Zikr (Song. Darshan Raval)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Tera-Zikr-Hindi-2017-20171108125619-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "AttentionCharli"){
      con = "WeDontCharli";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_We_Don_t_Talk_Anymore__Lyrics__feat._Selena_Gomez(256k).mp3";
        songPlayer.style.backgroundColor="rgb(14, 29, 8)";
        songMurqueeStyle.innerText="We Don't Talk Anymore(feat.Selena Gomez)";
        songDitelsMore.innerText="Charlie Puth,Selena Gomez";
        playimgSongImg.src="artworks-000163042871-vrnc7n-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }else if(con == "Raataa"){
      con = "Vaaste";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tere_Vaaste_-_lyrics___Zara_Hatke_Zara_Bachke(256k).mp3";
          songPlayer.style.backgroundColor="rgb(89, 6, 6)";
          songMurqueeStyle.innerText="Tere Vaaste(From.Zara Hatke Zara Bachke)";
          songDitelsMore.innerText="Varun Jain";
          playimgSongImg.src="14304_4.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }else if(con == "Yimmy"){
      con = "Senorita";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shawn_Mendes,_Camila_Cabello_-_Señorita__Lyrics__Letra(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 1, 1)";
        songMurqueeStyle.innerText="Senorita (Song.Shawn Mendes,Camila Cabello)";
        songDitelsMore.innerText="Shawn Mendes,Camila Cabello";
        playimgSongImg.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }
      
    
})// <----------Song after end >> end here.

// English select------------>
English.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if hidi opend...>
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Justin opend...>
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if NewRelas opend..........
   if(mainImg.classList.contains("seimgNewRe")){
     mainImg.classList.remove("seimgNewRe");
     document.querySelector(".about").classList.remove("about7");
      document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
    }
  // .................................................
  
  clickF();
  mainImg.classList.add("seimgEnglish");
  iname.innerText="Best English Songs";
  document.querySelector(".about").classList.add("about3");
  
 // song1
  song1.src="artworks-NTWumskIAtzxndKO-yz1ryA-t500x500.jpg";
  aboutSonghading[0].innerText="STAY";
  aboutSongMore[0].innerText="Song.The Kid LAROI,Justin Bieber";
 //  song2
  song2.src="1200px-Charlie_Puth_-_Attention_(Official_Single_Cover).png";
  aboutSonghading[1].innerText="Attention";
  aboutSongMore[1].innerText="Song.Charlie Puth";
 //  song3
  song3.src="Stereo-Love-English-2010-20190924081753-500x500.jpg";
  aboutSonghading[2].innerText="Stereo Love";
  aboutSongMore[2].innerText="Song.Edward Maya, Vika Jigulina";
 // song4
  song4.src="enhanced-30668-1489178235-8.jpg";
  aboutSonghading[3].innerText="Shape of You";
  aboutSongMore[3].innerText="Song.Ed Sheeran";
 // song5
  song5.src="artworks-000163042871-vrnc7n-t500x500.jpg";
  aboutSonghading[4].innerText="We Don't Talk Anymore";
  aboutSongMore[4].innerText="Song.Charlie Puth,Selena Gomez";
 // song6
  song6.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
  aboutSonghading[5].innerText="Senorita";
  aboutSongMore[5].innerText="Song.Shawn Mendes,Camila Cabello";
 // song7
  song7.src="194d64e7-15ad-448b-ae81-4806bc981d0f-1.jpg";
  aboutSonghading[6].innerText="Levitating";
  aboutSongMore[6].innerText="Song.Dua Lipa";
 // song8
  song8.src="Way-Down-We-Go-English-2019-20190424173159-500x500.jpg";
  aboutSonghading[7].innerText="Way down We Go";
  aboutSongMore[7].innerText="Song.KALEO";
 // song9
  song9.src="artworks-000236445080-fuwoth-t500x500.jpg";
  aboutSonghading[8].innerText="There's Nothing Holdin'Me Back";
  aboutSongMore[8].innerText="Shawn Mendes";
 // song10
  song10.src="Starboy-English-2016-500x500.jpg";
  aboutSonghading[9].innerText="Starboy";
  aboutSongMore[9].innerText="Song.The Weeknd,Daft Punk";

  // song1 playing ........>
  let Stay = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "Stay";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="The_Kid_LAROI,_Justin_Bieber_-_Stay__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(15, 82, 102)";
        songMurqueeStyle.innerText="STAY (With Justin Bieber)";
        songDitelsMore.innerText="The Kid  LAROI,Justin Bieber";
        playimgSongImg.src="artworks-NTWumskIAtzxndKO-yz1ryA-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  Stay();

// song2 Playing.................>
  let Attention = (()=>{
    gita[1].addEventListener("click",()=>{
      con = "Attention";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_Attention_[Official_Video](256k).mp3";
        songPlayer.style.backgroundColor="rgb(8, 65, 78)";
        songMurqueeStyle.innerText="Attention(Song.Charlie Puth)";
        songDitelsMore.innerText="Charlie Puth";
        playimgSongImg.src="1200px-Charlie_Puth_-_Attention_(Official_Single_Cover).png";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  Attention();  

// song3 is playing----------->
  let Stereo = (()=>{
    gita[2].addEventListener("click",()=>{
      con = "Stereo";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Edward_Maya__feat._Vika_Jigulina__-_Stereo_Love__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(44, 73, 101)";
        songMurqueeStyle.innerText="Stereo Love(Song.Edward Maya,Vika Jigulina)";
        songDitelsMore.innerText="Edward Maya,Vika Jigulina";
        playimgSongImg.src="Stereo-Love-English-2010-20190924081753-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });  
  });
  Stereo(); 

// song4 is playing----------->
  let Shape = (()=>{
    gita[3].addEventListener("click",()=>{
      con = "Shape";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Ed_Sheeran_-_Shape_Of_You__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(15, 82, 102)";
        songMurqueeStyle.innerText="Shape of You (Song.Ed Sheeran)";
        songDitelsMore.innerText="Ed Sheeran";
        playimgSongImg.src="enhanced-30668-1489178235-8.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  Shape();

  // song5 is playing----------->
  let WeDont = (()=>{
    gita[4].addEventListener("click",()=>{
      con = "WeDont";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_We_Don_t_Talk_Anymore__Lyrics__feat._Selena_Gomez(256k).mp3";
        songPlayer.style.backgroundColor="rgb(14, 29, 8)";
        songMurqueeStyle.innerText="We Don't Talk Anymore(feat.Selena Gomez)";
        songDitelsMore.innerText="Charlie Puth,Selena Gomez";
        playimgSongImg.src="artworks-000163042871-vrnc7n-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  WeDont();

  // song6 is playing----------->
  let Senorita = (()=>{
    gita[5].addEventListener("click",()=>{
      con = "Senorita";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shawn_Mendes,_Camila_Cabello_-_Señorita__Lyrics__Letra(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 1, 1)";
        songMurqueeStyle.innerText="Senorita (Song.Shawn Mendes,Camila Cabello)";
        songDitelsMore.innerText="Shawn Mendes,Camila Cabello";
        playimgSongImg.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  Senorita();

  // song7 is playing----------->
  let Levitating = (()=>{
    gita[6].addEventListener("click",()=>{
      con = "Levitating";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Dua_Lipa_-_Levitating__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(68, 4, 53)";
        songMurqueeStyle.innerText="Levitating (Song.Dua Lipa)";
        songDitelsMore.innerText="Dua Lipa";
        playimgSongImg.src="194d64e7-15ad-448b-ae81-4806bc981d0f-1.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  Levitating();

  // song8 is playing----------->
  let WeGo = (()=>{
    gita[7].addEventListener("click",()=>{
      con = "WeGo";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="KALEO_-_Way_Down_We_Go__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(98, 97, 97)";
        songMurqueeStyle.innerText="Way down We Go (Song.KALEO)";
        songDitelsMore.innerText="KALEO";
        playimgSongImg.src="Way-Down-We-Go-English-2019-20190424173159-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  WeGo();

  // song9 is playing----------->
  let HoldingMeBack = (()=>{
    gita[8].addEventListener("click",()=>{
      con = "HoldingMeBack";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shawn_Mendes_‒_There_s_Nothing_Holding_Me_Back__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(53, 9, 60)";
        songMurqueeStyle.innerText="There's Nothing Holdin'Me Back";
        songDitelsMore.innerText="Shawn Mendes";
        playimgSongImg.src="artworks-000236445080-fuwoth-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  HoldingMeBack();

// song10 is playing----------->
  let StarBoy = (()=>{
    gita[9].addEventListener("click",()=>{
      con = "StarBoy";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="The_Weeknd_-_Starboy__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 1, 1)";
        songMurqueeStyle.innerText="Starboy (Song.The Weeknd,Daft Punk)";
        songDitelsMore.innerText="The Weeknd,Daft Punk";
        playimgSongImg.src="Starboy-English-2016-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  StarBoy();

})// <----------English select end here.

// Justin bieber select..............>
Justin.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
    // condition chek if NewRelas opend..........
   if(mainImg.classList.contains("seimgNewRe")){
    mainImg.classList.remove("seimgNewRe");
     document.querySelector(".about").classList.remove("about7");
     document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
    }

  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgJustin");
  iname.innerText="Justin Bieber";
  document.querySelector(".about").classList.add("about4");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceJustin");
 // song1
  song1.src="artworks-NTWumskIAtzxndKO-yz1ryA-t500x500.jpg";
  aboutSonghading[0].innerText="STAY";
  aboutSongMore[0].innerText="Song. The Kid LAROI,Justin Bieber";
 //  song2
  song2.src="artworks-RuTdLJxuEtrUeBVN-ZdTmlA-t500x500.jpg";
  aboutSonghading[1].innerText="Baby";
  aboutSongMore[1].innerText="Song. Justin Bieber,Ludacris";
 //  song3
  song3.src="artworks-000135333648-1lmjbw-t500x500.jpg";
  aboutSonghading[2].innerText="Sorry";
  aboutSongMore[2].innerText="Song. Justin Bieber";
 // song4
  song4.src="artworks-000665416576-rrvfrt-t500x500.jpg";
  aboutSonghading[3].innerText="Yummy";
  aboutSongMore[3].innerText="Song. Justin Bieber";
 
 // song1 playing ........>
  let Stay = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "StayJ";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="The_Kid_LAROI,_Justin_Bieber_-_Stay__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(15, 82, 102)";
        songMurqueeStyle.innerText="STAY (With Justin Bieber)";
        songDitelsMore.innerText="The Kid  LAROI,Justin Bieber";
        playimgSongImg.src="artworks-NTWumskIAtzxndKO-yz1ryA-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  Stay();

// song2 Playing.................>
  let Baby = (()=>{
    gita[1].addEventListener("click",()=>{
      con = "Baby";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="JUSTIN_BIEBER_-_Baby_feat._Ludacris_Lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(69, 26, 109)";
        songMurqueeStyle.innerText="Baby (Song. Justi Bieber,Ludacris)";
        songDitelsMore.innerText="Justi Bieber,Ludacris";
        playimgSongImg.src="artworks-RuTdLJxuEtrUeBVN-ZdTmlA-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  Baby();  

// song3 is playing----------->
  let Sorry = (()=>{
    gita[2].addEventListener("click",()=>{
      con = "Sorry";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Justin_Bieber_-_Sorry__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(26, 96, 109)";
        songMurqueeStyle.innerText="Sorry (Song. Justin Bieber)";
        songDitelsMore.innerText="Justin Bieber";
        playimgSongImg.src="artworks-000135333648-1lmjbw-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });  
  });
  Sorry(); 

// song4 is playing----------->
  let Yummy = (()=>{
    gita[3].addEventListener("click",()=>{
      con = "Yummy";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Justin_Bieber_-_Yummy__Lyric_Video_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(118, 69, 106)";
        songMurqueeStyle.innerText="Yummy (Song. Justin Bieber)";
        songDitelsMore.innerText="Justin Bieber";
        playimgSongImg.src="artworks-000665416576-rrvfrt-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  Yummy();

  
})// <----------Justin bieber select end here.

// arijit Click botton............................>
Arijit.addEventListener("click",(e)=>{
    e.stopPropagation();
    // condition chek if English opend..........
    if(mainImg.classList.contains("seimgEnglish")){
      mainImg.classList.remove("seimgEnglish");
      document.querySelector(".about").classList.remove("about3");
    }
    // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  
    // condition chek if Justin opend..........
    if(mainImg.classList.contains("seimgJustin")){
      mainImg.classList.remove("seimgJustin");
      document.querySelector(".about").classList.remove("about4");
      document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
    }
    // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
    // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
    // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
    // condition chek if NewRelas opend..........
   if(mainImg.classList.contains("seimgNewRe")){
     mainImg.classList.remove("seimgNewRe");
     document.querySelector(".about").classList.remove("about7");
     document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
    } 
    // condition chek if hidi opend...>
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
 
  // .........................................................
    clickF();
    mainImg.classList.add("seimgArijit");
    iname.innerText="Best of Arijit Singh";
    document.querySelector(".about").classList.add("about5");
    
  // song1
    song1.src="artworks-000558014043-knhq4j-t500x500.jpg";
    aboutSonghading[0].innerText="Tujhe Kitna Chahne Lage";
    aboutSongMore[0].innerText="Song.Arijit Singh,Mithoon";
  //  song2
    song2.src="Zalima (1).jpg";
    aboutSonghading[1].innerText="Zaalima";
    aboutSongMore[1].innerText="ong. Arijit Singh,Harshdeep Kaur";
  //  song3
    song3.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
    aboutSonghading[2].innerText="O Mahi";
    aboutSongMore[2].innerText="Song.Pritam,Arijit Singh,Irsa...";
  // song4
    song4.src="Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg";
    aboutSonghading[3].innerText="Satranga";
    aboutSongMore[3].innerText="Song. Arijit Singh,Shreyas Puranik,Si...";
  // song5
    song5.src="Heartless-2014-500x500.jpg";
    aboutSonghading[4].innerText="Main Dhoondne Ko  Zamaane M...";
    aboutSongMore[4].innerText="Shong.Arijit Singh";
  // song6
    song6.src="Zalima (4).jpg";
    aboutSonghading[5].innerText="Aye Dil Hai Mushkil";
    aboutSongMore[5].innerText="Song. Arijit Singh";
  // song7
    song7.src="Zalima (5).jpg";
    aboutSonghading[6].innerText="Khairiyat";
    aboutSongMore[6].innerText="Song. Arijit Singh";
  // song8
    song8.src="Zalima (3).jpg";
    aboutSonghading[7].innerText="Mareez-E-Ishq";
    aboutSongMore[7].innerText="Song. Arijit Singh";
  // song9
    song9.src="MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg";
    aboutSonghading[8].innerText="Shayad";
    aboutSongMore[8].innerText="Song. Arijit Singh";
  // song10
    song10.src="ashiqui-tum-hi-ho-2.jpg";
    aboutSonghading[9].innerText="Tum Hi Ho";
    aboutSongMore[9].innerText="Song. Arijit Singh";
  // song1 playing ........>
    let TujheKitna = (()=>{
      gita[0].addEventListener("click",()=>{
        con = "TujheKitnaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tujhe_Kitna_Chahne_Lage_-_Kabir_Singh___Arijit_Singh___Mithoon___Shahid,Kiara___Lyrical_Music_Studio(256k).mp3";
          songPlayer.style.backgroundColor="rgb(75, 1, 12)";
          songMurqueeStyle.innerText="Tujhe Kitna Chahane Lage(From.Kabir Singh)";
          songDitelsMore.innerText="Arijit Singh,Mithoon";
          playimgSongImg.src="artworks-000558014043-knhq4j-t500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });
    });
    TujheKitna();

  // song2 Playing.................>
    let Zallima = (()=>{
      gita[1].addEventListener("click",()=>{
        con = "ZallimaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Zaalima__Lyrics____Raees___Shahrukh_Khan,_Mahira_Khan,_Arijit_Singh,_Harshdeep_Kaur(256k).mp3";
          songPlayer.style.backgroundColor="rgb(83, 77, 53";
          songMurqueeStyle.innerText="Zaalima(Song. Arijit Singh)";
          songDitelsMore.innerText=" Arijit Singh";
          playimgSongImg.src="Zalima (1).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });
    });
    Zallima();  
 
  // song3 is playing----------->
    let Omahi = (()=>{
      gita[2].addEventListener("click",()=>{
        con = "OmahiA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3";
          songPlayer.style.backgroundColor="rgb(34, 3, 3)";
          songMurqueeStyle.innerText="O Mahi (From. Dunki) Song. Arijit Singh";
          songDitelsMore.innerText="Pritam,Arijit Singh,Irsa...";
          playimgSongImg.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });  
    });
    Omahi(); 
  
  // song4 is playing----------->
    let Satranga = (()=>{
      gita[3].addEventListener("click",()=>{
        con = "SatrangaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="ANIMAL-_Satranga__Lyrics____Arijit___Ranbir_Kapoor___Rashmika(256k).mp3";
          songPlayer.style.backgroundColor="rgb(12, 40, 60)";
          songMurqueeStyle.innerText="Satranga(From.ANIMAL)";
          songDitelsMore.innerText=" Arijit Singh";
          playimgSongImg.src="Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    Satranga();

    // song5 is playing----------->
    let ZamaaneMe = (()=>{
      gita[4].addEventListener("click",()=>{
        con = "ZamaaneMeA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Main Dhoondne Ko  Zamaane Mein";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Heartless-2014-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    ZamaaneMe();

    // song6 is playing----------->
    let DilHeMuskilA = (()=>{
      gita[5].addEventListener("click",()=>{
        con = "DilHeMuskilA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Arijit_Singh,_Pritam_-_Ae_Dil_Hai_Mushkil__lyrics_(256k).mp3";
          songPlayer.style.backgroundColor="rgb(106, 14, 57)";
          songMurqueeStyle.innerText="Aye Dil Hai Mushkil(Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (4).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    DilHeMuskilA();

    // song7 is playing----------->
    let KhairiyatA = (()=>{
      gita[6].addEventListener("click",()=>{
        con = "KhairiyatA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Khairiyat_-__Lyrics__Arijit_Singh___7clouds_Hindi(256k).mp3";
          songPlayer.style.backgroundColor="rgb(148, 148, 148)";
          songMurqueeStyle.innerText="Khairiyat (From. Chhichhore)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (5).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    KhairiyatA();

    // song8 is playing----------->
    let MarizeA = (()=>{
      gita[7].addEventListener("click",()=>{
        con = "MarizeA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Mareez-e-Ishq__Lyrics__-_Arijit_Singh_🎵(256k).mp3";
          songPlayer.style.backgroundColor="rgb(6, 40, 50)";
          songMurqueeStyle.innerText="Mareez-E-Ishk(Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Zalima (3).jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    MarizeA();

    // song9 is playing----------->
    let ShayadA = (()=>{
      gita[8].addEventListener("click",()=>{
        con = "ShayadA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Arijit_Singh,_Pritam_-_Shayad__Lyrics___From__Love_Aaj_Kal__(256k).mp3";
          songPlayer.style.backgroundColor="rgb(97, 4, 63)";
          songMurqueeStyle.innerText="Shayad (Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    ShayadA();

  // song10 is playing----------->
    let TumHiHoA = (()=>{
      gita[9].addEventListener("click",()=>{
        con = "TumHiHoA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tum_Hi_Ho__Lyrics__Arijit_Singh_Aashiqui_2_@tseries(256k).mp3";
          songPlayer.style.backgroundColor="rgb(126, 42, 0)";
          songMurqueeStyle.innerText="Tum Hi Ho (From. Aashiqui 2)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="ashiqui-tum-hi-ho-2.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
    });
    TumHiHoA();
    
  
  
})//<-----Arijit end point.


// Punjabi select..............>
Punjabi.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
  // condition chek if Justin opend..........
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
// condition chek if NewRelas opend..........
if(mainImg.classList.contains("seimgNewRe")){
  mainImg.classList.remove("seimgNewRe");
  document.querySelector(".about").classList.remove("about7");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
}
  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgPunjabi");
  iname.innerText="Punjabi Hits";
  document.querySelector(".about").classList.add("about6");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceJustin");
 // song1
  song1.src="artworks-nGq8biEWiLnc-0-t500x500.jpg";
  aboutSonghading[0].innerText="One Love";
  aboutSongMore[0].innerText="Song. Shubh";
 //  song2
  song2.src="a94d20549d17d87b6094c0cd31669e99.500x500x1.jpg";
  aboutSonghading[1].innerText="Excuses";
  aboutSongMore[1].innerText="Song. AP Dhillon,Gurinder Gill,Intense";
 //  song3
  song3.src="artworks-zNkPGU8HOX3r4ltk-j4Vhhw-t500x500.jpg";
  aboutSonghading[2].innerText="King Shit";
  aboutSongMore[2].innerText="Song. Shubh";
 // song4
  song4.src="620x450_20-3.jpg";
  aboutSonghading[3].innerText="Naina";
  aboutSongMore[3].innerText="Song. Diljit Dosanjh, Badshah,Raj Ranj...";
 
 // song1 playing ........>
  let OneLOveP = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "OneLOveP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shubh_-_One_Love__Official_Audio_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(47, 37, 37)";
        songMurqueeStyle.innerText="One Love (Song. Shubh)";
        songDitelsMore.innerText="Shubh";
        playimgSongImg.src="artworks-nGq8biEWiLnc-0-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  OneLOveP();

// song2 Playing.................>
  let ExcusesP = (()=>{
    gita[1].addEventListener("click",()=>{
      con = "ExcusesP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Excuses__Official_Video____AP_Dhillon___Gurinder_Gill___Intense(256k).mp3";
        songPlayer.style.backgroundColor="rgb(101, 38, 78)";
        songMurqueeStyle.innerText="Excuses (Song. AP Dhillon)";
        songDitelsMore.innerText="AP Dhillon";
        playimgSongImg.src="a94d20549d17d87b6094c0cd31669e99.500x500x1.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  ExcusesP();  

// song3 is playing----------->
  let KingShitP = (()=>{
    gita[2].addEventListener("click",()=>{
      con = "KingShitP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shubh_-_King_Shit__Official_Audio_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(44, 58, 71)";
        songMurqueeStyle.innerText="King Shit (Song. Shubh)";
        songDitelsMore.innerText="Shubh";
        playimgSongImg.src="artworks-zNkPGU8HOX3r4ltk-j4Vhhw-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });  
  });
  KingShitP(); 

// song4 is playing----------->
  let NainaP = (()=>{
    gita[3].addEventListener("click",()=>{
      con = "NainaP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Naina_-_Lyrical___Crew___Diljit_Dosanjh,_Badshah___Tabu,_Kareena_Kapoor_K,_Kriti_Sanon___Raj_Ranjodh(256k).mp3";
        songPlayer.style.backgroundColor="rgb(86, 21, 16)";
        songMurqueeStyle.innerText="Naina (Song. Diljit Dosanjh,Badshah,Raj Ranjodh) ";
        songDitelsMore.innerText="Diljit Dosanjh,Badshah,Raj Ranjodh";
        playimgSongImg.src="620x450_20-3.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  NainaP();

  
})// <----------Punjabi select end here.


// Trending select..............>

NewRealis.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
   // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
 
// / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
  // condition chek if Justin opend..........
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
 

  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgNewRe");
  iname.innerText="Trending";
  document.querySelector(".about").classList.add("about7");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceJustin");
 // song1
  song1.src="vicky-kaushal-talks-about-learning-the-steps-of-viral-song--tauba-tauba-154148380-1x1.jpg";
  aboutSonghading[0].innerText="Tauba Tauba";
  aboutSongMore[0].innerText="Song. Karan Aujla";
 //  song2
  song2.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
  aboutSonghading[1].innerText="Soni Soni";
  aboutSongMore[1].innerText="Song. Darshan Raval,Jonita Gandhi";
 //  song3
  song3.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
  aboutSonghading[2].innerText="Aaj Ki Raat";
  aboutSongMore[2].innerText="Song. Sachin-Jigar,Madhubanti Bagc...";
 // song4
  song4.src="620x450_20-3.jpg";
  aboutSonghading[3].innerText="Naina";
  aboutSongMore[3].innerText="Song. Diljit Dosanjh, Badshah,Raj Ranj...";
 
 // song1 playing ........>
  let TaubaTaubaN = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "TaubaTaubaN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tauba_Tauba_-_Karan_Aujla__Lyrics_English_Meaning_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(29, 31, 33)";
        songMurqueeStyle.innerText="Tauba Tauba (From. Bad Newz)";
        songDitelsMore.innerText="Karan Aujla";
        playimgSongImg.src="vicky-kaushal-talks-about-learning-the-steps-of-viral-song--tauba-tauba-154148380-1x1.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  TaubaTaubaN();

// song2 Playing.................>
  let SoniSoniN = (()=>{
    gita[1].addEventListener("click",()=>{
      con = "SoniSoniN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 97, 10)";
        songMurqueeStyle.innerText="Soni Soni (From. Ishq Vishk Rebound)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  SoniSoniN();  

// song3 is playing----------->
  let AjkiRatN = (()=>{
    gita[2].addEventListener("click",()=>{
      con = "AjkiRatN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Aaj_Ki_Raat__LYRICS__-_Stree_2___Tamannaah_Bhatia___Sachin-Jigar___Madhubanti_B___Divya___Amitabh_B(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 59, 74)";
        songMurqueeStyle.innerText="Aaj Ki Raat (From. Stree 2)";
        songDitelsMore.innerText="Sachin-Jigar";
        playimgSongImg.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });  
  });
  AjkiRatN(); 

// song4 is playing----------->
  let NainaP = (()=>{
    gita[3].addEventListener("click",()=>{
      con = "NainaN";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Naina_-_Lyrical___Crew___Diljit_Dosanjh,_Badshah___Tabu,_Kareena_Kapoor_K,_Kriti_Sanon___Raj_Ranjodh(256k).mp3";
        songPlayer.style.backgroundColor="rgb(86, 21, 16)";
        songMurqueeStyle.innerText="Naina (Song. Diljit Dosanjh,Badshah,Raj Ranjodh) ";
        songDitelsMore.innerText="Diljit Dosanjh,Badshah,Raj Ranjodh";
        playimgSongImg.src="620x450_20-3.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  NainaP();

  
})// <----------Trending select end here.



// New realis select..............>
 newRealis.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // condition chek if NewRelas opend..........>
if(mainImg.classList.contains("seimgNewRe")){
  mainImg.classList.remove("seimgNewRe");
  document.querySelector(".about").classList.remove("about7");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
}
// condition chek if Arman opend..........
if(mainImg.classList.contains("seimgArman")){
  mainImg.classList.remove("seimgArman");
  document.querySelector(".about").classList.remove("about10");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
}
  // / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
  // condition chek if Justin opend..........
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
 

  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
 
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgNewRe2");
  iname.innerText="New Releases";
  document.querySelector(".about").classList.add("about8");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceJustin");
 // song1
  song1.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
  aboutSonghading[0].innerText="Aayi Nai";
  aboutSongMore[0].innerText="Song. Sachin-Jigar,Pawan Singh,Simr...";
 //  song2
  song2.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
  aboutSonghading[1].innerText="Soni Soni";
  aboutSongMore[1].innerText="Song. Darshan Raval,Jonita Gandhi";
 //  song3
  song3.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
  aboutSonghading[2].innerText="Aaj Ki Raat";
  aboutSongMore[2].innerText="Song. Sachin-Jigar,Madhubanti Bagc...";
 // song4
  song4.src="Laapataa-Ladies-Hindi-2024-20240213151004-500x500.jpg";
  aboutSonghading[3].innerText="Sajni";
  aboutSongMore[3].innerText="Song. Ram Sampath,Arijit Singh,Pras...";
 
 // song1 playing ........>
  let AayiNaiNew = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "AayiNaiNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Aayi_Nai_Lyrics_-_Stree_2___Pawan_Singh,_Simran_Choudhary,_Divya_Kumar___Sachin-Jigar___Shraddha_K(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 59, 74)";
        songMurqueeStyle.innerText="Aai Nai (From. Stree 2)";
        songDitelsMore.innerText="Sachin-Jigar";
        playimgSongImg.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  AayiNaiNew();

// song2 Playing.................>
  let SoniSoniNew = (()=>{
    gita[1].addEventListener("click",()=>{
      con = "SoniSoniNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
        songPlayer.style.backgroundColor="rgb(65, 97, 10)";
        songMurqueeStyle.innerText="Soni Soni (From. Ishq Vishk Rebound)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  SoniSoniNew();  

// song3 is playing----------->
  let AjkiRatNew = (()=>{
    gita[2].addEventListener("click",()=>{
      con = "AjkiRatNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Aaj_Ki_Raat__LYRICS__-_Stree_2___Tamannaah_Bhatia___Sachin-Jigar___Madhubanti_B___Divya___Amitabh_B(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 59, 74)";
        songMurqueeStyle.innerText="Aaj Ki Raat (From. Stree 2)";
        songDitelsMore.innerText="Sachin-Jigar";
        playimgSongImg.src="stree-2-box-office-collection-day-1-2024-08-6e4665dde2a250b7f811590faef76b8e.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });  
  });
  AjkiRatNew(); 

// song4 is playing----------->
  let SajniNew = (()=>{
    gita[3].addEventListener("click",()=>{
      con = "SajniNew";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="O_Sajni_Re__Lyrics__-_Arijit_Singh,_Ram_Sampath___Laapataa_Ladies___Aamir_Khan_Productions(256k).mp3";
        songPlayer.style.backgroundColor="rgb(27, 74, 47)";
        songMurqueeStyle.innerText="Sajni (From. Laapataa Ladies)";
        songDitelsMore.innerText="Ram Sampath,Arijit Singh";
        playimgSongImg.src="Laapataa-Ladies-Hindi-2024-20240213151004-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  SajniNew();

  
})// <----------New realis select end here.



// Party select..............>

Party.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if NewRelas opend..........>
if(mainImg.classList.contains("seimgNewRe")){
  mainImg.classList.remove("seimgNewRe");
  document.querySelector(".about").classList.remove("about7");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
}
  // / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
  // condition chek if Justin opend..........
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
 // condition chek if ShwanArt opend..........
 if(mainImg.classList.contains("seimgShwan")){
  mainImg.classList.remove("seimgShwan");
  document.querySelector(".about").classList.remove("about11");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
}

  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgParty");
  iname.innerText="Party";
  document.querySelector(".about").classList.add("about9");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceParti");
 // song1
  song1.src="Aavesham-Malayalam-2024-20240514204401-500x500.jpg";
  aboutSonghading[0].innerText="Illuminati";
  aboutSongMore[0].innerText="Song. Sushin Shyam,Dabzee,Vinayak";
 //  song2
  song2.src="vicky-kaushal-talks-about-learning-the-steps-of-viral-song--tauba-tauba-154148380-1x1.jpg";
  aboutSonghading[1].innerText="Tauba Tauba";
  aboutSongMore[1].innerText="Song. Karan Aujla";
 
 // song1 playing ........>
  let IlluminatiP = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "IlluminatiP";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="ILLUMINATI_Lyrics___Aavesham___Sushin_Shyam,_Dabzee___Fahadh_Faasil(256k).mp3";
        songPlayer.style.backgroundColor="rgb(108, 1, 1)";
        songMurqueeStyle.innerText="Illuminati - From. Aavesham";
        songDitelsMore.innerText="Sushin Shyam";
        playimgSongImg.src="Aavesham-Malayalam-2024-20240514204401-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  IlluminatiP();

// song2 Playing.................>
let TaubaTaubaP = (()=>{
  gita[1].addEventListener("click",()=>{
    con = "TaubaTaubaP";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Tauba_Tauba_-_Karan_Aujla__Lyrics_English_Meaning_(256k).mp3";
      songPlayer.style.backgroundColor="rgb(29, 31, 33)";
      songMurqueeStyle.innerText="Tauba Tauba (From. Bad Newz)";
      songDitelsMore.innerText="Karan Aujla";
      playimgSongImg.src="vicky-kaushal-talks-about-learning-the-steps-of-viral-song--tauba-tauba-154148380-1x1.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  });
});
TaubaTaubaP();

})// <--------- Party select end here.





// ArtArijit Click botton............................>
ArtImg1.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if English opend..........
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  // condition chek if Justin opend..........
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
 
  // condition chek if Party opend..........
if(mainImg.classList.contains("seimgParty")){
  mainImg.classList.remove("seimgParty");
  document.querySelector(".about").classList.remove("about9");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
}
  // / condition chek if New realis2 opend...>
if(mainImg.classList.contains("seimgNewRe2")){
  mainImg.classList.remove("seimgNewRe2");
  document.querySelector(".about").classList.remove("about8");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
}
  // condition chek if NewRelas opend..........
 if(mainImg.classList.contains("seimgNewRe")){
   mainImg.classList.remove("seimgNewRe");
   document.querySelector(".about").classList.remove("about7");
   document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  } 
  // condition chek if hidi opend...>
if(mainImg.classList.contains("seimg2")){
  mainImg.classList.remove("seimg2");
  document.querySelector(".about").classList.remove("about2");
}
// condition chek if Punjabi opend..........
if(mainImg.classList.contains("seimgPunjabi")){
  mainImg.classList.remove("seimgPunjabi");
  document.querySelector(".about").classList.remove("about6");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
}

// .........................................................
  clickF();
  mainImg.classList.add("seimgArijit");
  iname.innerText="Arijit Singh";
  document.querySelector(".about").classList.add("about5");
  
// song1
  song1.src="artworks-000558014043-knhq4j-t500x500.jpg";
  aboutSonghading[0].innerText="Tujhe Kitna Chahne Lage";
  aboutSongMore[0].innerText="Song.Arijit Singh,Mithoon";
//  song2
  song2.src="Zalima (1).jpg";
  aboutSonghading[1].innerText="Zaalima";
  aboutSongMore[1].innerText="ong. Arijit Singh,Harshdeep Kaur";
//  song3
  song3.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
  aboutSonghading[2].innerText="O Mahi";
  aboutSongMore[2].innerText="Song.Pritam,Arijit Singh,Irsa...";
// song4
  song4.src="Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg";
  aboutSonghading[3].innerText="Satranga";
  aboutSongMore[3].innerText="Song. Arijit Singh,Shreyas Puranik,Si...";
// song5
  song5.src="Heartless-2014-500x500.jpg";
  aboutSonghading[4].innerText="Main Dhoondne Ko  Zamaane M...";
  aboutSongMore[4].innerText="Shong.Arijit Singh";
// song6
  song6.src="Zalima (4).jpg";
  aboutSonghading[5].innerText="Aye Dil Hai Mushkil";
  aboutSongMore[5].innerText="Song. Arijit Singh";
// song7
  song7.src="Zalima (5).jpg";
  aboutSonghading[6].innerText="Khairiyat";
  aboutSongMore[6].innerText="Song. Arijit Singh";
// song8
  song8.src="Zalima (3).jpg";
  aboutSonghading[7].innerText="Mareez-E-Ishq";
  aboutSongMore[7].innerText="Song. Arijit Singh";
// song9
  song9.src="MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg";
  aboutSonghading[8].innerText="Shayad";
  aboutSongMore[8].innerText="Song. Arijit Singh";
// song10
  song10.src="ashiqui-tum-hi-ho-2.jpg";
  aboutSonghading[9].innerText="Tum Hi Ho";
  aboutSongMore[9].innerText="Song. Arijit Singh";
// song1 playing ........>
  let TujheKitna = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "TujheKitnaA";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tujhe_Kitna_Chahne_Lage_-_Kabir_Singh___Arijit_Singh___Mithoon___Shahid,Kiara___Lyrical_Music_Studio(256k).mp3";
        songPlayer.style.backgroundColor="rgb(75, 1, 12)";
        songMurqueeStyle.innerText="Tujhe Kitna Chahane Lage(From.Kabir Singh)";
        songDitelsMore.innerText="Arijit Singh,Mithoon";
        playimgSongImg.src="artworks-000558014043-knhq4j-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  TujheKitna();

// song2 Playing.................>
  let Zallima = (()=>{
    gita[1].addEventListener("click",()=>{
      con = "ZallimaA";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Zaalima__Lyrics____Raees___Shahrukh_Khan,_Mahira_Khan,_Arijit_Singh,_Harshdeep_Kaur(256k).mp3";
        songPlayer.style.backgroundColor="rgb(83, 77, 53";
        songMurqueeStyle.innerText="Zaalima(Song. Arijit Singh)";
        songDitelsMore.innerText=" Arijit Singh";
        playimgSongImg.src="Zalima (1).jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  Zallima();  

// song3 is playing----------->
  let Omahi = (()=>{
    gita[2].addEventListener("click",()=>{
      con = "OmahiA";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3";
        songPlayer.style.backgroundColor="rgb(34, 3, 3)";
        songMurqueeStyle.innerText="O Mahi (From. Dunki) Song. Arijit Singh";
        songDitelsMore.innerText="Pritam,Arijit Singh,Irsa...";
        playimgSongImg.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });  
  });
  Omahi(); 

// song4 is playing----------->
  let Satranga = (()=>{
    gita[3].addEventListener("click",()=>{
      con = "SatrangaA";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="ANIMAL-_Satranga__Lyrics____Arijit___Ranbir_Kapoor___Rashmika(256k).mp3";
        songPlayer.style.backgroundColor="rgb(12, 40, 60)";
        songMurqueeStyle.innerText="Satranga(From.ANIMAL)";
        songDitelsMore.innerText=" Arijit Singh";
        playimgSongImg.src="Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  Satranga();

  // song5 is playing----------->
  let ZamaaneMe = (()=>{
    gita[4].addEventListener("click",()=>{
      con = "ZamaaneMeA";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3";
        songPlayer.style.backgroundColor="rgb(84, 48, 13)";
        songMurqueeStyle.innerText="Main Dhoondne Ko  Zamaane Mein";
        songDitelsMore.innerText="Arijit Singh";
        playimgSongImg.src="Heartless-2014-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  ZamaaneMe();

  // song6 is playing----------->
  let DilHeMuskilA = (()=>{
    gita[5].addEventListener("click",()=>{
      con = "DilHeMuskilA";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Arijit_Singh,_Pritam_-_Ae_Dil_Hai_Mushkil__lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(106, 14, 57)";
        songMurqueeStyle.innerText="Aye Dil Hai Mushkil(Song. Arijit Singh)";
        songDitelsMore.innerText="Arijit Singh";
        playimgSongImg.src="Zalima (4).jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  DilHeMuskilA();

  // song7 is playing----------->
  let KhairiyatA = (()=>{
    gita[6].addEventListener("click",()=>{
      con = "KhairiyatA";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Khairiyat_-__Lyrics__Arijit_Singh___7clouds_Hindi(256k).mp3";
        songPlayer.style.backgroundColor="rgb(148, 148, 148)";
        songMurqueeStyle.innerText="Khairiyat (From. Chhichhore)";
        songDitelsMore.innerText="Arijit Singh";
        playimgSongImg.src="Zalima (5).jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  KhairiyatA();

  // song8 is playing----------->
  let MarizeA = (()=>{
    gita[7].addEventListener("click",()=>{
      con = "MarizeA";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Mareez-e-Ishq__Lyrics__-_Arijit_Singh_🎵(256k).mp3";
        songPlayer.style.backgroundColor="rgb(6, 40, 50)";
        songMurqueeStyle.innerText="Mareez-E-Ishk(Song. Arijit Singh)";
        songDitelsMore.innerText="Arijit Singh";
        playimgSongImg.src="Zalima (3).jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  MarizeA();

  // song9 is playing----------->
  let ShayadA = (()=>{
    gita[8].addEventListener("click",()=>{
      con = "ShayadA";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Arijit_Singh,_Pritam_-_Shayad__Lyrics___From__Love_Aaj_Kal__(256k).mp3";
        songPlayer.style.backgroundColor="rgb(97, 4, 63)";
        songMurqueeStyle.innerText="Shayad (Song. Arijit Singh)";
        songDitelsMore.innerText="Arijit Singh";
        playimgSongImg.src="MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  ShayadA();

// song10 is playing----------->
  let TumHiHoA = (()=>{
    gita[9].addEventListener("click",()=>{
      con = "TumHiHoA";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tum_Hi_Ho__Lyrics__Arijit_Singh_Aashiqui_2_@tseries(256k).mp3";
        songPlayer.style.backgroundColor="rgb(126, 42, 0)";
        songMurqueeStyle.innerText="Tum Hi Ho (From. Aashiqui 2)";
        songDitelsMore.innerText="Arijit Singh";
        playimgSongImg.src="ashiqui-tum-hi-ho-2.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  TumHiHoA();
  })//<-----ArtArijit end point.



// ArmanMalikArt  select..............>

ArtImg2.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
  // condition chek if Justin opend..........
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }

  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
    
  // condition chek if NewRelas opend..........
   if(mainImg.classList.contains("seimgNewRe")){
    mainImg.classList.remove("seimgNewRe");
     document.querySelector(".about").classList.remove("about7");
     document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
    }

  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgArman");
  iname.innerText="Armaan Malik";
  document.querySelector(".about").classList.add("about10");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceJustin");
 // song1
  song1.src="artworks-000157559404-l9nc3o-t500x500.jpg";
  aboutSonghading[0].innerText="Hua Hain Aaj Pehli Baar";
  aboutSongMore[0].innerText="Song. Armaan Malik";
 //  song2
  song2.src="Hate-Story-3-Hindi-2015-500x500.jpg";
  aboutSonghading[1].innerText="Wajah Tum Ho";
  aboutSongMore[1].innerText="Song. Armaan Malik";
 //  song3
  song3.src="Azhar-1-Hindi-2016-500x500.jpg";
  aboutSonghading[2].innerText="Bol Do Na Zara";
  aboutSongMore[2].innerText="Song. Armaan Malik";
 // song4
  song4.src="Hate-Story-3-Hindi-2015-500x500.jpg";
  aboutSonghading[3].innerText="Tumhe Apna Banane Ka";
  aboutSongMore[3].innerText="Song. Armaan Malik";
 
 // song1 playing ........>
  let HuaHeAjAr = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "HuaHeAjAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Hua_Hain_Aaj_Pehli_Baar_Lyrics___Sanam_Re___Pulkit_Samrat,Urvashi_Rautela___Divya_Khosla_Kumaar(256k).mp3";
        songPlayer.style.backgroundColor="rgb(62, 27, 13)";
        songMurqueeStyle.innerText="Hua Hain Aaj Pehli Baar";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="artworks-000157559404-l9nc3o-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  HuaHeAjAr();

// song2 Playing.................>
  let WajahTumHoAr = (()=>{
    gita[1].addEventListener("click",()=>{
      con = "WajahTumHoAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="WAJAH_TUM_HO_LYRICS___ARMAAN_MALIK___BAMAN,_MANOJ_MUNTASHIR___HATE_STORY_3_S-series(256k).mp3";
        songPlayer.style.backgroundColor="rgb(16, 60, 67)";
        songMurqueeStyle.innerText="Wajah Tum Ho (Song. Armaan Malik)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Hate-Story-3-Hindi-2015-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  WajahTumHoAr();  

// song3 is playing----------->
  let BolDoAr = (()=>{
    gita[2].addEventListener("click",()=>{
      con = "BolDoAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="bol_do_na_zara_song_lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(5, 72, 106)";
        songMurqueeStyle.innerText="Bol Do Na Zara";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Azhar-1-Hindi-2016-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });  
  });
  BolDoAr(); 

// song4 is playing----------->
  let TumheApnaAr = (()=>{
    gita[3].addEventListener("click",()=>{
      con = "TumheApnaAr";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tumhe_Apna_Banane_Ka_Lyrics___Armaan_Malik___Neeti_M___Amaal_Malik___Hate_Story_3_Song___RB_Lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(16, 60, 67)";
        songMurqueeStyle.innerText="Tumhe Apna Banane Ka";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Hate-Story-3-Hindi-2015-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  TumheApnaAr();

  
})// <----------ArmanMalikArt select end here.




// ShwanMendisArt select..............>

ArtImg3.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if NewRelas opend..........>
if(mainImg.classList.contains("seimgNewRe")){
  mainImg.classList.remove("seimgNewRe");
  document.querySelector(".about").classList.remove("about7");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
}
  // / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
  // condition chek if Justin opend..........
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
 

  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgShwan");
  iname.innerText="Shawn Mendes";
  document.querySelector(".about").classList.add("about11");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceParti");
 // song1
  song1.src="artworks-000236445080-fuwoth-t500x500.jpg";
  aboutSonghading[0].innerText="There's Nothing Holdin'Me Back";
  aboutSongMore[0].innerText="Song. Shawn Mendes";
 //  song2
  song2.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
  aboutSonghading[1].innerText="Senorita";
  aboutSongMore[1].innerText="Song. Shawn Mendes,Camila Cabello";
 
 // song1 playing ........>
  let NothingHoldinMeShawn = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "NothingHoldinMeShawn";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Shawn_Mendes_‒_There_s_Nothing_Holding_Me_Back__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(53, 9, 60)";
        songMurqueeStyle.innerText="There's Nothing Holdin'Me Back";
        songDitelsMore.innerText="Shawn Mendes";
        playimgSongImg.src="artworks-000236445080-fuwoth-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  NothingHoldinMeShawn();

// song2 Playing.................>
let SenoritaShwan = (()=>{
  gita[1].addEventListener("click",()=>{
    con = "SenoritaShwan";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Shawn_Mendes,_Camila_Cabello_-_Señorita__Lyrics__Letra(256k).mp3";
      songPlayer.style.backgroundColor="rgb(72, 2, 2)";
      songMurqueeStyle.innerText="Senorita (Song. Shawn Mendes,Camila Cabello)";
      songDitelsMore.innerText="Shawn Mendes,Camila Cabello";
      playimgSongImg.src="Shawn_Mendes_and_Camila_Cabello_-_Señorita.png";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  });
});
SenoritaShwan();

})// <--------- ShwanMendisArt select end here.




// DarshanRaval  select..............>

ArtImg4.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
  // condition chek if Justin opend..........
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }

  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
    
  // condition chek if NewRelas opend..........
   if(mainImg.classList.contains("seimgNewRe")){
    mainImg.classList.remove("seimgNewRe");
     document.querySelector(".about").classList.remove("about7");
     document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
    }

  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgDarshan");
  iname.innerText="Darshan Raval";
  document.querySelector(".about").classList.add("about12");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceJustin");
 // song1
  song1.src="Ek-Tarfa-Hindi-2020-20200711220013-500x500.jpg";
  aboutSonghading[0].innerText="Ek Tarfa";
  aboutSongMore[0].innerText="Song. Darshan Raval";
 //  song2
  song2.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
  aboutSonghading[1].innerText="Soni Soni";
  aboutSongMore[1].innerText="Song. Darshan Raval,Jonita Gandhi";
 //  song3
  song3.src="IMG_20240819_091715.jpg";
  aboutSonghading[2].innerText="Hawa Banke";
  aboutSongMore[2].innerText="Song. Darshan Raval";
 // song4
  song4.src="Tera-Zikr-Hindi-2017-20171108125619-500x500.jpg";
  aboutSonghading[3].innerText="Tera Zikr";
  aboutSongMore[3].innerText="Song. Darshan Raval";
 
 // song1 playing ........>
  let EkTarfadarsan = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "EkTarfadarsan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Darshan_Raval_-_Ek_Tarfa_Full_Song___Lyrics____Youngveer__(256k).mp3";
        songPlayer.style.backgroundColor="rgb(28, 52, 97)";
        songMurqueeStyle.innerText="Ek Tarfa (Song. Darshan Raval)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="Ek-Tarfa-Hindi-2020-20200711220013-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  EkTarfadarsan();

// song2 Playing.................>
let SoniSoniDarshan = (()=>{
  gita[1].addEventListener("click",()=>{
    con = "SoniSoniDarshan";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
      songPlayer.style.backgroundColor="rgb(94, 123, 14)";
      songMurqueeStyle.innerText="Soni Soni(From.Ishq Vishk Rebound)";
      songDitelsMore.innerText="Darshan Raval";
      playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  });
});
SoniSoniDarshan();  

// song3 is playing----------->
  let HawaBankeDarshan = (()=>{
    gita[2].addEventListener("click",()=>{
      con = "HawaBankeDarshan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Darshan_Raval_-_Hawa_Banke__LYRICS____Official_Music_Video____Indie_Music_Label___T_SERIES_nabeel(256k).mp3";
        songPlayer.style.backgroundColor="rgb(66, 101, 138)";
        songMurqueeStyle.innerText="Hawa Banke (Song. Darshan Raval)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="IMG_20240819_091715.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });  
  });
  HawaBankeDarshan(); 

// song4 is playing----------->
  let TeraZikarDarshan = (()=>{
    gita[3].addEventListener("click",()=>{
      con = "TeraZikarDarshan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tera_Zikr_Lyrics___Darshan_Raval____Sourav_Roy___Mujhe_khone_ke_baad_ik_din_Tum_mujhe_yaad_karoge(256k).mp3";
        songPlayer.style.backgroundColor="rgb(30, 33, 56)";
        songMurqueeStyle.innerText="Tera Zikr (Song. Darshan Raval)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Tera-Zikr-Hindi-2017-20171108125619-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  TeraZikarDarshan();

  
})// <----------DarsanRaval select end here.




// Justin bieber Art select..............>
ArtImg5.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
    // condition chek if NewRelas opend..........
   if(mainImg.classList.contains("seimgNewRe")){
    mainImg.classList.remove("seimgNewRe");
     document.querySelector(".about").classList.remove("about7");
     document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
    }

  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgJustin");
  iname.innerText="Justin Bieber";
  document.querySelector(".about").classList.add("about4");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceJustin");
 // song1
  song1.src=".trashed-1726242006-a0725618779_10.jpg";
  aboutSonghading[0].innerText="STAY";
  aboutSongMore[0].innerText="Song. The Kid LAROI,Justin Bieber";
 //  song2
  song2.src="artworks-RuTdLJxuEtrUeBVN-ZdTmlA-t500x500.jpg";
  aboutSonghading[1].innerText="Baby";
  aboutSongMore[1].innerText="Song. Justin Bieber,Ludacris";
 //  song3
  song3.src="artworks-000135333648-1lmjbw-t500x500.jpg";
  aboutSonghading[2].innerText="Sorry";
  aboutSongMore[2].innerText="Song. Justin Bieber";
 // song4
  song4.src="artworks-000665416576-rrvfrt-t500x500.jpg";
  aboutSonghading[3].innerText="Yummy";
  aboutSongMore[3].innerText="Song. Justin Bieber";
 
 // song1 playing ........>
  let Stay = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "StayJ";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="The_Kid_LAROI,_Justin_Bieber_-_Stay__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(15, 82, 102)";
        songMurqueeStyle.innerText="STAY (With Justin Bieber)";
        songDitelsMore.innerText="The Kid  LAROI,Justin Bieber";
        playimgSongImg.src=".trashed-1726242006-a0725618779_10.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  Stay();

// song2 Playing.................>
  let Baby = (()=>{
    gita[1].addEventListener("click",()=>{
      con = "Baby";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="JUSTIN_BIEBER_-_Baby_feat._Ludacris_Lyrics(256k).mp3";
        songPlayer.style.backgroundColor="rgb(69, 26, 109)";
        songMurqueeStyle.innerText="Baby (Song. Justi Bieber,Ludacris)";
        songDitelsMore.innerText="Justi Bieber,Ludacris";
        playimgSongImg.src="artworks-RuTdLJxuEtrUeBVN-ZdTmlA-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  Baby();  

// song3 is playing----------->
  let Sorry = (()=>{
    gita[2].addEventListener("click",()=>{
      con = "Sorry";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Justin_Bieber_-_Sorry__Lyrics_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(26, 96, 109)";
        songMurqueeStyle.innerText="Sorry (Song. Justin Bieber)";
        songDitelsMore.innerText="Justin Bieber";
        playimgSongImg.src="artworks-000135333648-1lmjbw-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });  
  });
  Sorry(); 

// song4 is playing----------->
  let Yummy = (()=>{
    gita[3].addEventListener("click",()=>{
      con = "Yummy";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Justin_Bieber_-_Yummy__Lyric_Video_(256k).mp3";
        songPlayer.style.backgroundColor="rgb(118, 69, 106)";
        songMurqueeStyle.innerText="Yummy (Song. Justin Bieber)";
        songDitelsMore.innerText="Justin Bieber";
        playimgSongImg.src="artworks-000665416576-rrvfrt-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  Yummy();

  
})// <----------Justin bieber Art select end here.



// Charli select..............>
ArtImg6.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgDarshan")){
    mainImg.classList.remove("seimgDarshan");
    document.querySelector(".about").classList.remove("about12");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if NewRelas opend..........>
if(mainImg.classList.contains("seimgNewRe")){
  mainImg.classList.remove("seimgNewRe");
  document.querySelector(".about").classList.remove("about7");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
}
  // / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
  // condition chek if Justin opend..........
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
 // condition chek if ShwanArt opend..........
 if(mainImg.classList.contains("seimgShwan")){
  mainImg.classList.remove("seimgShwan");
  document.querySelector(".about").classList.remove("about11");
  document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
}

  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgCharli");
  iname.innerText="Charlie Puth";
  document.querySelector(".about").classList.add("about14");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceParti");
 // song1
  song1.src="1200px-Charlie_Puth_-_Attention_(Official_Single_Cover).png";
  aboutSonghading[0].innerText="Attention";
  aboutSongMore[0].innerText="Song. Charlie Puth";
 //  song2
  song2.src="artworks-000163042871-vrnc7n-t500x500.jpg";
  aboutSonghading[1].innerText="We Don't Talk Anymore";
  aboutSongMore[1].innerText="Song. Charlie Puth,Selena Gomez";
 
 // song1 playing ........>
  let AttentionCharli = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "AttentionCharli";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_Attention_[Official_Video](256k).mp3";
        songPlayer.style.backgroundColor="rgb(8, 65, 78)";
        songMurqueeStyle.innerText="Attention(Song.Charlie Puth)";
        songDitelsMore.innerText="Charlie Puth";
        playimgSongImg.src="1200px-Charlie_Puth_-_Attention_(Official_Single_Cover).png";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  AttentionCharli();  

// song2 Playing.................>
let WeDontCharli = (()=>{
    gita[1].addEventListener("click",()=>{
      con = "WeDontCharli";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Charlie_Puth_-_We_Don_t_Talk_Anymore__Lyrics__feat._Selena_Gomez(256k).mp3";
        songPlayer.style.backgroundColor="rgb(14, 29, 8)";
        songMurqueeStyle.innerText="We Don't Talk Anymore(feat.Selena Gomez)";
        songDitelsMore.innerText="Charlie Puth,Selena Gomez";
        playimgSongImg.src="artworks-000163042871-vrnc7n-t500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  WeDontCharli();

})// <---------  charli select end here.







// Recomended Select Playlist----------------------------------------->
// Song1...........................
rco1.addEventListener("click",()=>{
        con = "SoniSoni";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
          songPlayer.style.backgroundColor="rgb(94, 123, 14)";
          songMurqueeStyle.innerText="Soni Soni(From.Ishq Vishk Rebound)";
          songDitelsMore.innerText="Darshan Raval";
          playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });
// song2...........................
rco2.addEventListener("click",()=>{
        con = "SatrangaA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="ANIMAL-_Satranga__Lyrics____Arijit___Ranbir_Kapoor___Rashmika(256k).mp3";
          songPlayer.style.backgroundColor="rgb(12, 40, 60)";
          songMurqueeStyle.innerText="Satranga(From.ANIMAL)";
          songDitelsMore.innerText=" Arijit Singh";
          playimgSongImg.src="Satranga-From-ANIMAL-Hindi-2023-20231027131032-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      });   
  // song3...........................
    rco3.addEventListener("click",()=>{
        con = "Raataa";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Jubin_Nautiyal_-_Raataan_Lambiyan__Lyrics_____Asees_Kaur____Tanishk_Bagchi____Shershaah(256k).mp3";
          songPlayer.style.backgroundColor="rgb(100, 40, 73)";
          songMurqueeStyle.innerText="Raataan Lambiyan(From. Shershaah)";
          songDitelsMore.innerText="Jubin Nautiyal";
          playimgSongImg.src="Raataan-Lambiyan-From-Shershaah--Hindi-2021-20210729181107-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
      }); 

      // song4...........................
    rco4.addEventListener("click",()=>{
      con = "KaiseHua";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="KAISE_HUA_LYRICS___Kabir_Singh___Shahid_Kapoor,_Kiara_Advani___Vishal_Mishra___Manoj_Muntashir__(256k).mp3";
          songPlayer.style.backgroundColor="rgb(89, 31, 6)";
          songMurqueeStyle.innerText="Kaise Hua(From.Kabir Singh)";
          songDitelsMore.innerText="Vishal Mishra";
          playimgSongImg.src="artworks-000551838054-af70cv-t500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }); 

     // song5...........................
     rco5.addEventListener("click",()=>{
      con = "Nainareco";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Naina_-_Lyrical___Crew___Diljit_Dosanjh,_Badshah___Tabu,_Kareena_Kapoor_K,_Kriti_Sanon___Raj_Ranjodh(256k).mp3";
        songPlayer.style.backgroundColor="rgb(86, 21, 16)";
        songMurqueeStyle.innerText="Naina (Song. Diljit Dosanjh,Badshah,Raj Ranjodh) ";
        songDitelsMore.innerText="Diljit Dosanjh,Badshah,Raj Ranjodh";
        playimgSongImg.src="620x450_20-3.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    }); 

    // song6...........................
    rco6.addEventListener("click",()=>{
      con = "ShayadA";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Arijit_Singh,_Pritam_-_Shayad__Lyrics___From__Love_Aaj_Kal__(256k).mp3";
          songPlayer.style.backgroundColor="rgb(97, 4, 63)";
          songMurqueeStyle.innerText="Shayad (Song. Arijit Singh)";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="MV5BMjNhYzc0YmItOGZjOS00NWJlLWE3ZTEtNGI3MzAxNGYwZWExXkEyXkFqcGdeQXVyMTA5NzIyMDY5._V1_.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
    }); 

  // disco img Selection.apply...............................>
  // song1...........................
   discoImg1.addEventListener("click",()=>{
    con = "Stereo";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Edward_Maya__feat._Vika_Jigulina__-_Stereo_Love__Lyrics_(256k).mp3";
      songPlayer.style.backgroundColor="rgb(44, 73, 101)";
      songMurqueeStyle.innerText="Stereo Love(Song.Edward Maya,Vika Jigulina)";
      songDitelsMore.innerText="Edward Maya,Vika Jigulina";
      playimgSongImg.src="Stereo-Love-English-2010-20190924081753-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
    }); 
    // song2...........................
   discoImg2.addEventListener("click",()=>{
    con = "Omahi";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="O_Maahi_O_Maahi__LYRICS__-_Arijit_Singh___Shah_R_K___Taapsee_P___Dunki_Drop_5___Irshad_Kamil__Pritam(256k).mp3";
      songPlayer.style.backgroundColor="rgb(34, 3, 3)";
      songMurqueeStyle.innerText="O Mahi (From. Dunki) Song. Arijit Singh";
      songDitelsMore.innerText="Song.Pritam,Arijit Singh,Irsa...";
      playimgSongImg.src="O-Maahi-From-Dunki-Hindi-2023-20231211171007-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  }); 
  // song3...........................
  discoImg3.addEventListener("click",()=>{
    con = "Boldo";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="bol_do_na_zara_song_lyrics(256k).mp3";
          songPlayer.style.backgroundColor="rgb(3, 62, 104)";
          songMurqueeStyle.innerText="Bol Do Na Zara(From.Azhar)";
          songDitelsMore.innerText="Armaan Malik";
          playimgSongImg.src="Azhar-1-Hindi-2016-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }); 
  
  // song4...........................
  discoImg4.addEventListener("click",()=>{
    con = "Yimmy";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Yimmy_Yimmy_-_Tayc___Shreya_Ghoshal___Jacqueline_Fernandez___Rajat_N___Rana___Nyadjiko___Anshul_Garg(256k).mp3";
          songPlayer.style.backgroundColor="rgb(108, 94, 102)";
          songMurqueeStyle.innerText="Yimmy Yimmy (Song. Tayc,Shreya Ghoshal)";
          songDitelsMore.innerText="Tayc,Shreya Ghoshal";
          playimgSongImg.src="Yimmy-Yimmy-Tayc-500-500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }); 
  // song5...........................
  discoImg5.addEventListener("click",()=>{
    con = "TujheKitna";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Tujhe_Kitna_Chahne_Lage_-_Kabir_Singh___Arijit_Singh___Mithoon___Shahid,Kiara___Lyrical_Music_Studio(256k).mp3";
          songPlayer.style.backgroundColor="rgb(75, 1, 12)";
          songMurqueeStyle.innerText="Tujhe Kitna Chahane Lage(From.Kabir Singh)";
          songDitelsMore.innerText="Arijit Singh,Mithoon";
          playimgSongImg.src="artworks-000558014043-knhq4j-t500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
            marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
              audio.play();
             }
          },1200);
        },100);
  }); 
  // song6...........................
  discoImg6.addEventListener("click",()=>{
    con = "ZamaaneMe";
        setTimeout(()=>{
          songchangingF();
          songplayerAfterF();
          songPlayer.classList.add("sPlayerD");
          audio.src="Main_Dhoondne_Ko_Zamaane_Mein__Lyrics__-_Arijit_Singh(256k).mp3";
          songPlayer.style.backgroundColor="rgb(84, 48, 13)";
          songMurqueeStyle.innerText="Main Dhoondne Ko  Zamaane Mein";
          songDitelsMore.innerText="Arijit Singh";
          playimgSongImg.src="Heartless-2014-500x500.jpg";
          if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
          }
          setTimeout(()=>{
            if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
             audio.play();
            }
          },1200);
        },200);
  }); 

  // DarshanRavalBox  select..............>

  DarshanVBox.addEventListener("click",(e)=>{
  e.stopPropagation();
  // condition chek if Hindi opend...
  if(mainImg.classList.contains("seimg2")){
    mainImg.classList.remove("seimg2");
    document.querySelector(".about").classList.remove("about2");
  }
  // / condition chek if New realis2 opend...>
  if(mainImg.classList.contains("seimgNewRe2")){
    mainImg.classList.remove("seimgNewRe2");
    document.querySelector(".about").classList.remove("about8");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Charli opend..........
  if(mainImg.classList.contains("seimgCharli")){
    mainImg.classList.remove("seimgCharli");
    document.querySelector(".about").classList.remove("about14");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
  // condition chek if Arman opend..........
  if(mainImg.classList.contains("seimgArman")){
    mainImg.classList.remove("seimgArman");
    document.querySelector(".about").classList.remove("about10");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  // condition chek if Party opend..........
  if(mainImg.classList.contains("seimgParty")){
    mainImg.classList.remove("seimgParty");
    document.querySelector(".about").classList.remove("about9");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  // / condition chek if English opend...>
  if(mainImg.classList.contains("seimgEnglish")){
    mainImg.classList.remove("seimgEnglish");
    document.querySelector(".about").classList.remove("about3");
  }
  // condition chek if Justin opend..........
  if(mainImg.classList.contains("seimgJustin")){
    mainImg.classList.remove("seimgJustin");
    document.querySelector(".about").classList.remove("about4");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }

  // condition chek if ShwanArt opend..........
  if(mainImg.classList.contains("seimgShwan")){
    mainImg.classList.remove("seimgShwan");
    document.querySelector(".about").classList.remove("about11");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceParti");
  }
  
    
  // condition chek if NewRelas opend..........
   if(mainImg.classList.contains("seimgNewRe")){
    mainImg.classList.remove("seimgNewRe");
     document.querySelector(".about").classList.remove("about7");
     document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
    }

  // / condition chek if Arijit  opend...>
  if(mainImg.classList.contains("seimgArijit")){
    mainImg.classList.remove("seimgArijit");
    document.querySelector(".about").classList.remove("about5");
  }
  // condition chek if Punjabi opend..........
  if(mainImg.classList.contains("seimgPunjabi")){
    mainImg.classList.remove("seimgPunjabi");
    document.querySelector(".about").classList.remove("about6");
    document.querySelector(".ExtraSpaceCutting").classList.remove("ExtraSpaceJustin");
  }
  
  // .............................................
  clickF();
  mainImg.classList.add("seimgDarshan");
  iname.innerText="Darshan Raval";
  document.querySelector(".about").classList.add("about12");
  document.querySelector(".ExtraSpaceCutting").classList.add("ExtraSpaceJustin");
 // song1
  song1.src="Ek-Tarfa-Hindi-2020-20200711220013-500x500.jpg";
  aboutSonghading[0].innerText="Ek Tarfa";
  aboutSongMore[0].innerText="Song. Darshan Raval";
 //  song2
  song2.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
  aboutSonghading[1].innerText="Soni Soni";
  aboutSongMore[1].innerText="Song. Darshan Raval,Jonita Gandhi";
 //  song3
  song3.src="IMG_20240819_091715.jpg";
  aboutSonghading[2].innerText="Hawa Banke";
  aboutSongMore[2].innerText="Song. Darshan Raval";
 // song4
  song4.src="Tera-Zikr-Hindi-2017-20171108125619-500x500.jpg";
  aboutSonghading[3].innerText="Tera Zikr";
  aboutSongMore[3].innerText="Song. Darshan Raval";
 
 // song1 playing ........>
  let EkTarfadarsan = (()=>{
    gita[0].addEventListener("click",()=>{
      con = "EkTarfadarsan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Darshan_Raval_-_Ek_Tarfa_Full_Song___Lyrics____Youngveer__(256k).mp3";
        songPlayer.style.backgroundColor="rgb(28, 52, 97)";
        songMurqueeStyle.innerText="Ek Tarfa (Song. Darshan Raval)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="Ek-Tarfa-Hindi-2020-20200711220013-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });
  });
  EkTarfadarsan();

// song2 Playing.................>
let SoniSoniDarshan = (()=>{
  gita[1].addEventListener("click",()=>{
    con = "SoniSoniDarshan";
    setTimeout(()=>{
      songchangingF();
      songplayerAfterF();
      songPlayer.classList.add("sPlayerD");
      audio.src="Soni_Soni___Ishq_Vishk_Rebound___Rohit_Saraf,_Pashmina__@DarshanRavalDZ@jonitamusic,_Rochak,Gurpreet(256k).mp3";
      songPlayer.style.backgroundColor="rgb(94, 123, 14)";
      songMurqueeStyle.innerText="Soni Soni(From.Ishq Vishk Rebound)";
      songDitelsMore.innerText="Darshan Raval";
      playimgSongImg.src="Soni-Soni-From-Ishq-Vishk-Rebound-Hindi-2024-20240619164934-500x500.jpg";
      if(marquee.scrollWidth>marquee.clientWidth){
        marquee.classList.add("overflow");
      }
      setTimeout(()=>{
        if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
          audio.play();
         }
      },1200);
    },100);
  });
});
SoniSoniDarshan();  

// song3 is playing----------->
  let HawaBankeDarshan = (()=>{
    gita[2].addEventListener("click",()=>{
      con = "HawaBankeDarshan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Darshan_Raval_-_Hawa_Banke__LYRICS____Official_Music_Video____Indie_Music_Label___T_SERIES_nabeel(256k).mp3";
        songPlayer.style.backgroundColor="rgb(66, 101, 138)";
        songMurqueeStyle.innerText="Hawa Banke (Song. Darshan Raval)";
        songDitelsMore.innerText="Darshan Raval";
        playimgSongImg.src="IMG_20240819_091715.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });  
  });
  HawaBankeDarshan(); 

// song4 is playing----------->
  let TeraZikarDarshan = (()=>{
    gita[3].addEventListener("click",()=>{
      con = "TeraZikarDarshan";
      setTimeout(()=>{
        songchangingF();
        songplayerAfterF();
        songPlayer.classList.add("sPlayerD");
        audio.src="Tera_Zikr_Lyrics___Darshan_Raval____Sourav_Roy___Mujhe_khone_ke_baad_ik_din_Tum_mujhe_yaad_karoge(256k).mp3";
        songPlayer.style.backgroundColor="rgb(30, 33, 56)";
        songMurqueeStyle.innerText="Tera Zikr (Song. Darshan Raval)";
        songDitelsMore.innerText="Armaan Malik";
        playimgSongImg.src="Tera-Zikr-Hindi-2017-20171108125619-500x500.jpg";
        if(marquee.scrollWidth>marquee.clientWidth){
          marquee.classList.add("overflow");
        }
        setTimeout(()=>{
          if(!document.querySelector(".pushi").classList.contains("playpusDisplaNone")){
            audio.play();
           }
        },1200);
      },100);
    });   
  });
  TeraZikarDarshan();

  
})// <----------DarsanRaval select end here.