import img1 from "./images/service-1.jpg";
import img2 from "./images/service-2.jpg";
import img3 from "./images/service-3.jpg";
import img4 from "./images/service-4.jpg";
import img5 from "./images/service-5.jpg";
import img6 from "./images/service-6.jpg";
import img7 from "./images/service-7.jpg";
import img8 from "./images/service-8.jpg";


export default [
  {
    sys: {
      id: "1"
    },
    fields: {
      name: "manicure",
      slug: "manicure",
      price: 17,
      description:
        "The manicure includes: shaping, gentle treatment of the cuticle and nails, softening the cuticle with oil and moisturizing cream. If you pay attention to the cleanliness of your hands and nails, the neat appearance, shape, and want to maintain healthy skin of your hands and nail plates, I recommend you to do a manicure at least once every two weeks. Very often, the skin of the hands and cuticle are overdried, losing moisture and attractiveness, therefore hygienic manicure is recommended to all without exception - both women and men. A manicure in the salon guarantees treatment with sterile instruments. Regular manicure helps to monitor the condition of the nails and protect against bacteria.",
      images: [
        {
          fields: {
            file: {
              url: img1
            }
          }
        },
      ]
    }
  },
  {
    sys: {
      id: "2"
    },
    fields: {
      name: "manicure + nail polish",
      slug: "manicure-nail-polish",
      price: 20,
      description:
        "A rich palette of colors from leading manufacturers is available. Standard nail polish is suitable for those who love to constantly change the color of nails and maintain the freshness of manicure. It can be  easily removed with a nail polish remover and does not penetrate deep into the nail plate.",
      images: [
        {
          fields: {
            file: {
              url: img2
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "3"
    },
    fields: {
      name: "manicure + gel polish",
      slug: "manicure-gel-polish",
      price: 25,
      description:
        "A wide selection of fashionable designs, a luxurious palette of gel colors from world-known manufacturers. Unlike nail polish, gel polish has higher wear resistance. Gel polish coating can lasts from 2 to 3 weeks on nails. Gel polish is an economical solution for those who value their time, money and always want to have well-groomed nails. Another advantage of gel polishes is the ability to choose interesting and fashionable design solutions, adjust the brightness of the color, create a nail design for a particular style or event. Please note, designs and removal of gel polish are paid separately.",
      images: [
        {
          fields: {
            file: {
              url: img3
            }
          }
        }
      ]
    }
  },
  
  {
    sys: {
      id: "4"
    },
    fields: {
      name: "pedicure",
      slug: "pedicure",
      price: 22,
      description:
      "The standard pedicure includes: treatment of feet, nails and cuticles. The skin of the legs become dry quickly, the feet are often subject to rubbing, experiencing discomfort from uncomfortable shoes and changes in temperature indoors and outdoors. It is important to regularly do pedicures. The service includes removing coarsened skin of the feet without damaging healthy skin, removing the cuticle, treating the nails, shaping the nails, moisturizing the cuticle with oil and treating the feet with a moisturizing cream. Pedicure helps to prevent fungal diseases, cracks and corns. Please note, treatment of corns and cracks is not included in the standard pedicure service.",
      images: [
        {
          fields: {
            file: {
              url: img4
            }
          }
        },
      ]
    }
  },
  {
    sys: {
      id: "5"
    },
    fields: {
      name: "pedicure + nail polish",
      slug: "pedicure-nail-polish",
      price: 26,
      description:
        "Nail polish is an ideal option for those who love variety, because such a polish can be changed without harm to the nail plate every day even, choosing different shades for each outfit. Before applying coating, you need to do a pedicure: treat the feet, nails, and cuticles, so that your legs will look perfect.",
      images: [
        {
          fields: {
            file: {
              url: img5
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "6"
    },
    fields: {
      name: "pedicure + gel polish",
      slug: "pedicure-gel-polish",
      price: 30,
      description:
        "Unlike nail posish, gel polish lasts longer on nails and retains shine until it is removed. In addition, gel polish protects the nail plate from mechanical and thermal influences. To add variety to your usual pedicure, highlight one or more nails with sequins, bouillons, or a matte coating. Please note, designs and removal of gel polish are paid separately.",
      images: [
        {
          fields: {
            file: {
              url: img6
            }
          }
        },
      ]
    }
  },
  {
    sys: {
      id: "7"
    },
    fields: {
      name: "men haircut",
      slug: "men-haircut",
      price: 16,
      description:
        "Men's haircut will quickly create an up-to-date image of a modern man. I will help you to choose a hairstyle shape that is ideal for your face and does not require correction for a long time.",
      images: [
        {
          fields: {
            file: {
              url: img7
            }
          }
        }
      ]
    }
  },
  {
    sys: {
      id: "8"
    },
    fields: {
      name: "boys haircut",
      slug: "boys-haircut",
      price: 14,
      description:
        "Children's haircuts for young gentlemen allow the kid to feel comfortable and relaxed: hair does not interfere during games and does not cause discomfort. You can choose any sort of haircut, universal hedgehog haircut, or any haircut for medium-length hair.",
      images: [
        {
          fields: {
            file: {
              url: img8
            }
          }
        }
      ]
    }
  },
];
