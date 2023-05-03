import React from 'react';
import ChefCard from '../../Shared/ChefCard/ChefCard';
import Banner from '../../Shared/Banner/Banner';
import PopularRecipes from '../../Shared/PopularRecipes/PopularRecipes';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <ChefCard></ChefCard>
            <PopularRecipes></PopularRecipes>
        </div>
    );
};

export default Home;