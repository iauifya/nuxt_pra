export default function() {
    const count = ref(0)
    const increment = () => {
        count.value += 1
    }
    return {
        count,
        increment
    }
}

//export default 這邊最後要return 裡面定義的變數
//export const 不用