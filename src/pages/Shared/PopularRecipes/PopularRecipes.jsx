import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import {  FaStar, FaStarHalfAlt } from 'react-icons/fa';

const PopularRecipes = () => {
  return (
    <div className="container mt-5">
      <h3 className="mt-5">Popular Recipes</h3>
      <hr style={{ color: "#ac2b31" }} className="w-50 " />

       <div   class="col mt-4 ">
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img 
                  class="card-img"
                  src="https://images.immediate.co.uk/production/volatile/sites/30/2021/02/butter-chicken-ac2ff98.jpg?quality=90&webp=true&resize=440,400"
                  alt="Butter Chicken"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Butter Chicken</h5>
                  <p class="card-text text-secondary">
                    It is a type of curry made from chicken with a spiced tomato
                    and butter (makhan) sauce.
                  </p>
                  <div className="text-warning">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  class="card-img"
                  src="https://www.funfoodfrolic.com/wp-content/uploads/2023/04/Dal-Makhani-Blog.jpg"
                  alt="Dal Makhani"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Dal Makhani</h5>
                  <p class="card-text text-secondary">
                    Dal Makhani is one of the most popular lentil recipes made
                    with Whole Black Lentils and Kidney Beans.
                  </p>
                  <div className="text-warning">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-md-4 mb-4">
          <div class="card h-100">
            <div class="row no-gutters">
              <div class="col-md-4">
                <img
                  class="card-img"
                  src="https://assets.bonappetit.com/photos/5b69f163d3d14670539a2174/4:3/w_3552,h_2664,c_limit/ba-tikka-masala-2.jpg"
                  alt="Chicken Tikka Masala"
                />
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">Chicken Tikka Masala</h5>
                  <p class="card-text text-secondary">
                    Consisting of marinated boneless chicken pieces that are
                    traditionally cooked in a tandoor.
                  </p>
                  <div className="text-warning">
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStar></FaStar>
                  <FaStarHalfAlt></FaStarHalfAlt>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default PopularRecipes;
