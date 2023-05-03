import React from 'react';
import ChefCard from '../../Shared/ChefCard/ChefCard';
import Banner from '../../Shared/Banner/Banner';
import PopularRecipes from '../../Shared/PopularRecipes/PopularRecipes';
import ChefInterview from '../../Shared/ChefInterview/ChefInterview';

const Home = () => {
    return (
        <div>

            <Banner></Banner>
            <ChefCard></ChefCard>
            <PopularRecipes></PopularRecipes>
            <ChefInterview></ChefInterview>
        </div>
    );
};

export default Home;