import "./Loading.scss"

import loading from '../../img/loading.jpg'
const Loading = () => {
  return (
    <div className="box_loading">
        <img src={loading}  />
        <p>Carregando...</p>
    </div>
  )
}

export default Loading