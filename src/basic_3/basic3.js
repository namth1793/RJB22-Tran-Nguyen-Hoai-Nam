import img from './3.jpg';
import './basic3.css';

function Basic_3(){
        return (
            <div className='block'>
                <div className='block_inside'>
                    <img src={img} alt="img" />
                    <div className="block_content">
                        <p>Technology</p>
                        <p>Harman Kadon Onyx Studio Mini,<br />Review & Experiences</p>
                        <p>Feb 21, 2021 by <strong>drfurion</strong></p>
                    </div>
                </div>
            </div>
        )
    }
export default Basic_3;