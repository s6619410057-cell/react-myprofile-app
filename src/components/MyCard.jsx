
import profileImg from '../assets/portfolio.jpg'

import {
    FaFacebookF,
    FaInstagram,
    FaLinkedinIn,
    FaGoogle,
    FaXTwitter
} from 'react-icons/fa6'

function MyCard() {

    return (
        <div className="profile-card">

            <h2>
                <span>S</span>eksan
            </h2>

            <div className="profile-img-wrap">
                <img
                    src={profileImg}
                    alt="profile"
                    className="profile-img"
                />
            </div>

            <h3>STU ID: 6619410057</h3>

            <p>Fullstack Web Developer</p>

            <div className="social-icons">

                <span className='text-2xl'>
                    <FaFacebookF />
                </span>

                <span className='text-2xl'>
                    <FaXTwitter />
                </span>

                <span className='text-2xl'>
                    <FaInstagram />
                </span>

                <span className='text-2xl'>
                    <FaLinkedinIn />
                </span>

                <span className='text-2xl'>
                    <FaGoogle />
                </span>

            </div>

            <button
                className="hire-btn font-bold"
                type="button"
                disabled
            >
                HIRE ME !
            </button>

        </div>
    )
}

export default MyCard
