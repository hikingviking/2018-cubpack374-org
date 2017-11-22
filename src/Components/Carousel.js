import React, { Component } from 'react';

import './Carousel.css';

class Carousel extends Component {

    constructor (props)
    {
        super();
        this.state = {
            prevIndex: 0,
            currentIndex: 0,
            nextIndex: 0,
            direction: ''
        };
        this.changeTimer = null;

        this.checkIndex = this.checkIndex.bind(this);
        this.prevImage = this.prevImage.bind(this);
        this.nextImage = this.nextImage.bind(this);
    }

    componentWillMount ()
    {
    }

    componentWillReceiveProps (nextProps)
    {
        console.log(nextProps);
        let _this = this;
        if (this.changeTimer !== null)
            clearInterval (this.changeTimer);

        if (nextProps.delay)
        {
            this.changeTimer = setInterval(function () {
                _this.nextImage();
            }, nextProps.delay)
        }
    }

    componentWillUnmount()
    {
        if (this.changeTimer !== null)
        {
            clearInterval (this.changeTimer);
            this.changeTimer = null;
        }
    }

    checkIndex(index)
    {
        let ret = index;
        if (index < 0)
            ret = this.props.images.length - 1
        if (index > this.props.images.length - 1)
            ret = 0;
        return ret;
    }

    prevImage()
    {
        let index = this.checkIndex(this.state.currentIndex - 1);
        let prevIndex = this.checkIndex(index - 1);
        let nextIndex = this.checkIndex(index + 1);
        this.setState({
            prevIndex: prevIndex,
            currentIndex: index,
            nextIndex: nextIndex,
            direction: 'prev'
        });
    }

    nextImage()
    {
        let index = this.checkIndex(this.state.currentIndex + 1);
        let prevIndex = this.checkIndex(index - 1);
        let nextIndex = this.checkIndex(index + 1);
        this.setState({
            prevIndex: prevIndex,
            currentIndex: index,
            nextIndex: nextIndex,
            direction: 'next'
        });
    }

    render ()
    {
        if ( this.props.images.length > 0 )
        {
            return (
                <div className="carousel">
                    <div className="carousel-inner">
                        <img className="placeholder" src={this.props.images[0].href} alt="" title="" />
                        { this.props.images.map ( (image,index) => (
                            <img
                                key={ image.href }
                                className={
                                    (index === this.state.currentIndex) ? ("show-image current-image " + this.state.direction) :
                                    (index === this.state.prevIndex) ? ("show-image prev-image " + this.state.direction) :
                                    (index === this.state.nextIndex) ? ("show-image next-image " + this.state.direction) :
                                    "hide-image"
                                }
                                src={ image.href }
                                alt=""
                                title={ image.title }
                            />
                        ))}
                    </div>
                </div>
            );
        }
        else
        {
            return null;
        }
    }
}
export default Carousel;
