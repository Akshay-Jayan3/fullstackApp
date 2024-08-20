import Card from "@/components/card";
import Image from "next/image";
import pic from "@/assets/images/hollowed-boxes.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faHeadset, faTruck} from '@fortawesome/free-solid-svg-icons';

export default function Home() {
  const comboKits = [
    {
      kitName: "Hosteler Starter Pack",
      description:
        "Perfect for students and travelers. Includes all the essentials needed for a comfortable hostel stay.",
      price: "$99.99",
      features: ["Compact Design", "Essential Items", "Budget-Friendly"],
      bgColor: "#CB9BFA",
    },
    {
      kitName: "Couples Essentials Kit",
      description:
        "A cozy and stylish kit designed for couples starting a new life together.",
      price: "$149.99",
      features: ["Comfort Essentials", "Stylish Design", "Value Pack:"],
      bgColor: "#FFB6C1",
    },
    {
      kitName: "Family Home Kit",
      description:
        "A comprehensive kit with high-quality essentials for the whole family.",
      price: "$199.99",
      features: ["Family-Friendly", "Versatile", "High Quality"],
      bgColor: "#5ECCA0",
    },
    {
      kitName: "Customizable Kit",
      description:
        "Tailor this kit to your specific needs. Choose from a variety of items to create your perfect kit.",
      price: "$79.99",
      features: ["Tailored Options", "Personalized", "Flexible Pricing"],
      bgColor: "#FFA07A",
    },
    {
      kitName: "Adventure Travel Kit",
      description:
        "Everything you need for your next outdoor adventure. Compact, durable, and ready to go.",
      price: "$129.99",
      features: ["Portable", "Durable", "Multi-Functional"],
      bgColor: "#F8FD91",
    },
    {
      kitName: "Office Essentials Kit",
      description:
        "Set up your home office with all the essentials for a productive work environment.",
      price: "$89.99",
      features: ["Ergonomic", "Organized", "Tech-Savvy"],
      bgColor: "#87CEEB",
    },
    {
      kitName: "Fitness Starter Pack",
      description:
        "Get your fitness journey started with this kit that includes basic workout essentials.",
      price: "$59.99",
      features: ["Compact", "Versatile", "Motivational"],
      bgColor: "#FFE4C4", // Tomato - energetic and motivating
    },
    {
      kitName: "Kitchen Essentials Kit",
      description:
        "Everything you need to start cooking in your new kitchen, from basic utensils to cookware.",
      price: "$79.99",
      features: ["Complete Set", "Durable", "Versatile"],
      bgColor: "#FAFAD2 ", // Steel Blue - calm and reliable
    },
  ];

  return (
    <main className="w-full h-full">
      <section className="w-full flex mb-8">
        <div className="w-1/2 h-full flex py-40">
          <div className="flex flex-col gap-3">
            <h1 className="text-3xl">New to town ?</h1>
            <h1 className="text-3xl">We've got you covered !</h1>
            <div>
              <p>
                Discover essential starter packs tailored for hostelers,
                couples, and families to make your move seamless and stress-free
              </p>
            </div>
            <button className="max-w-fit p-4 bg-[#1E1E1E] shadow-lg rounded-lg text-white text-sm font-bold">
              Explore More
            </button>
          </div>
        </div>
        <div className="w-1/2 ">
          <Image
            src={pic}
            sizes="100vw"
            // Make the image display full width
            style={{
              width: "100%",
              height: "auto",
            }}
          />
        </div>
      </section>
      <section className="w-full py-24">
        <h1 className="text-3xl mb-3">Choose the Perfect Combo Kit for You</h1>
        <p>
          We’ve curated essential kits to help you get started, no matter who
          you are or where you’re moving
        </p>
        <div className="w-full flex flex-wrap gap-4 py-12 justify-center">
          {comboKits.map((kit, i) => (
            <Card
              key={i}
              kitName={kit.kitName}
              description={kit.description}
              features={kit.features}
              price={kit.price}
              bgColor={kit.bgColor}
            />
          ))}
        </div>
      </section>
      <section className="w-full py-24">
        <div className="flex">
          <div className="w-1/2"></div>
          <div className="w-1/2">
            <h1 className="text-3xl mb-3">Create Your Perfect Kit!</h1>
            <p>
              Personalize your kit to fit your needs. Choose from a variety of
              essentials and extras to make your move smooth and comfortable.
            </p>
            <div className="py-8">
              <ul className="flex flex-col gap-3">
                <li>Wide Range of Essentials</li>
                <li>Flexibility</li>
                <li>Budget Control</li>
                <li>Personal Touch</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-24">
        <div className="flex flex-col gap-6">
          <h1 className="text-3xl mb-3">Why We're Your Best Choice</h1>
          <div className="w-full py-8 flex gap-4 justify-center items-center">
            <div className="flex flex-col gap-3 justify-center items-center w-1/3">
            <FontAwesomeIcon icon={faCartShopping} width={32} height={32} />
              <h4>Top Quality Essentials</h4>
              <p>
                Our kits include high-quality, durable items, ensuring you get
                the best start in your new home
              </p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center w-1/3">
            <FontAwesomeIcon icon={faTruck} width={32} height={32} />
              <h4>Complimentary Delivery</h4>
              <p>Enjoy free delivery on all orders, right to your doorstep.</p>
            </div>
            <div className="flex flex-col gap-3 justify-center items-center w-1/3">
            <FontAwesomeIcon icon={faHeadset}  width={32} height={32}/>
              <h4> Customer Support</h4>
              <p>
                Our dedicated customer support team is here to assist you with
                any questions or concerns
              </p>
            </div>
          </div>
        </div>
      </section>
      <section className="w-full py-24">
        <div className="flex">
          <div className="w-1/2"></div>
          <div className="w-1/2 flex flex-col gap-6">
            <h1 className="text-3xl mb-3">What Drives Us</h1>
            <p>
              Welcome to New Town, your trusted partner in making your move to a
              new city as seamless as possible. We understand the challenges of
              starting fresh in a new place, and we're here to help. Our mission
              is to provide high-quality, essential combo kits that cater to the
              unique needs of hostelers, couples, and families. We aim to
              simplify the moving process, allowing you to focus on settling
              into your new home.
            </p>
            <button className="max-w-fit p-4 bg-[#1E1E1E] shadow-lg rounded-lg text-white text-sm font-bold">Join Today</button>
          </div>
        </div>
      </section>
    </main>
  );
}
