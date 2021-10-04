import "./hmgimg.css";

import { Container } from "react-bootstrap";

function Home(){
    return(
        <>
        <Container fluid>
        <div className="content">
        <div><img className="hmgimg" src="https://res.cloudinary.com/fleetnation/image/private/c_fit,w_1120/g_south,l_text:style_gothic2:%C2%A9%20David%20Izquierdo,o_20,y_10/g_center,l_watermark4,o_25,y_50/v1526392786/zl6im6s3hlsr70srwxlo.jpg"/> </div>
        <div className="movie"><h3>The Godfather</h3><p>"I'm going to make him an offer he can't refuse."</p><br/>
        <h3>Forrest Gump</h3><p>"Mama always said life was like a box of chocolates. You never know what you're gonna get."</p><br/>
        <h3>Now, Voyager</h3><p>"Oh, Jerry, don't let's ask for the moon. We have the stars."</p><br/>
        <h3>Persuite Of Happiness</h3><p>"You got a dream... You gotta protect it. People can't do somethin' themselves, they wanna tell you you can't do it. If you want somethin', go get it. Period"</p>
        </div>
        </div>
        </Container>
        </>
    );
}
export default Home;