import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

// const foods = [
//     {
//         id: 1,
//         name: "Al-Bek",
//         image: "https://lh3.googleusercontent.com/rpJQBlUcqOcobGQJ3dH7Ruh4-13LOnDTIWA4XpOFC-8_4Ltl91Vltbw_I-krYV0s460yxLQnysOufWFPkXbROFes4w=w1200-rw",
//         foods: {
//             create: {
//                 id: 1,
//                 name: "Chicken Biryani",
//                 image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkFl4-e90gihmLEM7TZZ-LTbwkWQ47VaLMQ&s",
//                 swiggyPrice: 260,
//                 zomatoPrice: 270,
//                 veg: true
//             }
//         }
//     },
//     {
//         id: 2,
//         name: "Third Wave Coffee",
//         image: "https://staticnew.locowiz.com/locomedia/third-wave-coffee/1657527215_1763200683.jpeg",
//         foods: {
//             create: {
//                 id: 2,
//                 name: "Cappuccino",
//                 image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1q-KygtbfC_Q5-VjitWA3yoJKJcAKPKDAGw&s",
//                 swiggyPrice: 290,
//                 zomatoPrice: 280,
//                 veg: true
//             }
//         }
//     },
//     {
//         id: 3,
//         name: "The Socials",
//         image: "https://www.socialoffline.in/img/koramangala-social-03.jpg",
//         foods: {
//             create: {
//                 id: 3,
//                 name: "Red Sauce Pasta",
//                 image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRovs-UolqwaFBbVw6D0LIpi11GzoLjC4BSA&s",
//                 swiggyPrice: 360,
//                 zomatoPrice: 370,
//                 veg: true
//             }
//         }
//     },
//     {
//         id: 4,
//         name: "Taaza Thindi",
//         image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGL-f7-dXrD6G8du2BKAGUsL9eSaI-zOxvg&s",
//         foods: {
//             create: {
//                 id: 4,
//                 name: "Masala Dosa",
//                 image: "https://b.zmtcdn.com/data/pictures/5/18359205/e9d93d62c2e1b028b8569685b9259400_featured_v2.jpg",
//                 swiggyPrice: 80,
//                 zomatoPrice: 70,
//                 veg: true
//             }
//         }
//     }
// ]

const foods = [
    {
        id: 1,
        name: "Al-Bek",
        image: "https://lh3.googleusercontent.com/rpJQBlUcqOcobGQJ3dH7Ruh4-13LOnDTIWA4XpOFC-8_4Ltl91Vltbw_I-krYV0s460yxLQnysOufWFPkXbROFes4w=w1200-rw",
        foods: {
            create: {
                id: 1,
                name: "Chicken Biryani",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUkFl4-e90gihmLEM7TZZ-LTbwkWQ47VaLMQ&s",
                swiggyPrice: 260,
                zomatoPrice: 250,
                veg: false
            }
        }
    },
    {
        id: 2,
        name: "Third Wave Coffee",
        image: "https://www.holidify.com/images/cmsuploads/compressed/21055982_510180505983789_1897172236679761959_o_20180521112425.jpg",
        foods: {
            create: {
                id: 2,
                name: "Cappuccino",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1q-KygtbfC_Q5-VjitWA3yoJKJcAKPKDAGw&s",
                swiggyPrice: 290,
                zomatoPrice: 280,
                veg: true
            }
        }
    },
    {
        id: 3,
        name: "The Socials",
        image: "https://mir-s3-cdn-cf.behance.net/projects/404/946591184594827.Y3JvcCwyNTAwLDE5NTUsMCwxMjM.jpg",
        foods: {
            create: {
                id: 3,
                name: "Red Sauce Pasta",
                image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRovs-UolqwaFBbVw6D0LIpi11GzoLjC4BSA&s",
                swiggyPrice: 360,
                zomatoPrice: 370,
                veg: true
            }
        }
    },
    {
        id: 4,
        name: "Taaza Thindi",
        image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrGL-f7-dXrD6G8du2BKAGUsL9eSaI-zOxvg&s",
        foods: {
            create: {
                id: 4,
                name: "Masala Dosa",
                image: "https://b.zmtcdn.com/data/pictures/5/18359205/e9d93d62c2e1b028b8569685b9259400_featured_v2.jpg",
                swiggyPrice: 80,
                zomatoPrice: 70,
                veg: true
            }
        }
    },
    {
        id: 5,
        name: "Hyderabadi Biryaani House",
        image: "https://lh3.googleusercontent.com/-O6nTT2HNEYc/X5F5fWskgjI/AAAAAAADDfs/oimW2H93_d4GbvNbGfdCqM3WFOlEqLDCwCLcBGAsYHQ/w640-h515/IMG_20201020_193152.jpg",
        foods: {
            create: {
                id: 5,
                name: "Hyderabadi Chicken Biryani",
                image: "https://tse4.mm.bing.net/th?id=OIP.kg-W8rJ-gftCc2h18NubwAHaFj&pid=Api&P=0&h=180",
                swiggyPrice: 250,
                zomatoPrice: 260,
                veg: false
            }
        }
    },
    {
        id: 6,
        name: "Dyu Art Cafe",
        image: "https://www.holidify.com/images/cmsuploads/compressed/12951451148747423959296694299789362596195612o_20210129180759.jpg",
        foods: {
            create: {
                id: 6,
                name: "Cheesy Mushroom Burger",
                image: "https://b.zmtcdn.com/data/dish_photos/149/8ca9cfdc8452a0a079f12fea25a12149.jpeg?fit=around|130:130&crop=130:130;*,*",
                swiggyPrice: 300,
                zomatoPrice: 320,
                veg: true
            }
        }
    },
    {
        id: 7,
        name: "MTR (Mavalli Tiffin Rooms)",
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/9/d/y/p9492-1460876592571335300c061.jpg?tr=tr:n-xlarge",
        foods: {
            create: {
                id: 7,
                name: "Masala Dosa",
                image: "https://images.squarespace-cdn.com/content/v1/53347a62e4b020b97b38554c/1427919136763-RB1BKB1PEN0BVS14W503/image-asset.jpeg",
                swiggyPrice: 150,
                zomatoPrice: 160,
                veg: true
            }
        }
    },
    {
        id: 8,
        name: "Nagarjuna Restaurant",
        image: "https://www.nagarjunarestaurants.com/images/branch/Indiranagar.jpg",
        foods: {
            create: {
                id: 8,
                name: "karivepaku chicken",
                image: "https://tse2.mm.bing.net/th?id=OIP.Pdf4amrOlJanTbT6_6gwsgHaE8&pid=Api&P=0&h=180",
                swiggyPrice: 120,
                zomatoPrice: 130,
                veg: false
            }
        }
    },
    {
        id: 9,
        name: "Shao",
        image: "https://i0.wp.com/greatnewplaces.com/wp-content/uploads/2023/03/GNP-Post-Shao01.jpg?resize=1024%2C1024&ssl=1",
        foods: {
            create: {
                id: 9,
                name: "Peking Duck",
                image: "https://static01.nyt.com/images/2019/01/28/dining/kc-peking-duck/kc-peking-duck-threeByTwoMediumAt2X-v2.jpg",
                swiggyPrice: 800,
                zomatoPrice: 820,
                veg: false
            }
        }
    },
    {
        id: 10,
        name: " Soul City-Oakwood Premier Prestige",
        image: "https://lh3.googleusercontent.com/kRJSn6aiKrbZNYNBtHp86eEcn_mZNX9MVTI4lAfIblOLW9NjgEDrCsTMeWRYRzhxLigwvGbM2iDcr5REbY3bZnHjLqA=w1200-rw",
        foods: {
            create: {
                id: 10,
                name: "Subz Seekh Kebab",
                image: "https://b.zmtcdn.com/data/dish_photos/4ac/1462e69bdb2886aec2439e625b4b54ac.jpg?output-format=webp",
                swiggyPrice: 500,
                zomatoPrice: 520,
                veg: false
            }
        }
    },
    {
        id: 11,
        name: "Truffles",
        image: "https://tse2.mm.bing.net/th?id=OIP.8Wkd5gJ2apPgx7oWZGkxiQHaE8&pid=Api&P=0&h=180",
        foods: {
            create: {
                id: 11,
                name: "Cheeseburger",
                image: "https://b.zmtcdn.com/data/pictures/chains/9/51039/99b002b985def493b463c925ba4c70f6.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
                swiggyPrice: 350,
                zomatoPrice: 370,
                veg: false
            }
        }
    },
    {
        id: 12,
        name: "Bistro Claytopia",
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/t/j/p11477-15348368845b7bc0944be4d.jpg?w=1200",
        foods: {
            create: {
                id: 12,
                name: "Blue Berry Cheesecake",
                image: "https://tse3.mm.bing.net/th?id=OIP.q_yMTN3NPbskEk-BB4jTWQHaHa&pid=Api&P=0&h=180",
                swiggyPrice: 450,
                zomatoPrice: 470,
                veg: false
            }
        }
    },
    {
        id: 13,
        name: "The Biere Club",
        image: "https://tariqsp.com/wp-content/uploads/2023/02/the-biere-club.png",
        foods: {
            create: {
                id: 13,
                name: "Craft Beer",
                image: "https://media.timeout.com/images/102939938/image.jpg",
                swiggyPrice: 700,
                zomatoPrice: 720,
                veg: true
            }
        }
    },
    {
        id: 14,
        name: "Barbeque Nation",
        image: "https://tse4.mm.bing.net/th?id=OIP.b7KNbl7Jokh9BTDyRRHLlwHaEK&pid=Api&P=0&h=180",
        foods: {
            create: {
                id: 14,
                name: "Grilled Prawns",
                image: "https://www.thespruceeats.com/thmb/ZlJQ_HIkqxyS9Z2zWyO6KQHLnr4=/5329x0/filters:no_upscale():max_bytes(150000):strip_icc()/shrimp-skewers-on-grill-78315052-5af888bfae9ab80036dbcc45.jpg",
                swiggyPrice: 600,
                zomatoPrice: 620,
                veg: false
            }
        }
    },
    {
        id: 15,
        name: "Republic Of Noodles",
        image: "https://b.zmtcdn.com/data/pictures/9/52219/1aa594d64718e99ff4603bcec7a24b8f.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        foods: {
            create: {
                id: 15,
                name: "Popiya je- Vegetables",
                image: "https://b.zmtcdn.com/data/pictures/chains/0/51930/1776526ed2cb1c1ae02c8b15800c9902.jpg?fit=around%7C200%3A200&crop=200%3A200%3B%2A%2C%2A",
                swiggyPrice: 350,
                zomatoPrice: 370,
                veg: true
            }
        }
    },
    {
        id: 16,
        name: "Koshy’s",
        image: "https://tse4.mm.bing.net/th?id=OIP.WG9kDyuosWHyJIT-kxggrwHaD4&pid=Api&P=0&h=180",
        foods: {
            create: {
                id: 16,
                name: "Egg Curry",
                image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2018/Dhaba_Style_Egg_Curry_Recipe-3.jpg",
                swiggyPrice: 220,
                zomatoPrice: 240,
                veg: false
            }
        }
    },
    {
        id: 17,
        name: "Muro",
        image: "https://b.zmtcdn.com/data/pictures/8/20930988/b17483e90471e23a29667aff9dd0fe73.jpg?output-format=webp&fit=around|771.75:416.25&crop=771.75:416.25;*,*",
        foods: {
            create: {
                id: 17,
                name: "Fruit Som Tam",
                image: "https://moveablefeast.relish.com/wp-content/uploads/2020/10/Ricker-thai-fruit-salad-recipe-main.jpg",
                swiggyPrice: 400,
                zomatoPrice: 410,
                veg: false
            }
        }
    },
    {
        id: 18,
        name: "Glen's Bakehouse",
        image: "https://fastly.4sqi.net/img/general/600x600/23721403_Eo1-Rj76GECOZs_kpPdosF4tYGhu92ZPtTHqkocZ4bU.jpg",
        foods: {
            create: {
                id: 18,
                name: "Bagels With Cream Cheese & Egg Combo",
                image: "https://breadboozebacon.com/wp-content/uploads/2022/09/Bacon-Egg-Cheese-Bagel-Breakfast-Sandwich-IC-3-800x1200.jpg",
                swiggyPrice: 250,
                zomatoPrice: 270,
                veg: true
            }
        }
    },
    {
        id: 19,
        name: "Mikusu",
        image: "https://cdn.magzter.com/1426670943/1664427198/articles/DoCLveEDD1665572216993/MIKUSU-AT-CONRAD-BENGALURU.jpg",
        foods: {
            create: {
                id: 19,
                name: "Sushi Platter",
                image: "https://femina.wwmindia.com/content/2021/feb/tengreatplacessushimikusu1613980476.jpg",
                swiggyPrice: 800,
                zomatoPrice: 820,
                veg: false
            }
        }
    },
    {
        id: 20,
        name: "Cafe Coffee Day",
        image: "https://static.startuptalky.com/2020/05/ccd_outlet_startuptalky.jpg",
        foods: {
            create: {
                id: 20,
                name: "Cold Coffee",
                image: "https://tse3.mm.bing.net/th?id=OIP.E3ZCdNeCjKNeEVJHf_6m-AHaHa&pid=Api&P=0&h=180",
                swiggyPrice: 150,
                zomatoPrice: 170,
                veg: true
            }
        }
    },
    {
        id: 21,
        name: "Karavalli",
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/u/c/p1249-1434368981557ebbd55a9d0.jpg?tr=tr:n-xlarge",
        foods: {
            create: {
                id: 21,
                name: "Appam with Stew",
                image: "https://img-global.cpcdn.com/recipes/3254add211876005/680x482cq70/appam-and-stew-recipe-main-photo.jpg",
                swiggyPrice: 300,
                zomatoPrice: 310,
                veg: true
            }
        }
    },
    {
        id: 22,
        name: "Brahmin's Coffee Bar",
        image: "https://tariqsp.com/wp-content/uploads/2023/02/brahmins-coffee-bars-story.jpeg",
        foods: {
            create: {
                id: 22,
                name: "Idli Vada",
                image: "https://as2.ftcdn.net/v2/jpg/04/65/28/87/1000_F_465288715_F3uc0aZMhzSbNbftEzHSb6RfUVQfCHeU.jpg",
                swiggyPrice: 80,
                zomatoPrice: 85,
                veg: true
            }
        }
    },
    {
        id: 23,
        name: "Biryani Paradise",
        image: "https://media-cdn.tripadvisor.com/media/photo-p/15/aa/78/48/photo0jpg.jpg",
        foods: {
            create: {
                id: 23,
                name: "Chicken Dum Biryani",
                image: "https://imgcld.yatra.com/ytimages/image/upload/t_seo_Magnum_w_452_h_285_c_fill_g_auto_q_auto:good_f_jpg/v1469514359/General_hyderabadi_biryani_best_places_to_eat.jpgg",
                swiggyPrice: 280,
                zomatoPrice: 290,
                veg: false
            }
        }
    },
    {
        id: 24,
        name: "Corner House",
        image: "https://im.whatshot.in/img/2020/Feb/corner1-1581379607.jpg",
        foods: {
            create: {
                id: 24,
                name: "Death by Chocolate",
                image: "https://example.com/death_by_chocolate.jpg",
                swiggyPrice: 150,
                zomatoPrice: 160,
                veg: true
            }
        }
    },
    {
        id: 25,
        name: "Lavonne Cafe",
        image: "https://flogginimages.s3.ap-south-1.amazonaws.com/outlets/outlets_80_1623783029.6598654.png",
        foods: {
            create: {
                id: 25,
                name: "Macarons",
                image: "https://i.pinimg.com/originals/8e/49/2c/8e492c9eb81e745d46143345613465ba.jpg",
                swiggyPrice: 500,
                zomatoPrice: 510,
                veg: true
            }
        }
    },
    {
        id: 26,
        name: "Polar Bear",
        image: "https://tse1.mm.bing.net/th?id=OIP.QVEfY0n58FIu2Jw8s8pehAHaDa&pid=Api&P=0&h=180",
        foods: {
            create: {
                id: 26,
                name: "Ice Cream Sundae",
                image: "https://akns-images.eonline.com/eol_images/Entire_Site/2014323/rs_600x600-140423094554-600.Bagatelle-Ice-Cream-Sundae.jl.042314.jpg?fit=around%7C1080:1080&output-quality=90&crop=1080:1080;center,top",
                swiggyPrice: 210,
                zomatoPrice: 260,
                veg: true
            }
        }
    },
    {
        id: 27,
        name: "Byg Brewski Brewing Company",
        image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/n/e/p111613-16787917286410543036b62.jpg?tr=tr:n-xlarge",
        foods: {
            create: {
                id: 27,
                name: "Grilled Fish Steak",
                image: "https://im1.dineout.co.in/images/uploads/restaurant/sharpen/1/f/g/p111613-1669117937637cb7f1e0f02.jpg?tr=tr:n-large",
                swiggyPrice: 450,
                zomatoPrice: 460,
                veg: false
            }
        }
    },
    {
        id: 28,
        name: "Hakuna Matata",
        image: "https://media.disneylandparis.com/d4th/en-us/images/n017893_2050jan01_restaurant-hakuna-matata_16-9_tcm795-159236.jpg?w=1960",
        foods: {
            create: {
                id: 28,
                name: "Sangria White",
                image: "https://i.pinimg.com/originals/9e/e8/51/9ee85130e56ece1990e4324c07ef40f9.jpg",
                swiggyPrice: 1899,
                zomatoPrice: 1900,
                veg: true
            }
        }
    },
    {
        id: 29,
        name: "Rameshwaram Cafe",
        image: "https://images.indianexpress.com/2024/03/rameshwaram-cafe-blast-2.jpg?w=640",
        foods: {
            create: {
                id: 29,
                name: "Bisi Bele Bhath",
                image: "https://irhindi.in/wp-content/uploads/2023/01/best-bisi-bele-bath-recipe-in-hindi.jpg",
                swiggyPrice: 170,
                zomatoPrice: 175,
                veg: true
            }
        }
    },
    {
        id: 30,
        name: "The Scene",
        image: "https://tse2.mm.bing.net/th?id=OIP.cLeQviGK71TZalhgABa3BQHaEK&pid=Api&P=0&h=180",
        foods: {
            create: {
                id: 30,
                name: "Parmesan Mushroom",
                image: "https://www.iheartnaptime.net/wp-content/uploads/2016/01/EasyParmesanMushroomGnocchiHERO.jpg",
                swiggyPrice: 245,
                zomatoPrice: 235,
                veg: true
            }
        }


    }
]


async function main() {
    console.log("Start seeding...");

    for (const food of foods) {
        const result = await prisma.restaurant.upsert({
            where: { id: food.id },
            update: {},
            create: food
        });
        console.log(`Created dish with id: ${result.id}`);
    }
    console.log(`Seeding finished.`);
}

main()
    .then(async () => {
        await prisma.$disconnect();
    })
    .catch(async (e) => {
        console.error(e);
        await prisma.$disconnect();
        process.exit(1);
    });