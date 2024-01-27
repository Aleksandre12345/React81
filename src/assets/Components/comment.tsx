import './comment.css'

const Comment = () => {
  return (
    <div className='sendbox'>

        <input className='combox' placeholder='Add a comment…'/>

        <div className="personal">
            <img className='boyimg' src="./boy.svg"/>
            <button className='button3'><h2>SEND</h2></button>
        </div>
    </div>
  )
}

export default Comment