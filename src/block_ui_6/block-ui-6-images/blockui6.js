import img1 from './1.jpg';
import img2 from './2.jpg';
import img3 from './3.jpg';
import img4 from './4.jpg';
import { FaCartPlus } from 'react-icons/fa';
import './blockui6.css';

function BlockUI6() {
    return (
    <div className='block'>
        <div className='block_1'>
            <img src={img1} alt="img1" />
                <div className='block_1_content'>
                    <br/>
                <strong>EODEM MODO TYPI</strong>
                <br/>
                <p>lorem ipsum dolor sit amet, xonsectetur adipsomjsd fisur</p>
                <p>XL/XXL/S</p>
                    <strong>$25</strong>
                    <br/>
                <button type='button'><FaCartPlus/> Add to cart</button>
            </div>
        </div>
        <div className='block_1'>
            <img src={img2} alt="img2" />
                <div className='block_1_content'>
                    <br/>
                <strong>SEQUISFD FMFUFHDLA</strong>
                <br/>
                <p>lorem ipsum dolor sit amet, xonsectetur adipsomjsd fisur</p>
                <p>XL/XXL/S</p>
                    <strong>$25</strong>
                    <br/>
                <button type='button'><FaCartPlus/> Add to cart</button>
            </div>
        </div>
        <div className='block_1'>
            <img src={img3} alt="img3" />
                <div className='block_1_content'>
                    <br/>
                <strong>CODJAABF JADSIDAISF</strong>
                <br/>
                <p>lorem ipsum dolor sit amet, xonsectetur adipsomjsd fisur</p>
                <p>XL/XXL/S</p>
                    <strong>$25</strong>
                    <br/>
                <button type='button'><FaCartPlus/> Add to cart</button>
            </div>
        </div>
        <div className='block_4'>
            <img src={img4} alt="img4" />
                <div className='block_4_content'>
                    <br/>
                <strong>PAFIENE CLASRM</strong>
                <br/>
                <p>lorem ipsum dolor sit amet, xonsectetur adipsomjsd fisur</p>
                <p>XL/XXL/S</p>
                    <p><span style={{fontWeight:700}}>$25</span><span className='bonus'> $75</span></p>
                <button type='button'><FaCartPlus/> Add to cart</button>
            </div>
        </div>
    </div>
    )
}
export default BlockUI6;