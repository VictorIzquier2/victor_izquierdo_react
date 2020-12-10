import react from 'react';
import 'bulma/css/bulma.css'

const Experiences = (props) => {

  const experiencia = () => {
    return props.experiencesFromDB.map((experience) => {
      return (
      <p>{experience._id}</p>
      )
    })
  }

  return(
    <div>
      <div>
        <h2>Experiencias</h2>
        {/*{experiencia()}*/}
      </div>
    </div>
  )
}
export default Experiences;