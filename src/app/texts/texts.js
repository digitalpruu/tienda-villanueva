const title = "Tienda Villanueva";
const slogan = "MANUALIDADES";
const email = "doriannacardenasalvarez@gmail.com";
const mensajeWhatsApp = encodeURIComponent(
    `¡Hola! Estoy interesado en los productos de ${title} y me gustaría obtener más información. ¡Gracias!`
);
const numeroWhatsApp = "3247326640";
const textos = {
    index: {
        title: `${title}`,
        slogan: `${slogan}`,
    },
    homeContent: {
        title: `${title}`,
    },
    about: {
        description1: "En Tienda Villanueva, nos especializamos en ofrecer una amplia variedad de productos desde verduras, abarrotes, empanadas hasta accesorios para el cabello a mano, adornos navideños, flores, manualidades, entre otros que inspiran creatividad y pasión. Nuestra tienda está diseñada para atender a creativos de todos los niveles, ofreciendo productos de calidad que se adaptan a tus necesidades y de esa forma aportas de forma positiva a la comunidad local. En Tienda Villanueva encontrarás todo lo que necesitas, además creemos en el poder de la creatividad y estamos comprometidos en proporcionarte las mejores fabricaciones para que tengas un toque de autenticidad. Ven y descubre cómo podemos ayudarte a hacer realidad tus ideas creativas. \n" +
            "Te invitamos a visitar Tienda Villanueva y experimentar la variedad y calidad de nuestros productos, para formar parte de una comunidad que celebra la creatividad sin límites."
    },
    contact: {
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
        email: email,
    },
    footer: {
        slogan: {
            p1: `${title}`,
            p2: slogan,
        },
        address: "",
        phone: numeroWhatsApp,
        email: email,
        facebook: "https://www.facebook.com/profile.php?id=61566160315486&locale=es_LA",
        instagram: "https://www.instagram.com/",
        whatsappLink: `https://wa.me/${numeroWhatsApp}?text=${mensajeWhatsApp}`,
    },
};
export default textos;
