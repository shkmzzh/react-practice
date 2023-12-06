import { useState ,useEffect} from 'react'

export const Count = () => {
  // 解构：
  const [count, setCount] = useState(0)

  const [user, setUser] = useState({ name: 'saul', age: 18 })

  const changeGiao = () => {
    setUser({
      ...user,
      age: user.age + 1
    })
    
  }
  useEffect(()=>{
    document.title=`我爱说实话*${count}${user.name}*${user.age}`
},[count])
  return (
    <div>
      <h1>计数器：{count}</h1>
      <h2>
        我{user.name}爱说实话*{user.age}
      </h2>
      <button onClick={changeGiao}>GIAO</button>
      <button onClick={() => setCount(count + 1)}>+1</button>
    </div>
  )
}
