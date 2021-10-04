import {BrowserRouter,Route,Switch} from "react-router-dom";
import Navigation from "./Navigation";
import {Container,Row,Col} from "react-bootstrap";

import Home from "./Home";
import User from "./User";
import Posts from "./Posts";
import Comments from "./Comments";


function App(){
    return(
        <BrowserRouter>
        <Container fluid >
        <Navigation/>
        <Container fluid>
        <Row>
        <Col>
            <h1 className="header">Movie Talkies</h1><br/>
            <p className="para">The whole of life is just like watching a film.
            Only it's as though you always get in ten minutes after the big picture has started,
            and no-one will tell you the plot, so you have to work it out all yourself from the clues</p> 
        </Col>
        </Row>
        </Container>
        <Switch>
        <Route exact path="/" component={Home}/>
        <Route path="/user" component={User}/>
        <Route path="/posts" component={Posts}/>
        <Route path="/comments" component={Comments}/>
        </Switch>
        </Container>
        </BrowserRouter>
    
    )
};


export default App;