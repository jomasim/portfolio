import React from 'react'
import {Segment, Grid} from "semantic-ui-react";
import './home.css'
import Navigation from './Navigation';

class Home extends React.Component {

    render() {
        return (
            <div>
                <Segment placeholder className="pot-segment">
                    <Grid columns={2} stackable>
                        <Grid.Row verticalAlign='middle'>
                            <Grid.Column>
                                <h1 className="title">Joma Sim</h1>
                                <small className="secondary-title">Associate Software Engineer at Andela</small>
                            </Grid.Column>

                            <Grid.Column>
                                <Navigation/>
                                <h2 className="bio-title">Biography</h2>
                                <p className="bio-body">
                                    Hello!🤓 I am a full stack javascript developer(MERN) and I hold a Bachelor’s degree in
                                    Information Technology from the Multimedia University of Kenya. I also have
                                    supplementary skills in Android application development and PHP Laravel.
                                </p>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default Home;