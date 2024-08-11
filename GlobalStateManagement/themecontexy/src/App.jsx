import { useContext, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { themeContext } from './Context/ThemeContext'
function App() {

  const { theme, handleTheme } = useContext(themeContext)
  return (
    <div style={{ backgroundColor: theme ? "black" : "white" }} >
      <h1 style={{ color: !theme ? "black" : "white" }}>Themecontext</h1>
      <button onClick={handleTheme}  >ToggleTheme</button>
      <p style={{ color: !theme ? "black" : "white" }}   >Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus, rem, similique modi beatae labore voluptatibus voluptas ipsa quod neque corrupti iusto quidem nemo fuga laboriosam explicabo sunt qui nulla aperiam doloribus minus. Fuga eligendi unde beatae praesentium saepe, nam eius at sit commodi. Enim quaerat deleniti molestiae quas eveniet pariatur repellat obcaecati quod laborum, quam laboriosam dolorem magni, nisi doloremque cum velit harum laudantium aliquid, itaque facere vitae ipsum! Aspernatur, eligendi unde natus reiciendis aliquid laborum ratione minima possimus fugiat mollitia sequi ipsum eum quos, totam voluptatum, exercitationem itaque voluptates nihil ut nam quaerat quia. Sequi fuga ad fugit cupiditate quis quidem quibusdam? Facere distinctio incidunt nulla velit quibusdam nisi tenetur, minus sed culpa? Accusantium numquam asperiores sed, totam fugit amet architecto vel pariatur officiis aut ullam officia tempora, quo quas perspiciatis debitis vero consequuntur. Vitae odit autem eos aspernatur sit est itaque beatae numquam in, voluptates quod? Sed odit assumenda maxime sint modi, nemo nam excepturi ipsam eos facilis quod numquam voluptas nisi illo nihil nobis cumque itaque reiciendis rerum commodi voluptates? Magni tempore ab excepturi non nesciunt, consequatur magnam unde eligendi recusandae necessitatibus sequi, dolorem commodi id rerum dignissimos vero delectus nihil! Delectus quis corrupti sed, nemo saepe nam consectetur doloremque ad accusamus voluptates dicta ea deleniti aspernatur provident sit quisquam veniam ullam quia atque sunt quaerat! Exercitationem rem maiores illo saepe officia obcaecati architecto ipsa dolorum expedita enim soluta voluptas ipsum laudantium assumenda, quam minima, ut laborum. Unde, hic veniam! Deserunt temporibus commodi delectus facilis provident corrupti doloremque excepturi nobis ab. Fugit cum aliquam, ullam quisquam excepturi sed ducimus, tempore consequuntur aspernatur et inventore architecto, a eveniet eius possimus nam officiis eum reiciendis? Labore omnis perferendis error similique cupiditate, quos distinctio sit voluptatem deleniti, dolorem, atque mollitia doloremque sint temporibus obcaecati saepe a. Eos suscipit ut ab voluptate non cumque delectus minus nostrum obcaecati tempore sequi incidunt officia qui sint adipisci voluptatem placeat consequatur, fugiat harum repellat veniam beatae.</p>
    </div>
  )
}

export default App
