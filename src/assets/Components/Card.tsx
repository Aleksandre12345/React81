import './card.css'

const Card = () => {
  return (

        <div className="box1">
            <div className='boxheader'>
                <img src="./girlimage.svg" alt="" />
                <p className='name'>amyrobson</p>
                <p className='dayago'>1 month ago</p>
            </div>
            <p className='lorem'>Impressive! Though it seems the drag feature could be improved. But overall it looks incredible. You’ve nailed the design and the responsiveness at various breakpoints works really well.</p>
            <div className='boxfooter'>
                <div className='divbutton'>
                    <button className='btn1'>
                        <img className='plus' src="./plus.svg"/>
                    </button>
                    <p className='number'>12</p>
                    <button className='btn2'>
                        <img className='minus' src="./minus.svg" />
                    </button>
                </div>
                <button className='replydiv'>
                    <img src="./arrow.svg"/>
                    <p className='reply'>Reply</p>
                </button>
            </div>
        </div>

  )
}

export default Card
