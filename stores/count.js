import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
    state: () => ({
        count: 1
    }),
    actions: {
        increment() {
            this.count++
        },
        decrement() {
            this.count--
        }
    },
    getters: {
        doubleCount: (state) => state.count * 2
    }
})

// export const useCounterStore = defineStore('counter', () => {
//     const count = useState('count', () => 0)

//     const increment = () => {
//         count.value += 1
//     }
//     const decrement = () => {
//         count.value -= 1
//     }

//     const doubleCount = computed(() => count.value * 2)

//     return {
//         count,
//         increment,
//         decrement,
//         doubleCount
//     }
// })

// export const useTodos = defineStore('todos', {
//   state: () => ({
//     /** @type {{ text: string, id: number, isFinished: boolean }[]} */
//     todos: [],
//     /** @type {'all' | 'finished' | 'unfinished'} */
//     filter: 'all',
//     // 类型将自动推断为 number
//     nextId: 0
//   }),
//   getters: {
//     finishedTodos(state) {
//       // 自动补全！ ✨
//       return state.todos.filter((todo) => todo.isFinished)
//     },
//     unfinishedTodos(state) {
//       return state.todos.filter((todo) => !todo.isFinished)
//     },
//     /**
//      * @returns {{ text: string, id: number, isFinished: boolean }[]}
//      */
//     filteredTodos(state) {
//       if (this.filter === 'finished') {
//         // 调用其他带有自动补全的 getters ✨
//         return this.finishedTodos
//       } else if (this.filter === 'unfinished') {
//         return this.unfinishedTodos
//       }
//       return this.todos
//     }
//   },
//   actions: {
//     // 接受任何数量的参数，返回一个 Promise 或不返回
//     addTodo(text) {
//       // 你可以直接变更该状态
//       this.todos.push({ text, id: this.nextId++, isFinished: false })
//     }
//   }
// })