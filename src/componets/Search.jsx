import React from "react";
import { RiCustomerService2Full, RiCustomerService2Fill } from "react-icons/ri";
import { MdOutlineTravelExplore } from "react-icons/md";
const Search = () => {
  return (
    <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3 px-4 gap-4 py-16">
      <div className="lg:col-span-2 flex flex-col justify-evenly">
        <div>
          <h2>Game reserve included for You and your loved ones</h2>
          <p className="py-4">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui esse et
            deserunt labore fugit. Porro esse libero alias nemo ullam, nobis
            sint pariatur quidem suscipit voluptatem non provident molestias
            ducimus dicta earum aut, autem voluptatibus optio nihil tempora,
            laboriosam vero corrupti exercitationem. Pariatur explicabo
            perspiciatis maiores dignissimos aperiam eius nobis hic sed esse
            voluptas, officiis architecto neque commodi ad itaque, aut saepe?
            Exercitationem, minus. Exercitationem perspiciatis consequuntur illo
            ducimus, temporibus facere? Tempore unde sunt id eius atque, esse
            possimus accusamus? Magni temporibus quas cupiditate fugiat dolorem
            necessitatibus eaque consectetur? Cupiditate rem voluptatum
            recusandae placeat vitae nobis exercitationem pariatur illo dolorum.
          </p>
        </div>
        <div className="grid sm:grid-cols-2 gap-8 py-4">
          <div className="flex flex-col lg:flex-row items-center text-center">
            <button>
              <RiCustomerService2Fill size={40} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW
              </p>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row text-center items-center">
            <button>
              <MdOutlineTravelExplore size={40} />
            </button>
            <div>
              <h3 className="py-2">LEADING SERVICE</h3>
              <p className="py-1">
                ALL-INCLUSIVE COMPANY FOR 20 YEARS IN A ROW
              </p>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className="border center text-center">
          <p className="pt-2">GET AN ADDITIONAL 10% OFF</p>
          <p className="py-4">12 HOURS LEFT</p>
          <button className="w-full text-[#fff] py-2">BOOK NOW AND SAVE</button>
        </div>
        <form className="w-full">
          <div className="flex flex-col my-2">
            <label>Destination</label>
            <select className="border rounded-md p-2">
              <option>Lagos Island</option>
              <option>Nairobi</option>
              <option>Cairo</option>
              <option>Sun City</option>
              <option>Abuja</option>
              <option>Cape Town</option>
              <option>Ibadan</option>
              <option>Rwanda</option>
              <option>Accra</option>
              <option>Abidjan</option>
              <option>Benin</option>
              <option>Free town</option>
              <option>Lome</option>
            </select>
          </div>
          <div className="flex flex-col my-4">
            <label>Sign-In</label>
            <input className="border rounded-md p-2" type="date" />
          </div>

          <div className="flex flex-col my-2">
            <label>Sign-Out</label>
            <input className="border rounded-md p-2" type="date" />
          </div>
          <button className="w-full">Payment & Availability</button>
        </form>
      </div>
    </div>
  );
};

export default Search;
