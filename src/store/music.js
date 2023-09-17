export const musicStore = {
  namespaced: true,
  state: () => ({
    audio: "",
    isplaying: false,
    isplayervisible: true,
    currentindex: 0,
    lists: [
      {
        id: 1,
        name: "ba to ghashange",
        artistName: "HoroshBand",
        albumName: "single",
        year: 2021,
        src: `https://dl.pop-music.ir/images/1402/Tir/Hoorosh-Mehdi-Darabi-Bato-Ghashangeh.jpg`,
        songSrc: `https://dl.pop-music.ir/music/1402/Tir/Hoorosh-Mehdi%20Darabi%20-%20Bato%20Ghashangeh%20(128).mp3`,
        favorite: false,
      },
      {
        id: 2,
        name: "yeki bod yeki nabod",
        artistName: "Sina Shabankhani",
        albumName: "single",
        year: 2001,
        src: `https://dl.pop-music.ir/images/1402/Tir/Sina-Shabankhani-Yeki-Bood-Yeki-Nabood.jpg`,
        songSrc: `https://dl.pop-music.ir/music/1402/Tir/Sina%20Shabankhani%20-%20Yeki%20Bood%20Yeki%20Nabood%20(128).mp3`,
        favorite: true,
      },
      {
        id: 3,
        name: "ghayegh chobi",
        artistName: "Mordad Mahor",
        albumName: "single",
        year: 2013,
        src: `https://dl.pop-music.ir/images/1402/Mordad/Mahoor-Ghayeghe-Choobi.jpg`,
        songSrc: `https://dl.pop-music.ir/music/1402/Mordad/Mahoor%20-%20Ghayeghe%20Choobi%20(128).mp3`,
        favorite: false,
      },
      {
        id: 4,
        name: "koja berm",
        artistName: "Sayman",
        albumName: "single",
        year: 2021,
        src: `https://music-fa.com/wp-content/uploads/2023/09/Sayman-Koja-Beram-300x300.jpg`,
        songSrc: `https://dls.music-fa.com/tagdl/1402/Sayman%20-%20Koja%20Beram%20(320).mp3`,
        favorite: false,
      },
      {
        id: 5,
        name: "yad to",
        artistName: "saeid tehrani",
        albumName: "single",
        year: 2021,
        src: `https://music-fa.com/wp-content/uploads/2023/09/Saeed-Tehrani-Yade-To-300x300.jpg`,
        songSrc: `https://dls.music-fa.com/tagdl/1402/Saeed%20Tehrani%20-%20Yade%20To%20(320).mp3`,
        favorite: false,
      },
      {
        id: 6,
        name: "jazebeh",
        artistName: "naser zeinali",
        albumName: "single",
        year: 2021,
        src: `https://music-fa.com/wp-content/uploads/2023/06/Naser-Zeynali-Jazebe-Music-fa.com_-300x300.jpg`,
        songSrc: `https://ups.music-fa.com/tagdl/1402/Naser%20Zeynali%20-%20Jazebe%20(320).mp3`,
        favorite: false,
      },
      {
        id: 7,
        name: "zakhm kary",
        artistName: "mohsen chavoshi",
        albumName: "single",
        year: 2021,
        src: `https://music-fa.com/wp-content/uploads/2018/12/M-chavoshi498653464837236857234523784562-150x150.jpg`,
        songSrc: `https://dls.music-fa.com/tagdl/1402/Mohsen%20Chavoshi%20-%20Zakhme%20Kari%20(320).mp3?_gl=1*bob3fw*_ga*MTY2MjY1NDU0NC4xNjk0MjM3NzI5*_ga_FKQYXDVPQM*MTY5NDIzNzcyOC4xLjEuMTY5NDIzODA2Ni4wLjAuMA..&_ga=2.261407176.416567176.1694237729-1662654544.1694237729`,
        favorite: false,
      },
    ],
    activePlayList: "all",
  }),
  mutations: {
    goback: (state) => {
      state.isplayervisible = false;
      state.isplaying = false;
    },
    playmusic: (state, payload) => {
      console.log(payload);
      state.currentindex = payload;
      state.isplayervisible = !state.isplayervisible;
    },
    toggleplay: (state) => {
      state.isplaying = !state.isplaying;
    },
    prevmusic: (state) => {
      if (state.currentindex != 0) {
        state.currentindex--;
      } else {
        console.log(state.lists.length);
        state.currentindex = state.lists.length - 1;
      }
      state.isplaying = false;
    },
    nextmusic: (state) => {
      if (state.currentindex < state.lists.length - 1) {
        state.currentindex++;
      } else {
        state.currentindex = 0;
      }
      state.isplaying = false;
    },
  },
  actions: {
    goback: (context) => {
      context.commit("goback");
    },
    playmusic: (context, payload) => {
      context.commit("playmusic", payload);
    },
    toggleplay: (context) => {
      context.commit("toggleplay");
    },
    prevmusic: (context) => {
      context.commit("prevmusic");
    },
    nextmusic: (context) => {
      context.commit("nextmusic");
    },
  },
};
