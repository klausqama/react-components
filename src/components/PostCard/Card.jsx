import image from '../../assets/boccalone.webp'
import Button from '../UI/Button'
import styles from './Card.module.css'

export default function Card (){
    return(
        <section className={styles.container}>
            <div className='row'>
                <div className={styles.img}>
                    <img className='post_thumb' src={image} alt="" />
                </div>
                <div className='card-body'>
                    <h2 className={styles.postTitle}>Titolo del Post</h2>
                    <p className={styles.postDescription}>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Unde, non fuga repudiandae eligendi architecto, harum ad incidunt, veniam repellendus voluptatum minima rem nobis. Quis voluptatum ipsum officiis ex, officia facere.</p>
                    <Button/>
                </div>
            </div>
        </section>
    )
}