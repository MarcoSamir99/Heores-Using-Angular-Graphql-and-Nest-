import {gql} from 'apollo-angular';

const GET_HEROES = gql`
query heroes {
  heroes {
  name
  id
}
}
`

const GET_HERO = gql `
query hero($id: Float!) {
  hero(
    id: $id
    )
  {
    name
    id
  }
}
`
const GET_SUGGESTED = gql `
query suggestedHeroes($key: String!) {
  suggestedHeroes (
  key: $key 
  )
	{
    name
    id
  }
}
`

export {GET_HEROES, GET_HERO, GET_SUGGESTED};