export const authStore = {
  namespaced: true,
  state: () => ({
    token: null,
    user: null,
  }),
  mutations: {
    logout: (state) => {
      state.token = null;
      state.user = null;
      localStorage.removeItem(import.meta.env.VITE_AUTH_STORAGE)
    },
    login: (state, payload) => {
      state.token = payload.token;
      state.user = payload.user

      localStorage.setItem(import.meta.env.VITE_AUTH_STORAGE, JSON.stringify({
        token: payload.token,
        user: payload.user,
        set_at: new Date().getTime()
      }))
    }
  },
  actions: {
    logout: (context) => {
      context.commit("logout");
    },
    login: async (context, payload) => {
      let status = 200;
      let statusText = "Success";
      let data;

      const res = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=${
          import.meta.env.VITE_FIREBASE_APIKEY
        }`,
        {
          method: "POST",
          body: JSON.stringify({
            email: payload.email,
            password: payload.password,
            returnSecureToken: true,
          }),
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      const resData = await res.json()

      if ( resData.error ) {
        status = resData.error.code
        statusText = resData.error.message
      } else {
        data = resData
        context.commit("login", {
          token: resData.idToken,
          user: {
            email: payload.email,
            password: payload.password
          }
        })
      }

      return {
        status,
        statusText,
        data,
      };
    },
    register: async (context, payload) => {
      let status = 200;
        let statusText = "Success";
        let data;
  
        const res = await fetch(
          `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${
            import.meta.env.VITE_FIREBASE_APIKEY
          }`,
          {
            method: "POST",
            body: JSON.stringify({
              email: payload.email,
              password: payload.password,
              returnSecureToken: true,
            }),
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
  
        const resData = await res.json()
  
        if ( resData.error ) {
          status = resData.error.code
          statusText = resData.error.message
        } else {
          data = resData
          context.commit("login", {
            token: resData.idToken,
            user: {
              email: payload.email,
              password: payload.password
            }
          })
        }
  
        return {
          status,
          statusText,
          data,
        };
    },
    setInitialState: (context) => {
      const item = JSON.parse(localStorage.getItem(import.meta.env.VITE_AUTH_STORAGE))

      if ( item ) {
        const currentTime = new Date().getTime()
        const setTime = new Date(item.set_at + Number(import.meta.env.VITE_AUTH_CREDIT) * 3600000).getTime()

        if ( setTime < currentTime ) {
            localStorage.removeItem(import.meta.env.NEXT_PUBLIC_AUTH_STORE)
        } else {
            context.commit("login", {
              token: item.token,
              user: item.user
            })
        }
      }
    }
  },
  getters: {},
};
