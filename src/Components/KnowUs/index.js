import React, { Component } from 'react';
import './style.css';
import Footer from '../Footer';
import data from './data.json';


export default class KnowUs extends Component {

    componentDidMount() {
        let myaudio = document.getElementById("music").autoplay = true;
    }
    twoPiks = (imageName1, imageName2, imageHeading, imageDescription) => {
        return (
            <div className="memories-image-two">
                <div>
                    <img className="funny-image-holder funny-image-holder-1" src={require(`../../Assets/Images/${imageName1}`)}
                        alt="Pre-Wedding Pictures"
                        key={imageName1}
                    ></img>
                </div>
                <div className="image-description">
                    <span>
                        <div className="image-heading">{imageHeading}</div>
                        <hr className="image-hr"></hr>
                        <div className="image-write">{imageDescription}</div>
                    </span>
                </div>
                <div>
                    <img className="funny-image-holder funny-image-holder-2" src={require(`../../Assets/Images/${imageName2}`)}
                        alt="Pre-Wedding Pictures"
                        key={imageName2}
                    ></img>
                </div>
            </div>
        )
    }

    onePik = (imageName, imageHeading, imageDescription) => {
        return (
            <div className="memories-image">
                <div>
                    <img className="funny-image-holder" src={require(`../../Assets/Images/${imageName}`)}
                        alt="Pre-Wedding Pictures"
                        key={imageName}
                        onClick={() => this.openModal(imageName)}
                    ></img>
                </div>
                <div className="image-description">
                    <span>
                        <div className="image-heading">{imageHeading}</div>
                        <hr className="image-hr"></hr>
                        <div className="image-write">{imageDescription}</div>
                    </span>
                </div>
            </div>);
    }

    render() {
        return (
            <div>
                <audio id="music" controls autoplay loop hidden="true">
                    <source src="https://res.cloudinary.com/prateektiwari/video/upload/v1604507320/DefencePrep/Happy_Birthday_Party_Version_d844n0.mp3" type="audio/mpeg" />
                   Your browser does not support the audio element.
                </audio>
                <div className="Memories-Container">
                    <div className="memories-image-container">
                        {
                            data.map(({ imageList, title, message }) => {
                                if (imageList.length === 2) {
                                    return this.twoPiks(imageList[0], imageList[1], title, message);
                                }
                                return this.onePik(imageList[0], title, message);
                            })
                        }
                    </div>
                </div>
                <Footer />
            </div>
        );
    }
}