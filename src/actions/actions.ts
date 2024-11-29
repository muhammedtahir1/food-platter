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
                
//                 name: "Third Wave Coffee",
//                 image: "https://images.jdmagicbox.com/v2/comp/bangalore/h6/080pxx80.xx80.181214131338.w2h6/catalogue/third-wave-coffee-roasters-whitefield-bangalore-moderate-restaurants-rs-500-to-rs-1000--tfczt1o86u.jpg",
//                 foods: {
//                     create: {
//                         name: "Coffee",
//                         image: "https://images.immediate.co.uk/production/volatile/sites/30/2020/08/flat-white-3402c4f.jpg",
//                         swiggyPrice: 20,
//                         zomatoPrice: 30,
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

