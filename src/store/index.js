import {createStore} from "vuex";


const store = createStore({
    state(){
        return{
            NCListNow:"wer wr ew",
            qqq: typeof(localStorage.notCalendarList),
            zxc: 3
        }
    },
    getters:{
        changeDataNCTodo(state){
            return state.zxc * 2
        }
    },

    mutations:{

    },

    actions: {

    },

    modules:{
        
    }
  });

export default store


