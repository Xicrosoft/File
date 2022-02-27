const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    theme: '#242424',
    audio: [
      {
        name: "Nevada",
        artist: 'Vicetone',
        url: 'http://m10.music.126.net/20220227205900/0cd0dd1bae3e5a4daf18d662888bc7de/ymusic/d336/66b8/93f6/53a73538fb4a283e3694ca5e48e4f9c8.mp3',
        cover: 'http://p2.music.126.net/ifxF9yxIzU1-lZAm9GscWg==/109951163311434257.jpg',
        lrc:  '../LRC/Nevada.lrc',

      },
      {
        name: 'Good Time',
        artist: 'Owl City',
        url: 'http://m701.music.126.net/20220227211608/84ebeddd4925479aa91bc18f8200e9dc/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/4520726144/d1bc/6a58/77cf/5f30951a8cfecf6148fb9ec4ea421592.mp3',
        cover: 'http://p1.music.126.net/-RxMP9fw2BidKc5-_H5njw==/109951166421345001.jpg',
        lrc:  '../LRC/Good_Time.lrc',
      },
      {
        name: 'Diary',
        artist: 'Production Manic',
        url: 'http://m10.music.126.net/20220227212028/3da589dc9a80241ae7bd4cd067dee4a0/ymusic/5409/075a/0e0e/cc7d5259a3002958b0d49db10410e69d.mp3',
        cover: 'http://p2.music.126.net/-4GiPoFPOI6dV-f9jnUScQ==/109951164102703587.jpg',
      },
      {
        name: 'Normal No More',
        artist: 'TYSM',
        url: 'http://m701.music.126.net/20220227212538/cfddbcc059b99f6e46c7f49f6bbe14f9/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/2169909872/a77a/b9d9/e8f3/6e08ea4a5cac7457168d9c2360f2840c.mp3',
        cover: 'http://p1.music.126.net/s3mKaXDECHZlxi43d7bkCA==/109951164905500417.jpg',
        lrc:  '../LRC/Normal_No_More',
      },
      {
        name: '溯Reverse',
        artist: 'CORSAK',
        url: 'http://m701.music.126.net/20220227212837/dc7852cf3846f65d2c6e5473c68f41ba/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1693946141/86ba/ef26/45ef/ca724d48c2907186011302caf2543457.mp3',
        cover: 'http://p2.music.126.net/awh9K8lfyyOtr5X0ysgBFw==/109951164802649972.jpg',
        lrc:  '../LRC/Reverse.lrc',
      },
      {
        name: 'Timber',
        artist: 'CDM Project',
        url: 'http://m801.music.126.net/20220227213030/1b3eb5f52a7f7c4c60507b8c5261db96/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/12196032223/2918/8575/a47b/6c6a5bbda6d32c213cf8b6ab67344211.mp3',
        cover: 'http://p2.music.126.net/WjVj_XCesBeCkDUOsg0vWA==/109951163804817824.jpg',
        lrc:  '../LRC/Timber.lrc',
      },
      {
        name: 'L.I.F.E.',
        artist: 'Remady',
        url: 'http://m801.music.126.net/20220227213247/f8dfca3cb1d8b7d184e7ac08c5771db7/jdymusic/obj/wo3DlMOGwrbDjj7DisKw/8934270397/5c3f/eec2/6012/14f1e361df77f3778f77d33c7ce9232d.mp3',
        cover: 'http://p2.music.126.net/WjVj_XCesBeCkDUOsg0vWA==/109951163804817824.jpg',
        lrc:  '../LRC/L.I.F.E..lrc',
      },
      {
        name: 'Breathe',
        artist: 'EMBRZ',
        url: 'http://m10.music.126.net/20220227213443/c2fb6806f0c9dd7d4f2d8ed67e763840/ymusic/obj/w5zDlMODwrDDiGjCn8Ky/3417981937/69db/0c3a/8979/3187dc5def0cf81e65ed553116861915.mp3',
        cover: 'http://p2.music.126.net/02aMvvyzD_jqzt1q5i-Nfg==/109951164643210368.jpg',
        lrc:  '../LRC/Breathe.lrc',
      },
    ]
});