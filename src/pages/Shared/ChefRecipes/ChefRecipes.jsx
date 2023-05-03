import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';

const ChefRecipes = () => {
  const { ChefId } = useParams();

  const [ChefData, setChefData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:5000/cuisine')
      .then(response => response.json())
      .then(data => {
        const chef = data.find(job => job.id === ChefId);
        setChefData(chef);
      });
  }, [ChefId]);

  return (
    <div>
      <div>
        <img src={ChefData?.image} alt="chef" />
        <h1>{ChefData?.name}</h1>
        <p>{ChefData?.bio}</p>
        <p>Likes: {ChefData?.likes}</p>
        <p>Number of Recipes: {ChefData?.recipes}</p>
        <p>Years of Experience: {ChefData?.experience}</p>
      </div>
    </div>
  );
};

export default ChefRecipes;
