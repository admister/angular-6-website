// import { PLATFORM_SERVER_ID } from "@angular/common/src/platform_id";

export const configuration = {
    header: {
        heading: 'My website',
        headingtext: 'Namari is a free landing page template you can use for your projects. It is free to use for your personal and commercial projects, enjoy!',
        buttontext: 'do some action!',
        buttonlink: '\home'
    },
    intro: {
        tagline: 'SUCESS',
        title: 'How We Help You To Sell Your Product',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do \n eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        features: [
            {icon:'html5', title:'HTML5 &amp; CSS3', description:'Has ne tritani atomorum conclusionemque, in dolorum volumus cotidieque eum. At vis choro neglegentur iudico'},
            {icon:'bolt', title:'Easy to Use', description:'Cu vero ipsum vim, doctus facilisi sea in. Eam ex falli honestatis repudiandae, sit detracto mediocrem disputationi'},
            {icon:'tablet', title:'Fully Responsive', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'},
            {icon:'rocket', title:'Parallax Effect', description:'Id porro tritani recusabo usu, eum intellegam consequuntur et. Fugit debet ea sit, an pro nemore vivendum'},
        ]
    },
    services: {
        tagline: 'BELIEVING',
        title: 'Focusing On What Matters Most',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!'
    },
    testimonials: {
        tagline: 'FEEDBACK',
        title: 'What our customers are saying',
        description: '',
        feedbacks : [
            {name: 'John Doe', userimage: 'user-1.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'ABC'},
            {name: 'Roslyn Doe', userimage: 'user-2.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'XYZ'},
            {name: 'Thomas Doe', userimage: 'user-3.jpg', comments:'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua', company: 'PQR'},
        ]
    },
    clients: {
        tagline: 'TRUST',
        title: 'Companies who use our services',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam!',
        companies: [
            {name: 'Tree', weblink: 'company-logo1.png', logo: 'company-logo1.png'},
            {name: 'Fingerprint', weblink: 'company-logo2.png', logo: 'company-logo2.png'},
            {name: 'The Man', weblink: 'company-logo3.png', logo: 'company-logo3.png'},
            {name: 'Mustache', weblink: 'company-logo4.png', logo: 'company-logo4.png'},
            {name: 'Goat', weblink: 'company-logo5.png', logo: 'company-logo5.png'},
            {name: 'Justice', weblink: 'company-logo6.png', logo: 'company-logo6.png'},
            {name: 'Ball', weblink: 'company-logo7.png', logo: 'company-logo7.png'},
            {name: 'Cold', weblink: 'company-logo8.png', logo: 'company-logo8.png'},
            {name: 'Cold', weblink: 'company-logo9.png', logo: 'company-logo9.png'},
        ]
    },
    pricing: {
        tagline: 'YOUR CHOICE',
        title: 'We have the right package for you',
        description: '',
        plans: [
            {title: 'PERSONAL', subtitle: 'The standard version', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '19', currency: '₹',
                downloads:'5 Downloads', extensions:'2 Extensions', tutorials: 'Tutorials', support: 'Forum Support', updates:'1 year free updates',
            buttontext: 'Buy Now', buttonlink: '#', featured: false
            },
            {title: 'STUDENT', subtitle: 'Most popular choice', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '29', currency: '₹', 
                downloads:'15 Downloads', extensions:'5 Extensions', tutorials: 'Tutorials with files', support: 'Forum Support', updates:'2 year free updates',
            buttontext: 'Buy Now', buttonlink: '#', featured: true
            },
            {title: 'BUSINESS', subtitle: 'For the whole team', description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit', price: '49', currency: '₹', 
                downloads:'Unlimited Downloads', extensions:'Unlimited Downloads', tutorials: 'HD Video Tutorials', support: 'Chat Support', updates:'Lifetime free updates',
            buttontext: 'Buy Now', buttonlink: '#', featured: false
            }
        ]
    },
    gallery: {
        images: [
            'gallery-image-1.jpg',
            'gallery-image-2.jpg',
            'gallery-image-3.jpg',
            'gallery-image-4.jpg',
            'gallery-image-5.jpg',
            'gallery-image-6.jpg',
        ]
    },
    footer: {
        copyrighttext: 'Made with ❤ by',
        developer: 'AdMISTER STUDIO',
        developerlink: 'http://admister.in',
    },
    socialsites: [
        {title: 'Facebook', target: '_blank', username: 'jagmohan', icon: 'facebook'},
        {title: 'Google+', target: '_blank', username: '+jagmohan', icon: 'google-plus'},
        {title: 'Twitter', target: '_blank', username: 'jagmohan', icon: 'twitter'},
        {title: 'Instagram', target: '_blank', username: 'jagmohan', icon: 'instagram'},
        {title: 'Behance', target: '_blank', username: 'jagmohan', icon: 'behance'},
    ],
    blog: {
        tagline: 'MY BLOG',
        title: 'Thoughts become things..'
        
    }
};
