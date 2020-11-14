import React from 'react'
import Makeup from './Makeup'
import Search from './Search'
import { getMakeupsByMe, getMakeupsBySearch } from '../services/makeups'

class MakeupContainer extends React.Component{
    constructor (props) {
        super(props)

        this.state = {
            makeups: [],
            isFetch: true,
        }
    }

    async componentDidMount () {
        const responseJson = await getMakeupsByMe()
        this.setState({ makeups: responseJson.result, isFetch:false })

    }
    handleSearch = async (search) => {
        const responseJson = await getMakeupsBySearch(search)
        this.setState({ makeups: responseJson.result})
    }

    render () {
        const {isFetch, makeups} = this.state

        if(isFetch){
            return 'Loading...'
        }

        return (
            <>
                <Search handleSearch={this.handleSearch}/>

                {
                    isFetch && 'Loading...'
                }

                {
                    (!isFetch && !makeups?.length) && "No makeup founded, try another search"
                }
                <section className="makeups-container">
                    {
                        makeups?.map((makeup)=> <Makeup 
                            imageUrl={makeup.image_link} 
                            name={makeup.name} 
                            key={makeup.id}
                            description= {makeup.description}
                            website_link= {makeup.website_link}
                        />)
                    }
                </section>
            </>
        )
    }

}

export default MakeupContainer
