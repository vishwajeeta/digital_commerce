export const PRODUCT_CATEGORIES=[
    {
        label:"UI Kits",
        value:"ui_kits" as const,//like internal id
        featured:[
            {
                name:"Editor picks",
                href:"#",
                imageSrc:"./next.svg"
            },
            {
                name:"New Arrivals",
                href:"#",
                imageSrc:"./vercel.svg"
            },
            {
                name:"Bestsellers",
                href:"#",
                imageSrc:"./next.svg"
            }
        ]
    },
    {
        label:"Icons",
        value:"icons" as const,//like internal id
        featured:[
            {
                name:"Favorite Icon Picks",
                href:"#",
                imageSrc:"./next.svg"
            },
            {
                name:"New Arrivals",
                href:"#",
                imageSrc:"./vercel.svg"
            },
            {
                name:"Bestselling Icons",
                href:"#",
                imageSrc:"./next.svg"
            }
        ]
    }
]