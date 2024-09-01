
import ResipeItem from "./recipe-itam/recipeItem"
import Header from "./header/Header"
import { useGetRecipesQuery } from "../store/api/api"

const userId = 1

export default function App() {
  const {data} = useGetRecipesQuery(undefined, {
    skip: !userId,
  })
  console.log(data)
  return(
    <section>
      <Header/>
    <div>
      <ResipeItem recipe={{
        id: 1,
        name: 'Лазанья',
      }}/>
      <ResipeItem recipe={{
        id: 2,
        name: 'Рисовая каша',
      }}/>
      <ResipeItem recipe={{
        id: 3,
        name: 'Паста с морепродуктами',
      }}/>
    </div>
    </section>
  )
}