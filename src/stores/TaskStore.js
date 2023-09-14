import { defineStore } from "pinia";

export const useTaskStore = defineStore("taskStore", {
    state: () => ({
        tasks: [
            {id: 1, title: "buy some milk", isFav: false},
            {id: 2, title: "Play some FIFA", isFav: true}
        ],
        
    }),
    getters: {
        favs() {
            return this.tasks.filter(task => task.isFav)
        },
        favCount() {
            return this.tasks.reduce((p, c) => {
                return c.isFav ? p + 1 : p;  // p is the previous value or count and c is the current value or count
            }, 0); 
        },
        totalCount: (state) => {
             return state.tasks.length
        }
    },
    actions: {
        addTask (task) {
            this.tasks.push(task);
        },
        deleteTask(id) {
            this.tasks = this.tasks.filter(t => {
              return t.id !== id
            })
          },
          toggleFav(id) {
            const task = this.tasks.find(t => t.id === id)
            task.isFav = !task.isFav
          }
        }
        
    
});