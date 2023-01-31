import {
    randBetweenDate,
    randNumber,
    randProduct,
    randProductAdjective,
} from "@ngneat/falso";
import { PrismaClient } from "@prisma/client";

const primsa = new PrismaClient();

const main = async () => {
    

    
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

    // await primsa.category.create({
    //     data: {
    //         name: "Spices"
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

    // await primsa.product.create({
    //     data: {
    //         title: "Cinnamon",
    //         description: "Cinnamon is a spice made from the inner bark of several tree species from the genus Cinnamomum. Cinnamon is used mainly as an aromatic condiment and flavouring additive.",
    //         price: "10,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675165151/Spices/cina2_c6ayew.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Oregano",
    //         description: "Oregano is a perennial herb with fragrant, aromatic leaves. It is native to the Mediterranean region, but it is now cultivated and used in many other regions as well.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675167952/Spices/oregano_ffqkbl.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "White Pepper",
    //         description: "White pepper is a spice made from the dried, fully ripened fruit of the pepper plant. It is used to add a spicy flavor to dishes. White pepper is made from the same plant as black pepper.",
    //         price: "17,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675167949/Spices/white_pepper_mdql2b.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Tamarind",
    //         description: "Tamarind is a leguminous tree in the family Fabaceae indigenous to tropical Africa. The genus Tamarindus is a monotypic taxon.",
    //         price: "11,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167949/Spices/Tamarind_jpjfx5.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Nutmeg",
    //         description: "Nutmeg is a seed and spice from the tropical tree Myristica fragrans, native to the Banda Islands in Indonesia. The tree is also known by the names nutmeg mace, mace, and nutmeg tree.",
    //         price: "8,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675171282/Spices/nutmeg_2_ar3rkp.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Garlic",
    //         description: "Garlic is a species in the onion genus, Allium. Its close relatives include the onion, shallot, leek, chive, and Chinese onion. Garlic is native to Central Asia and northeastern Iran.",
    //         price: "4,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675167948/Spices/garlic_krv29r.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Star Anise",
    //         description: "Star anise is the star-shaped fruit of the evergreen tree Illicium verum, native to China. It is used whole or ground as a spice in Chinese, Japanese, Korean, Vietnamese, and Thai cuisines.",
    //         price: "7,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167949/Spices/star_anise_wqkkai.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Red Chilli",
    //         description: "Red chilli is a spice made from the dried ripe fruit of plants belonging to the genus Capsicum. It is used to add a spicy flavour to dishes.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167948/Spices/red_chili_mtjeoa.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Ginger",
    //         description: "Ginger is a flowering plant whose rhizome, ginger root or ginger, is widely used as a spice or a folk medicine. It is a herbaceous perennial which grows annual pseudostems",
    //         price: "6,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675171290/Spices/ginger_2_mvrpjd.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Cloves",
    //         description: "Cloves are the aromatic flower buds of a tree in the family Myrtaceae, Syzygium aromaticum. The tree is native to the Moluccas, in Indonesia.",
    //         price: "8,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675171586/Spices/cloves3_wotim1.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "nigella seed",
    //         description: "Nigella sativa, commonly known as black cumin, nigella, nutmeg flower, fennel flower, Roman coriander, or kalonji, is native to southwest and Central Asia.",
    //         price: "7,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167946/Spices/nigella_seeds_wvhvrq.webp",
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

    // await primsa.product.create({
    //     data: {
    //         title: "gooseberry",
    //         description: "Gooseberry is a common name for several species of deciduous shrubs in the genus Ribes in the family Grossulariaceae. The name is also used for the fruit of these plants. ",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167946/Spices/gooseberry_el4ozu.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Cardamom",
    //         description: "Cardamom is a spice made from the seeds of several plants in the genera Elettaria and Amomum in the family Zingiberaceae. The two genera contain about 30 species.",
    //         price: "16,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167946/Spices/cardamom_yzzobp.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Black Pepper",
    //         description: "Black pepper is a flowering vine in the family Piperaceae, cultivated for its fruit, which is usually dried and used as a spice and seasoning.",
    //         price: "10,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675172336/Spices/blackpepper2_pskghi.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Coriander",
    //         description: "Coriander, also known as cilantro or Chinese parsley, is an annual herb in the family Apiaceae. It is also known as dhania or kothmir in Hindi, and as dhania or coriander in English.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675172786/Spices/cori_gpoy5z.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Bay leaves",
    //         description: "Bay leaves are the aromatic leaves of several kinds of laurel. The name is also used for the related trees, which are in the flowering plant genus Laurus.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675167945/Spices/bay_mdhm5z.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Cumin",
    //         description: "Cumin is a flowering plant in the family Apiaceae, native from the east Mediterranean to India. It is a herbaceous annual plant, about 50 cm (20 in) tall, with yellow flowers.",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675173063/Spices/cumin2_tguo5g.png",
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

    // await primsa.product.create({
    //     data: {
    //         title: "Rosemary",
    //         description: "Rosemary is a woody, perennial herb with fragrant, evergreen, needle-like leaves and white, pink, purple, or blue flowers, native to the Mediterranean region. ",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675204682/Spices/Rosemary_raf5sp.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Herbs",
    //                 },
    //                 create: {
    //                     name: "Herbs",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Sage",
    //         description: " Salvia officinalis, the common sage or just sage, is a perennial, evergreen subshrub, with woody stems, grayish leaves, and blue to purplish flowers.",
    //         price: "8,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675204681/Spices/Sage_bj9ojo.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Herbs",
    //                 },
    //                 create: {
    //                     name: "Herbs",
    //                 },
    //             },
    //         },
    //     },
    // });    

    // await primsa.product.create({
    //     data: {
    //         title: "Thyme",
    //         description: "Thyme is a genus of about 350 species of perennial aromatic herbs and subshrubs in the family Lamiaceae, native to temperate regions of the Old World. ",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675204680/Spices/thyme_u6hxke.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Herbs",
    //                 },
    //                 create: {
    //                     name: "Herbs",
    //                 },
    //             },
    //         },
    //     },
    // });

    //  await primsa.product.create({
    //     data: {
    //         title: "Mint",
    //         description: "Mint is a genus of plants belonging to the family Lamiaceae (mint family). The genus comprises about 25–30 species of flowering plants, which are perennial, semi-evergreen or evergreen herbs.",
    //         price: "7,000 per Kg",
    //         quantity: 10,
    //         image: "https://res.cloudinary.com/druug5tgz/image/upload/v1675204681/Spices/Mint_kquqws.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Herbs",
    //                 },
    //                 create: {
    //                     name: "Herbs",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Oregano Leaves",
    //         description: "Oregano is a flowering plant in the mint family Lamiaceae. It is native to the Mediterranean region",
    //         price: "5,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675204677/Spices/oregano_niqomr.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Herbs",
    //                 },
    //                 create: {
    //                     name: "Herbs",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Parsley",
    //         description: "Parsley is a genus of about 30 species of flowering plants in the family Apiaceae that are native to the central and eastern Mediterranean region and surrounding areas.",
    //         price: "3,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675204679/Spices/Parsley_yv5n57.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Herbs",
    //                 },
    //                 create: {
    //                     name: "Herbs",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Dill",
    //         description: "Dill is an annual herb in the celery family Apiaceae. It is a common ingredient in pickling, and is used as a flavoring agent in many cuisines.",
    //         price: "4,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675204680/Spices/Dill_tamubn.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Herbs",
    //                 },
    //                 create: {
    //                     name: "Herbs",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Basil",
    //         description: "Basil is a culinary herb of the family Lamiaceae (mint family). It is also called great basil to distinguish it from the related Holy basil.",
    //         price: "2,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675204677/Spices/Basil_ovy667.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Herbs",
    //                 },
    //                 create: {
    //                     name: "Herbs",
    //                 },
    //             },
    //         },
    //     },
    // });

    // await primsa.product.create({
    //     data: {
    //         title: "Fresh Coriander ",
    //         description: "Coriander, also known as cilantro or Chinese parsley, is an annual herb in the family Apiaceae. It is also known as dhania or kothmir in Hindi.",
    //         price: "3,000 per Kg",
    //         quantity: 10,
    //         image:"https://res.cloudinary.com/druug5tgz/image/upload/v1675204677/Spices/coriander_rdyinw.png",
    //         category: {
    //             connectOrCreate: {
    //                 where: {
    //                     name: "Herbs",
    //                 },
    //                 create: {
    //                     name: "Herbs",
    //                 },
    //             },
    //         },
    //     },
    // });



};

main().catch((err) => {
    console.warn("Error While generating Seed: \n", err);
});