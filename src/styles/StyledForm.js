import styled from 'styled-components'

const StyledForm = styled.form`
  margin-top: 15px;

  label {
    padding: 7.5px 0;
    background-color: #EEFF00;
    display: inline-block;
    width: 33.33%;
    max-width: 340px;
    text-align: center;
    font-size: 1.6rem;
    font-weight: 500;
    margin: 10px 0 20px;
    cursor: pointer;

    @media (min-width: 480px) {
      padding: 10px 0;
    }
  }

  input:checked + label{
    border: 3px solid #000000;
  }

  input[type="radio"] {
    display: none;
  }

  input[type="submit"] {
    background-color: #EEFF00;
    width: 100%;
    max-width: 1020px;
    height: 5rem;
    margin: 50px 0;
    border: none;
    font-size: 1.6rem;
    font-weight: 700;
    text-transform: uppercase;
    cursor: pointer;
  }
`

export default StyledForm
