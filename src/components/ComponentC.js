import React from 'react'

import { firstName, lastName } from '../App'

function ComponentC() {
    return (

        <>
            {/* <firstName.Consumer>        
                {(name) => {
                    return <h1>Hello from {name}</h1>
                }}
            </firstName.Consumer> */}
            {/* for single value */}

            <firstName.Consumer>

                {(name) => {
                    return (
                        <lastName.Consumer>
                            {(name2) => {
                                return <h1>Hello from {name} {name2}</h1>
                            }}
                        </lastName.Consumer>)
                }}

            </firstName.Consumer>
        </>
    )
}

export default ComponentC;