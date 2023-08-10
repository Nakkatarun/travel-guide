import {Component} from 'react'
import Loader from 'react-loader-spinner'
import {
  MainContainer,
  Heading,
  LoaderContainer,
  PlacesContainer,
  Place,
  Image,
  Name,
  Description,
} from './styledComponents'

class Home extends Component {
  state = {
    data: [],
    isLoader: true,
  }

  componentDidMount() {
    this.getTravelDetails()
  }

  getTravelDetails = async () => {
    const url = 'https://apis.ccbp.in/tg/packages'
    const response = await fetch(url)
    const data = await response.json()

    const formattedData = data.packages.map(each => ({
      id: each.id,
      name: each.name,
      description: each.description,
      imageUrl: each.image_url,
    }))
    this.setState({data: formattedData, isLoader: false})
  }

  getTravelDetailsView = () => {
    const {data} = this.state
    return (
      <PlacesContainer>
        {data.map(each => (
          <Place key={each.id}>
            <Image src={each.imageUrl} alt={each.name} />
            <Name>{each.name}</Name>
            <Description>{each.description}</Description>
          </Place>
        ))}
      </PlacesContainer>
    )
  }

  render() {
    const {isLoader, data} = this.state
    console.log(data)
    return (
      <MainContainer>
        <Heading>Travel Guide</Heading>
        {isLoader ? (
          <LoaderContainer>
            <div data-testid="loader">
              <Loader type="TailSpin" color="#00BFFF" height={50} width={50} />
            </div>
          </LoaderContainer>
        ) : (
          this.getTravelDetailsView()
        )}
      </MainContainer>
    )
  }
}

export default Home
