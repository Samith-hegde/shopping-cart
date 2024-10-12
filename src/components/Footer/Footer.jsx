import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer>
            <section className="top">
                <section className="left">
                    <h3 className="header">© 2024 Angadi</h3>
                    <p classname="para"> Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas, quisquam molestiae? Dignissimos, excepturi ipsum ipsam architecto alias vero voluptatem asperiores necessitatibus autem at voluptates veniam facilis obcaecati libero nobis eum. Eum, nesciunt nam fugit odio veritatis qui natus illum? Labore quisquam nobis eius quibusdam cupiditate sequi cumque veniam, recusandae, laudantium, tenetur ut magnam excepturi. Sequi vel repellat pariatur dolores atque.
</p>
                </section>
                <section className="right">
                    <h4> Contact us: </h4>
                    <p> Email: angadi@gmail.com </p>
                    <p> Phone: 123-456-7890 </p>
                    <p> Address: </p>
                    <p> Terms of Service | Privacy Policy </p>
                </section>
            </section>
            <hr />
            <section className="bottom">
                <p> Developed by <a href="https://github.com/Samith-hegde"> Samith Hegde </a></p>
            </section>
        </footer>
    );
}

export default Footer;