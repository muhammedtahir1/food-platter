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
//                 image: "https://staticnew.locowiz.com/locomedia/third-wave-coffee/1657527215_1763200683.jpeg",
//                 foods: {
//                     create: {
//                         name: "Cappuccino",
//                         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1q-KygtbfC_Q5-VjitWA3yoJKJcAKPKDAGw&s",
//                         swiggyPrice: 260,
//                         zomatoPrice: 270,
//                         veg: true
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



