import image from '../../assets/boccalone.webp'
import Button from '../UI/Button'
export default function Card (){
    return(
        <section className="container">
            <div className="row">
                <div className="img-card">
                    <img className='post_thumb' src={image} alt="" />
                </div>
                <div className='card-body'>
                    <h2 className='post-title'>Titolo del Post</h2>
                    <p className='post-description'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero eligendi aliquam itaque delectus nisi inventore!</p>
                    <Button/>
                </div>

            </div>
        </section>
    )
}