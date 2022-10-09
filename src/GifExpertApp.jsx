import { useState } from 'react';
import { AddCategory, GifGrid } from './components';


export const GifExpertApp = () => {


  const [categories, setCategories] = useState([ 'Naruto' ])

  const onAddCategory = ( newCategory ) => {
     // console.log(newCategory)
     if ( categories.includes( newCategory ) ) return;
     setCategories([ newCategory, ...categories]);
  }

  console.log(categories)

  return (
    <>
      <h1>GifExpertApp</h1>

       <AddCategory
        onNewCategory={ event => onAddCategory(event) }
       />

          {
            categories.map( ( category ) => (
                <GifGrid
                  key={ category }
                  category={ category }
                />
              ))
          }

    </>
  )
}
