import {
    randBetweenDate,
    randNumber,
    randProduct,
    randProductAdjective,
} from "@ngneat/falso";
import { PrismaClient } from "@prisma/client";

const primsa = new PrismaClient();

const main = async () => {
    
    // try {
    //     await primsa.category.deleteMany();
    //     await primsa.product.deleteMany();
    //     const fakeProducts = randProduct({
    //         length: 1000,
    //     });
    //     for (let index = 0; index < fakeProducts.length; index++) {
    //         const product = fakeProducts[index];
    //         const productAdjective = randProductAdjective();
    //         await primsa.product.upsert({
    //             where: {
    //                 title: `${productAdjective} ${product.title}`,
    //             },
    //             create: {
    //                 title: `${productAdjective} ${product.title}`,
    //                 description: product.description,
    //                 price: product.price,
    //                 image: `${product.image}/tech`,
    //                 quantity: randNumber({ min: 10, max: 100 }),
    //                 category: {
    //                     connectOrCreate: {
    //                         where: {
    //                             name: product.category,
    //                         },
    //                         create: {
    //                             name: product.category,
    //                             createdAt: randBetweenDate({
    //                                 from: new Date("10/06/2020"),
    //                                 to: new Date(),
    //                             }),
    //                         },
    //                     },
    //                 },
    //                 createdAt: randBetweenDate({
    //                     from: new Date("10/07/2020"),
    //                     to: new Date(),
    //                 }),
    //             },
    //             update: {},
    //         });
    //     }
    // } catch (error) {
    //     throw error;
    // }

    
    //  await primsa.category.create({
    //     data: {
    //         name: "Spices",
    //         products: {
    //             create: [
    //                 {
    //                     title: "Turmeric",
    //                     description: "Turmeric is a spice that comes from the root of a plant in the ginger family. It's used in cooking and has been used in traditional medicine for thousands of years.",
    //                     price: "20,000 per Kg",
    //                     image: "https://res.cloudinary.com/druug5tgz/image/upload/v1674858596/Spices/Turmeric-PNG-Clipart_f0tujt.png",
    //                     quantity: 10,
    //                 },
    //                 {
    //                     title: "Cinnamon",
    //                     description: "Cinnamon is a spice made from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive in a wide variety of cuisines, sweet and savoury dishes, breakfast cereals, snackfoods, tea and traditional foods.",
    //                     price: "20,000 per Kg",
    //                     image: "https://res.cloudinary.com/druug5tgz/image/upload/v1674858594/Spices/cinamon_sticks_jw8k6c.png",
    //                     quantity: 10,
    //                 }
    //             ]
    //         }
    //     }

       
    // });

    //create products
    // await primsa.product.create({
    //     data: {
    //         title: "Turmeric",
    //         description: "Turmeric is a spice that comes from the root of a plant in the ginger family. It's used in cooking and has been used in traditional medicine for thousands of years.",
    //         price: "20,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1674858596/Spices/Turmeric-PNG-Clipart_f0tujt.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Spices",
    //                 },
    //                 create: {
    //                     name: "Spices",
    //                 },
    //             },
    //         },
    //     },
    // });

    await primsa.product.create({
        data: {
            title: "Cinnamon",
            description: "Cinnamon is a spice made from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive.",
            price: "10,000 per Kg",
            quantity: 10,
            image: "https://res.cloudinary.com/druug5tgz/image/upload/v1674858594/Spices/cinamon_sticks_jw8k6c.png",
            category: {
                connectOrCreate: {
                    where: {
                        name: "Spices",
                    },
                    create: {
                        name: "Spices",
                    },
                },
            },
        },
    });

};

main().catch((err) => {
    console.warn("Error While generating Seed: \n", err);
});