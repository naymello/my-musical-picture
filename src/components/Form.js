import React from 'react'

import StyledForm from '../styles/StyledForm'
import Wrapper from '../styles/Wrapper'

const Form = () => {
  return (
    <Wrapper maxWidth="768px">
      <h2>Settings</h2>
      <StyledForm method="GET" action="/picture">
        <h3>What data to show:</h3>
        <input type="radio" id="artists" defaultValue="artists" name="type" defaultChecked="true" />
        <label htmlFor="artists">Artists</label>
        <input type="radio" id="albums" defaultValue="albums" name="type" />
        <label htmlFor="albums">Albums</label>
        <input type="radio" id="tracks" defaultValue="tracks" name="type" />
        <label htmlFor="tracks">Songs</label>

        <h3>Show data from:</h3>
        <input type="radio" id="short" defaultValue="short" name="time_range" defaultChecked="true" />
        <label htmlFor="short">Month</label>
        <input type="radio" id="medium" defaultValue="medium" name="time_range" />
        <label htmlFor="medium">Semester</label>
        <input type="radio" id="long" defaultValue="long" name="time_range" />
        <label htmlFor="long">All time</label>

        <h3>Picture theme:</h3>
        <input type="radio" id="light" defaultValue="light" name="theme" defaultChecked="true" />
        <label htmlFor="light">Light</label>
        <input type="radio" id="dark" defaultValue="dark" name="theme" />
        <label htmlFor="dark">Dark</label>
        <input type="radio" id="colored" defaultValue="colored" name="theme" />
        <label htmlFor="colored">Colored</label>

        <h3>Show captions:</h3>
        <input type="radio" id="true" defaultValue="yes" name="captions" defaultChecked="true" />
        <label htmlFor="true">Yes</label>
        <input type="radio" id="false" defaultValue="no" name="captions" />
        <label htmlFor="false">Nope</label>
        
        <input type="submit" value="Get picture" />
      </StyledForm>
    </Wrapper>
  )
}

export default Form
