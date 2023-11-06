import { useQuery , gql } from '@apollo/client' //Hook 

const GET_CHARACTER = gql`    
    query getCharacter($id: ID!){
        character(id:$id){
            name
            id
            image
            episode{
            name
            episode
            }
        }
    }
`

export const useCharater = (id) => {

    const {loading , data  } = useQuery(GET_CHARACTER,{
        variables : {
            id
        }
    })

    return {
        loading,
        data
    }
    
}