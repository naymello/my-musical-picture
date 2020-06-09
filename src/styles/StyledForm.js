import styled from 'styled-components'

const StyledForm = styled.form`
  font-size: 0;

  label {
    background-color: #EEFF00;
    display: inline-block;
    height: 4rem;
    width: 33%;
    max-width: 340px;
    line-height: 4rem;
    text-align: center;
    font-size: 1.4rem;
    font-weight: 500;
    cursor: pointer;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="submit"] {
    background-color: #EEFF00;
    width: 98.8%;
    max-width: 1020px;
    height: 5rem;
    margin-top: 50px;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }

  input:checked + label{
    border: 3px solid #000000;
  }
`

export default StyledForm