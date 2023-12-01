export function Child(props){
   const changeDelnum=()=>{
        props.DelNum()
    }
    return (
        <div>
            <h3>我是子组件-- 接收数据{props.money}</h3>
            <button onClick={changeDelnum}>-1</button>
        </div>
    )
}