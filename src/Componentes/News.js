import React, { Component } from 'react';
import New from './New'
import PropTypes from 'prop-types';
import {TransitionGroup, CSSTransition} from 'react-transition-group';

class News extends Component {
    render() { 
        return ( 
            <div className="row">
                <TransitionGroup>
                    {this.props.noticias.map(noticia => (
                        <CSSTransition
                            key={noticia.url}
                            classNames="fade"
                            timeout={500}
                        >
                            <New noticia= {noticia} />
                        </CSSTransition>
                    ))}
                </TransitionGroup>
            </div>
         );
    }
}

News.propTypes = {
    noticias: PropTypes.array.isRequired
}
 
export default News;