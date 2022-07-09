import './blockui2.css';
import { FaHtml5, FaCss3, FaPhp,FaJava,FaBandcamp } from 'react-icons/fa';

function BlockUI2() {
    return (
        <div className='block'>
            <div className='block_content'>
                <ul className='content'>
                    <li><FaHtml5 style={{color:"green"}}/> HTML</li>
                    <li><FaCss3 style={{color:"red"}}/> CSS</li>
                    <li><FaPhp style={{color:"blue"}}/> PHP</li>
                    <li><FaJava style={{color:"orange"}}/> JAVA</li>
                    <li><FaBandcamp style={{color:"purple"}}/> .Net</li>
                </ul>
            </div>
            <div className='block_chart'>
                <ul>
                    <li className='block_green'>
                        <span className='Green'>1</span>
                    </li>
                    <li className='block_red'>
                        <span className='Red'>1</span>
                    </li>
                    <li className='block_blue'>
                        <span className='Blue'>1</span>
                    </li>
                    <li className='block_orange'>
                        <span className='Orange'>1</span>
                    </li>
                    <li className='block_purple'>
                        <span className='Purple'>1</span>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default BlockUI2;