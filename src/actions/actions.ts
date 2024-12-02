"use server";

import prisma from "@/lib/db";


// export async function getFoods(){
//     let foods
//     try {
//         foods = await prisma.food.findMany({})
//     } catch (error) {
//         // console.log(error);
//         return {
//             message : "Could not find Food"
//         }
//     }
//     return foods
// }

// How to add food for same restaurant -> ig using restaurant ID

// export async function addFood(){
//     let food
//     await prisma.food.create({
//         data: {
//             image: "https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/2020-04/vanilaice.jpg",
//             name: "Mocha Latte",
//             swiggyPrice: 240,
//             zomatoPrice: 220,
//             restaurantId: 5            
//         }
//     })
// }

// export async function addRestaurantWithFood() {

//     let restaurantWithFood
//     try {
//         restaurantWithFood = await prisma.restaurant.create({
//             data: {
                
//                 name: "Al-Bek",
//                 image: "https://lh3.googleusercontent.com/rpJQBlUcqOcobGQJ3dH7Ruh4-13LOnDTIWA4XpOFC-8_4Ltl91Vltbw_I-krYV0s460yxLQnysOufWFPkXbROFes4w=w1200-rw",
//                 foods: {
//                     create: {
//                         name: "Chicken Biryani",
//                         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkFl4-e90gihmLEM7TZZ-LTbwkWQ47VaLMQ&s",
//                         swiggyPrice: 260,
//                         zomatoPrice: 270,
//                         veg: false
//                     }
//                 }
//             }
//         })
        
//     } catch (error) {
//         console.log(error);
//     }

//     return restaurantWithFood

// }


export async function getFoodsWithRestaurant(){
    const foods = await prisma.restaurant.findMany({
        include: {
            foods: true
        }
    })

    return foods
}

export async function getFoods(){
    const foods = await prisma.food.findMany({
        include: {
            restaurant: true
        }
    })

    return foods
}


export async function getRestaurants(){
    return await prisma.restaurant.findMany({})
}



