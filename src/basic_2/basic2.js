import img from './2.jpg';
import './basic2.css';
import { FaStar,FaStarHalfAlt } from 'react-icons/fa';

function Basic_2(props) {
    const { color, fontWeight } = props;
    return (
        <div className="block">
            <div className="block_inside">
                <img src={img} alt="img" />
                <div className="block_content">
                    <p style={{ fontWeight }}>YOUNG SHOP</p>
                <hr />
                    <p style={{ color, fontWeight }}>Samsung UHD TV 24inch</p>
                    <p>< FaStar style={{color:'orange'}}/>< FaStar style={{color:'orange'}}/>< FaStar style={{color:'orange'}}/>< FaStar style={{color:'orange'}}/>< FaStarHalfAlt style={{color:'orange'}}/> 02</p>
                <p style={{textAlign:'right'}, {fontWeight}}>$599</p>
                </div>
            </div>
        </div>
    )
}
export default Basic_2;