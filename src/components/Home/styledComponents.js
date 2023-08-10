import styled from 'styled-components'

export const MainContainer = styled.div`
  background-color: #eef4f7;
  height: 100vh;
  background-size: cover;
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const Heading = styled.h1`
  color: #334155;
  font-size: 30px;
  padding-bottom: 4px;
  font-weight: 800;
  font-family: 'Roboto';
  border-bottom: 3px solid #52bbf0;
`
export const LoaderContainer = styled.div`
  height: 90vh;
  background-size: cover;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const PlacesContainer = styled.ul`
  display: flex;
  flex-direction: row;
  width: 90vw;
  flex-wrap: wrap;
`

export const Place = styled.li`
  display: flex;
  flex-direction: column;
  width: 400px;
  margin: 10px;
`

export const Image = styled.img`
  height: 300px;
  width: 400px;
`

export const Name = styled.h1`
  color: #334155;
  font-size: 20px;
  font-weight: 800;
  font-family: 'Roboto';
`
export const Description = styled.h1`
  color: #475569;
  font-size: 15px;
  font-family: 'Roboto';
`
