async function fetchUsers() {
  const res = await fetch('https://reqres.in/api/users')
  const data = await res.json()
  return data.data
}

export default async function HomePage() {
  const users = await fetchUsers()

  return (
   <ul>
     {
       users.map(u => (
         <li key={u.id}>
           <div>
             <h5>{u.id} {u.first_name} {u.last_name}</h5>
             <p>Email: {u.email}</p>
           </div>
         </li>
       ))
     }
   </ul>
    )
}
