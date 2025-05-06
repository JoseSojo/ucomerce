import { ProductData2 } from "./types";

export const mockProduct: ProductData2 = {
    id: '1',
    name: 'Smartphone Galaxy S23 Ultra 512GB - Phantom Black',
    description: 'Experience the ultimate smartphone with our latest Galaxy S23 Ultra. Featuring a stunning 6.8" Dynamic AMOLED display, 200MP camera system, and all-day battery life. This premium device comes with 512GB of storage and 12GB RAM to handle all your needs from photography to gaming and productivity.',
    price: 1299.99,
    category: 'Electronics',
    stock: 15,
    imageUrl: 'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    images: [
        'https://images.pexels.com/photos/404280/pexels-photo-404280.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        'https://images.pexels.com/photos/1647976/pexels-photo-1647976.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1'
    ],
    specifications: {
        'Display': '6.8" Dynamic AMOLED 2X, 120Hz',
        'Processor': 'Snapdragon 8 Gen 2',
        'RAM': '12GB',
        'Storage': '512GB',
        'Battery': '5000mAh',
        'Camera': '200MP main + 12MP ultrawide + 10MP telephoto',
        'OS': 'Android 13',
        'Dimensions': '163.4 x 78.1 x 8.9 mm',
        'Weight': '233g'
    },
    rating: 4.8,
    reviews: [
        {
            id: 'r1',
            userName: 'TechEnthusiast',
            rating: 5,
            comment: 'Absolutely love this phone! The camera quality is incredible and battery life is impressive.',
            date: '2023-04-15'
        },
        {
            id: 'r2',
            userName: 'MobilePhotographer',
            rating: 5,
            comment: 'Best smartphone camera I\'ve ever used. The 200MP sensor is a game changer for mobile photography.',
            date: '2023-03-28'
        },
        {
            id: 'r3',
            userName: 'PowerUser',
            rating: 4,
            comment: 'Great performance and features. Only downside is it gets a bit warm during intense gaming sessions.',
            date: '2023-04-02'
        }
    ],
    createdAt: '2023-02-01T10:00:00Z',
    updatedAt: '2023-04-15T14:30:00Z'
};

export const relatedProducts: ProductData2[] = [
    {
        id: '2',
        name: 'Smartphone Galaxy S23+ 256GB - Lavender',
        description: 'The Galaxy S23+ with 256GB storage and premium features.',
        price: 999.99,
        category: 'Electronics',
        stock: 20,
        imageUrl: 'https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 4.7,
        createdAt: '2023-02-01T10:00:00Z',
        updatedAt: '2023-04-10T12:30:00Z'
    },
    {
        id: '3',
        name: 'Smartphone Galaxy S23 128GB - Green',
        description: 'The compact Galaxy S23 with powerful features.',
        price: 799.99,
        category: 'Electronics',
        stock: 25,
        imageUrl: 'https://images.pexels.com/photos/47261/pexels-photo-47261.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 4.6,
        createdAt: '2023-02-01T10:00:00Z',
        updatedAt: '2023-04-05T09:15:00Z'
    },
    {
        id: '4',
        name: 'Galaxy Buds Pro 2 - Phantom Black',
        description: 'Premium wireless earbuds with active noise cancellation.',
        price: 199.99,
        category: 'Electronics',
        stock: 30,
        imageUrl: 'https://images.pexels.com/photos/3780681/pexels-photo-3780681.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
        rating: 4.5,
        createdAt: '2023-03-01T10:00:00Z',
        updatedAt: '2023-04-02T11:45:00Z'
    }
];