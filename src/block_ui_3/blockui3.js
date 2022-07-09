import './blockui3.css';
import { FaFacebookF, FaTwitter, FaGooglePlusG, FaPinterest } from 'react-icons/fa';

function BlockUI3() {
    return (
        <div className="block">
            <div className="facebook">
                <p><FaFacebookF style={{fontSize:"40px"}}/> </p>
                <div className='under'>
                    <p style={{fontSize:"25px"}}>Facebook</p>
                    <p>5,000,000 Likes</p>
                </div>
            </div>
            <div className="twitter">
                <p><FaTwitter style={{fontSize:"40px"}}/> </p>
                <div className='under'>
                    <p style={{fontSize:"25px"}}>Twitter</p>
                    <p>40,000 Tweets</p>
                </div>
            </div>
            <div className="google">
                <p><FaGooglePlusG style={{fontSize:"40px"}}/> </p>
                <div className='under'>
                    <p style={{fontSize:"25px"}}>Google +</p>
                    <p>4,600,000 Plus</p>
                </div>
            </div>
            <div className="pinterest">
                <p><FaPinterest style={{fontSize:"40px"}}/> </p>
                <div className='under'>
                    <p style={{fontSize:"25px"}}>Pinterest</p>
                    <p>34,000 Pins</p>
                </div>
            </div>
        </div>
    )
}
export default BlockUI3;