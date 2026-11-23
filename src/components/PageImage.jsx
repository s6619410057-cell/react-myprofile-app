
import portfolioImage from '../assets/portfolio.jpg'

function PageImage() {
    return (
        <div className="page-image-wrap">
            <img
                src={portfolioImage}
                alt="Permpoon Portfolio"
                className="page-image"
            />
        </div>
    )
}

export default PageImage
