import { FaFacebook, FaInstagram, FaTwitter, FaCloudShowersHeavy, FaFish, FaLeaf } from "react-icons/fa"
import { GiHarborDock } from "react-icons/gi";

export const Socails = [
    {
        id : 1,
        url : 'https://www.facebook.com/profile.php?id=100090643534344&locale=sw_KE',
        icon : <FaFacebook/>,
        text : 'FaceBook' 
    },
    {
        id : 2,
        url : 'https://www.instagram.com/findyourkicksindia',
        icon : <FaInstagram/>,
        text : 'Instagram' 
    },
    {
        id : 3,
        url : 'https://twitter.com/findyourkicks',
        icon : <FaTwitter/>, 
        text: 'Twitter'
    }
]

export const About = [
    {
        id : 1, 
        text: 'About Us', 
        url: ''
    },
    {
        id : 3, 
        text: 'Privacy Policy', 
        url: ''
    },
    {
        id : 4, 
        text: 'Terms & Condition', 
        url: ''
    },
    {
        id : 5, 
        text: 'Contact', 
        url: ''
    },
] 

export const Account = [
    {
        id: 1, 
        text: 'Sign In',
        url: '/login'
    },
    {
        id: 2, 
        text: 'Catch Records',
        url: ''
    },
    {
        id: 3, 
        text: 'Track Progress',
        url: ''
    },
    {
        id: 5, 
        text: 'Help',
        url: ''
    }
]

export const harbours = [
    {
        id: 1,
        name: "West Coast",
        no_of_harbours: 5,
        url: require('../images/harbours/west-coast.jpg'),
    },
    {
        id: 1,
        name: "East Coast",
        no_of_harbours: 8,
        url: require('../images/harbours/east-coast.jpg'),
    },
    {
        id: 1,
        name: "Union Territories",
        no_of_harbours: 3,
        url: require('../images/harbours/union-teritory.jpg'),
    }
]

export const Services = [
    {
        id: 1,
        name: 'Discover Possibilities',
        icon: <FaCloudShowersHeavy/>,
        link: '/services',
    },
    {
        id: 2,
        name: 'Catch Availability',
        icon: <FaFish/>,
        link: '/services',   
    },
    {
        id: 3,
        name: 'Harbour Watch',
        icon: <GiHarborDock/>,
        link: '/services',
    },
    {
        id: 4,
        name: 'Eco Perks',
        icon: <FaLeaf/>,
        link: '/services',   
    }
] 

export const forum = [
    {
        "user_id": "65b485b180ddbc7bdcad7288", 
        "title": "Exploring Hidden Harbours",
        "content": "I recently embarked on a quest to discover hidden harbours in my area",
        "image": "/images/habour.jpg"
    }
]