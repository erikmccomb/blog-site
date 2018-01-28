import React from 'react';
import PropTypes from 'prop-types';
import Helmet from 'react-helmet';
import 'semantic-ui-css/semantic.min.css';
import { Container } from 'semantic-ui-react';

import Header from '../components/Header';
import Footer from '../components/Footer'; 

const TemplateWrapper = ({ children, history }) => (
 <div>
    <Helmet
      title="Dragon on Your Shirt"
      meta={[
        { name: 'description', content: 'webdev' },
        { name: 'keywords', content: 'programming, javascript, ruby' },
      ]}
    />

    <div>
      <Header history={history} />
    </div>
    
    <div>
      <Container>
        {children()}
      </Container>
    </div>

  </div>
)

TemplateWrapper.propTypes = {
 children: PropTypes.func,
}

export default TemplateWrapper