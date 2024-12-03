import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient()

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
                zomatoPrice: 270,
                veg: true
            }
        }
    },
    {
        id: 2,
        name: "Third Wave Coffee",
        image: "https://staticnew.locowiz.com/locomedia/third-wave-coffee/1657527215_1763200683.jpeg",
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
        image: "https://www.socialoffline.in/img/koramangala-social-03.jpg",
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