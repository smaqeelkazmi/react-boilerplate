import React, { Component } from 'react';
import MasterLayout from './_layout/MasterLayout';

import Button from "./_stateless/Button";

const Home = () => {
    return (
        <MasterLayout>
            This is Home page view
            <Button>This is from button component</Button>
        </MasterLayout>
    );
};

export default Home;