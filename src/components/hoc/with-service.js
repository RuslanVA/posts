import React from 'react';
import { ServiceConsumer } from '../service-context';

const withService = () => (Wrapped) => {

  return (props) => {
    return (
      <ServiceConsumer>
        {
          (postsService) => {
            return (<Wrapped {...props}
                     postsService={postsService}/>);
          }
        }
      </ServiceConsumer>
    );
  }
};

export default withService;
