import img from './1.jpg';
import './basic1.css';

function Basic_1() {
    return (
        <div className="block">
            <img src={img} alt="img" />
            <div className="block_content">
            <p className="block_header">Clothing & Apparel</p>
            <p>Accessories</p>
            <p>Bags</p>
            <p>Kid's Fashion</p>
            <p>Mens</p>
            </div>
        </div>
    )
}
export default Basic_1;