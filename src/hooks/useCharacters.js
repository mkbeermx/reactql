import { useQuery , gql } from '@apollo/client' //Hook 

const GET_CHARACTERS = gql`    
    query {
        characters {
            results {
                id
                name
                image
            }
        } 
    }
`

export const useCharaters = () => {

    const {loading , data  } = useQuery(GET_CHARACTERS)

    return {
        loading,
        data
    }
    
}