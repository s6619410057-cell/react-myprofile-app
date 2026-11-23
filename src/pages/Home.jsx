import PageImage from '../components/PageImage'
function Home() {
    return (
        <section className="page-content home-page">
            <p className="subtitle">
                Let's Work <span>Together !</span>
            </p>

            <h1 className='font-bold'>
                Hi From <span>Seksan</span> ,
                <br />
                Interactive Designer & Fullstack Web Developer
            </h1>

            <p className="description">
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quis voluptas ratione est dicta provident vitae unde nesciunt obcaecati exercitationem vero, aperiam, incidunt esse mollitia facere fugit quo suscipit libero enim accusamus dolor nostrum praesentium saepe molestiae! Ratione vitae vel ipsum, culpa pariatur aliquid magni ut voluptas placeat totam error.
            </p>

            <div className="stats">
                <div>
                    <strong>3+</strong>
                    <p>Years of</p>
                    <p>Experience</p>
                </div>

                <div>
                    <strong>10+</strong>
                    <p>Projects</p>
                    <p>Completed</p>
                </div>
            </div>
        </section>
    )
}

export default Home
