import React from 'react'

import {gql, useMutation} from '@apollo/client'

const CREATE_PRODUCT = gql `

        mutation CreateProduct($name:String!,$quatityPerUnit:Int!){
            createProduct(record:{
                name : $name ,
                quatityPerUnit : $quatityPerUnit
            }){
                record {
                    name
                }
            }
        }
`

export default function Mutation() {

    const [createProduct,{data,loading,error}] = useMutation( CREATE_PRODUCT,{
        variables : {
            name : "hotdogs",
            quantityPerUnit:4
        }
    })

    console.log(
        data,
        loading,
        error
    )

  return (
    <div>
        <button onClick={()=> createProduct() }> Save products</button>
    </div>
  )
}
