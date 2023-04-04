import '../styles/Home.css'

const HomePage = ()=> {
    return (
    <section>
        <figure class="flex">
            <img src={require("../img/IMG_2610.jpg")} alt="A head picture of Josh Torres" width="100%"/>
        </figure>
        <section className="flex black">
            <div className="section padding">
                <h2 className="h2_border">About Me</h2>
                <div>
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptates porro deserunt laborum nobis dignissimos incidunt maiores nihil, voluptatibus, quis eligendi atque quia commodi, expedita aliquam vel eaque ex recusandae ipsa.</p>
                    <p>Lorem ipsum dolor sit amet consectestur adipisicing elit. Repellat provident autem vero accusamus, asperiores nulla adipisci tempora sint quidem quos ratione. Fugit quas non quaerat quam veritatis, sapiente doloribus minima? Lorem ipsum dolor sit amet, consectetur adipisicing elit. Possimus illum, dolorem eveniet provident optio aut, hic nihil, saepe est harum omnis ratione sint earum nostrum nesciunt voluptas! Incidunt, placeat adipisci. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore modi molestias ducimus, reprehenderit error repellat. Voluptate, unde ratione beatae quis dolorum neque quos obcaecati. Magni molestias atque ullam temporibus aliquam!</p>
                </div>
            </div>
        </section>
    </section>
    )
}

export default HomePage;