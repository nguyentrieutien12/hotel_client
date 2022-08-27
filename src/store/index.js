import { configureStore } from "@reduxjs/toolkit";
import accountStore from "../features/account/account";
import hotelStore from "../features/hotel/hotel";
import spaStore from "./../features/spa/spa";
import treatmentStore from "./../features/treatment/treatment";
import restaurantStore from "./../features/restaurant/restaurant";
import dishStore from "./../features/dish/dish";
import gymStore from "../features/gym/gym";
import workoutStore from "../features/workout/workout";
import quizStore from "../features/quiz/quiz";
import isAnswer from "../features/quiz/isAnswer";
import recommend from "../features/recommend/recommend";
export const store = configureStore({
  reducer: {
    accounts: accountStore,
    hotels: hotelStore,
    spas: spaStore,
    treatments: treatmentStore,
    restaurants: restaurantStore,
    dishes: dishStore,
    gyms: gymStore,
    workouts: workoutStore,
    quizs: quizStore,
    isAnswer,
    recommend,
  },
});
