import React from 'react'
import {Segment, Grid, Image} from "semantic-ui-react";
import './home.css'
import Navigation from './Navigation';
import github from '../images/github.svg';
import gitlab from '../images/gitlab.svg';
import insta from '../images/insta.svg';
import profile from '../images/profile.svg';
import stacks from '../images/stacks.svg';


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
                                <div className="links-container">
                                    <Image src={profile}/>

                                    <Image src={github} size='medium' circular className="pro-link"/>
                                    <Image src={gitlab} size='medium' circular className="pro-link github"/>
                                    <Image src={insta} size='medium' circular className="pro-link insta"/>
                                </div>
                            </Grid.Column>

                            <Grid.Column>
                                <Navigation/>
                                <h2 className="bio-title">Biography</h2>
                                <p className="bio-body">
                                    Hello!🤓 I am a full stack javascript developer(MERN) and I hold a Bachelor’s degree
                                    in
                                    Information Technology from the Multimedia University of Kenya. I also have
                                    supplementary skills in Android application development and PHP Laravel.
                                </p>

                                <h2 className="bio-title">Primary Skills and Tools</h2>

                                <div>
                                    <Image src={stacks} size='medium'/>
                                </div>
                            </Grid.Column>
                        </Grid.Row>
                    </Grid>
                </Segment>
            </div>
        );
    }
}

export default Home;